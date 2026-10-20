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

/** Replace a region's content only when its signature changes; keeps scroll position. */
export class Region {
  private sig = '';
  constructor(public el: HTMLElement) {}
  update(signature: string, render: () => Child) {
    if (signature === this.sig) return;
    this.sig = signature;
    const scroll = this.el.scrollTop;
    clear(this.el);
    append(this.el, [render()]);
    this.el.scrollTop = scroll;
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
