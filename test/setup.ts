// Every language loaded up front, so tests can switch languages synchronously.
import { LANGUAGES, loadLang } from '../src/i18n';
import '../src/learn/lessons';

await Promise.all(LANGUAGES.map(l => loadLang(l.id)));
