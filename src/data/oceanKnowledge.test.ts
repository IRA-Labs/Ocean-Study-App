import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { oceanArticles, oceanTopics, quizQuestions } from './oceanKnowledge.ts';
import {
  filterTopics,
  getArticleById,
  getArticlesForTopic,
  getQuizForTopic,
  getSavedArticles,
  getTopicById,
  isCorrectAnswer,
} from './oceanKnowledge.utils.ts';

describe('ocean knowledge utilities', () => {
  it('finds topics by id', () => {
    assert.equal(getTopicById('ocean-zones')?.title, 'Ocean Zones');
    assert.equal(getTopicById('missing-topic'), undefined);
  });

  it('returns ordered articles for a topic', () => {
    const articles = getArticlesForTopic('tools-of-exploration');

    assert.deepEqual(
      articles.map((article) => article.id),
      ['mapping-the-seafloor', 'robotic-explorers'],
    );
  });

  it('filters topics by category and text query', () => {
    const results = filterTopics(oceanTopics, {
      category: 'Exploration',
      query: 'sonar',
    });

    assert.equal(results.length, 1);
    assert.equal(results[0].id, 'tools-of-exploration');
  });

  it('gets saved articles in source order', () => {
    const savedArticles = getSavedArticles(['robotic-explorers', 'reef-cities']);

    assert.deepEqual(
      savedArticles.map((article) => article.id),
      ['reef-cities', 'robotic-explorers'],
    );
  });

  it('checks quiz answers', () => {
    const quiz = getQuizForTopic('ocean-zones', quizQuestions);

    assert.ok(quiz);
    assert.equal(isCorrectAnswer(quiz, quiz.correctAnswer), true);
    assert.equal(isCorrectAnswer(quiz, 3), false);
  });

  it('keeps articles linked to real topics', () => {
    for (const article of oceanArticles) {
      assert.ok(getTopicById(article.topicId), `${article.id} has a missing topic`);
      assert.ok(getArticleById(article.id), `${article.id} can be found`);
    }
  });
});
