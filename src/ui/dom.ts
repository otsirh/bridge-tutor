// Tiny DOM helpers.

type Child = Node | string | number | null | undefined | false | Child[];
type Attrs = Record<string, unknown> | null | undefined;

export function h(tag: string, attrs?: Attrs, ...children: Child[]): HTMLElement {
  const el = document.createElement(tag);
  if (attrs) {
    for (const [k, v] of Object.entries(attrs)) {
      if (v === undefined || v === null || v === false) continue;
      if (k === 'class') el.className = String(v);
      else if (k === 'html') el.innerHTML = String(v);
      else if (k === 'style' && typeof v === 'object') Object.assign(el.style, v);
      else if (k.startsWith('on') && typeof v === 'function') el.addEventListener(k.slice(2).toLowerCase(), v as EventListener);
      else if (v === true) el.setAttribute(k, '');
      else el.setAttribute(k, String(v));
    }
  }
  append(el, children);
  return el;
}

function append(el: HTMLElement, children: Child[]) {
  for (const c of children) {
    if (c === null || c === undefined || c === false) continue;
    if (Array.isArray(c)) append(el, c);
    else if (c instanceof Node) el.appendChild(c);
    else el.appendChild(document.createTextNode(String(c)));
  }
}

export function clear(el: HTMLElement) {
  while (el.firstChild) el.removeChild(el.firstChild);
}

const FOCUSABLE = 'button, a[href], input, select, textarea, [tabindex]';

/** What identifies a focused control across redraws: its kind and its name (or a `data-key` when the name changes). */
function focusKey(el: Element): string {
  const name = (el as HTMLElement).dataset?.key ?? el.getAttribute('aria-label') ?? el.textContent?.trim() ?? '';
  return `${el.tagName}|${el.classList[0] ?? ''}|${name}`;
}

function usable(el: HTMLElement): boolean {
  return !(el as HTMLButtonElement).disabled && el.getAttribute('tabindex') !== '-1' && el.getClientRects().length > 0;
}

/**
 * Replace a region's content only when its signature changes; keeps the scroll
 * position and the keyboard focus. Focus returns to the same control when it is
 * redrawn; a control in a focus group (`data-fg`: the bids, your cards) falls
 * back to the group's first usable control as soon as one appears (your next
 * card after the bots have played).
 */
export class Region {
  private sig = '';
  private lost: { key: string; group: string | null; index: number } | null = null;
  constructor(public el: HTMLElement) {}
  update(signature: string, render: () => Child) {
    if (signature === this.sig) return;
    this.sig = signature;
    const scroll = this.el.scrollTop;
    const active = document.activeElement;
    if (active instanceof HTMLElement && active !== this.el && this.el.contains(active)) {
      const key = focusKey(active);
      const same = [...this.el.querySelectorAll(FOCUSABLE)].filter(e => focusKey(e) === key);
      this.lost = { key, group: active.dataset.fg ?? null, index: same.indexOf(active) };
    }
    clear(this.el);
    append(this.el, [render()]);
    this.el.scrollTop = scroll;
    this.restoreFocus();
  }
  private restoreFocus() {
    const lost = this.lost;
    const active = document.activeElement;
    if (!lost || (active && active !== document.body && !this.el.contains(active))) {
      if (active && active !== document.body) this.lost = null; // focus moved on elsewhere
      return;
    }
    const all = [...this.el.querySelectorAll<HTMLElement>(FOCUSABLE)].filter(usable);
    const same = all.filter(e => focusKey(e) === lost.key);
    const target = same[Math.min(lost.index, same.length - 1)] ?? (lost.group ? all.find(e => e.dataset.fg === lost.group) : undefined);
    if (!target) return; // try again when the region next changes
    target.focus({ preventScroll: true });
    this.lost = null;
  }
  force() {
    this.sig = '';
  }
}

/** Colour suit symbols in a text: wraps ♥♦ (red) and ♠♣ (black). */
export function suitText(text: string): HTMLElement {
  const span = h('span');
  const parts = text.split(/([♠♥♦♣])/);
  for (const p of parts) {
    if (!p) continue;
    if (p === '♥' || p === '♦') span.appendChild(h('span', { class: 'suit red' }, p));
    else if (p === '♠' || p === '♣') span.appendChild(h('span', { class: 'suit black' }, p));
    else span.appendChild(document.createTextNode(p));
  }
  return span;
}

/** Colour the suit symbols inside an element's text nodes (lesson content). */
export function colorSuitsIn(root: HTMLElement) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  while (walker.nextNode()) {
    const t = walker.currentNode as Text;
    if (/[♠♥♦♣]/.test(t.data) && !(t.parentElement?.classList.contains('suit'))) nodes.push(t);
  }
  for (const t of nodes) t.replaceWith(suitText(t.data));
}
