// Lesson types shared by the lesson files.

export type LessonTopic =
  | 'Basics'
  | 'Bidding'
  | 'Competitive bidding'
  | 'Slam bidding'
  | 'Declarer play'
  | 'Defense'
  | 'Scoring & tactics';

export type LessonLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface QuizQuestion {
  q: string;
  options: string[];
  answer: number;
  explain: string;
}

export interface Lesson {
  id: string; // kebab-case, unique
  title: string;
  topic: LessonTopic;
  level: LessonLevel;
  summary: string; // one plain sentence
  body: string; // HTML
  keyPoints: string[]; // 3-6 short takeaways, plain text
  quiz: QuizQuestion[]; // 3-5 questions, answer = index into options
}
