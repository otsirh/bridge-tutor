// Every language loaded up front, so tests can switch languages synchronously.
import { LANGUAGES, loadLang } from '../src/i18n';
import { ensureLessons } from '../src/learn/lessons';

await Promise.all(LANGUAGES.flatMap(l => [loadLang(l.id), ensureLessons(l.id)]));
