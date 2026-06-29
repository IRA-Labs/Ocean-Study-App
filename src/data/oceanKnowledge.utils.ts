import {
  oceanArticles,
  oceanTopics,
  quizQuestions,
  type GlossaryEntry,
  type OceanArticle,
  type OceanTopic,
  type QuizQuestion,
} from './oceanKnowledge';

export type TopicFilter = {
  category?: string;
  query?: string;
};

export function normalizeQuery(query: string) {
  return query.trim().toLowerCase();
}

export function filterTopics(topics: OceanTopic[], filter: TopicFilter) {
  const category = filter.category ?? 'All';
  const query = normalizeQuery(filter.query ?? '');

  return topics.filter((topic) => {
    const matchesCategory = category === 'All' || topic.category === category;
    const searchableText = [
      topic.title,
      topic.summary,
      topic.category,
      topic.depth,
      topic.highlight,
      topic.tags.join(' '),
    ]
      .join(' ')
      .toLowerCase();

    return matchesCategory && (query.length === 0 || searchableText.includes(query));
  });
}

export function getTopicById(topicId: string, topics: OceanTopic[] = oceanTopics) {
  return topics.find((topic) => topic.id === topicId);
}

export function getArticleById(articleId: string, articles: OceanArticle[] = oceanArticles) {
  return articles.find((article) => article.id === articleId);
}

export function getArticlesForTopic(
  topicId: string,
  topics: OceanTopic[] = oceanTopics,
  articles: OceanArticle[] = oceanArticles,
) {
  const topic = getTopicById(topicId, topics);
  if (!topic) {
    return [];
  }

  return topic.articleIds
    .map((articleId) => getArticleById(articleId, articles))
    .filter((article): article is OceanArticle => Boolean(article));
}

export function getQuizForTopic(topicId: string, questions: QuizQuestion[] = quizQuestions) {
  return questions.find((question) => question.topicId === topicId);
}

export function isCorrectAnswer(question: QuizQuestion, answerIndex: number) {
  return question.correctAnswer === answerIndex;
}

export function filterGlossaryEntries(entries: GlossaryEntry[], query: string, letter = 'All') {
  const normalizedQuery = normalizeQuery(query);
  const normalizedLetter = normalizeQuery(letter);

  return entries.filter((entry) => {
    const matchesLetter =
      normalizedLetter === 'all' || entry.term.toLowerCase().startsWith(normalizedLetter);
    const searchableText = `${entry.term} ${entry.definition} ${entry.example}`.toLowerCase();

    return matchesLetter && (normalizedQuery.length === 0 || searchableText.includes(normalizedQuery));
  });
}

export function getGlossaryLetters(entries: GlossaryEntry[]) {
  return ['All', ...Array.from(new Set(entries.map((entry) => entry.term.charAt(0).toUpperCase())))];
}

export function getSavedArticles(savedArticleIds: string[], articles: OceanArticle[] = oceanArticles) {
  const savedSet = new Set(savedArticleIds);
  return articles.filter((article) => savedSet.has(article.id));
}
