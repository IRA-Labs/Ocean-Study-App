import { Image } from 'expo-image';
import { Link, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { getArticlesForTopic, getQuizForTopic, getTopicById, isCorrectAnswer } from '@/data/oceanKnowledge.utils';
import { useTheme } from '@/hooks/use-theme';

export default function TopicDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const theme = useTheme();
  const topic = getTopicById(id);
  const articles = topic ? getArticlesForTopic(topic.id) : [];
  const quiz = topic ? getQuizForTopic(topic.id) : undefined;
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  if (!topic) {
    return (
      <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
        <ThemedView style={styles.container}>
          <ThemedText type="subtitle">Topic not found</ThemedText>
          <Link href="/explore" asChild>
            <Pressable
              accessibilityRole="button"
              style={({ pressed }) => [
                styles.primaryButton,
                { backgroundColor: theme.tint },
                pressed && styles.pressed,
              ]}>
              <ThemedText type="smallBold" style={styles.primaryButtonText}>
                Back to Explore
              </ThemedText>
            </Pressable>
          </Link>
        </ThemedView>
      </SafeAreaView>
    );
  }

  return (
    <ScrollView
      style={[styles.scrollView, { backgroundColor: theme.background }]}
      contentContainerStyle={styles.scrollContent}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.container}>
          <ThemedView style={[styles.hero, { borderColor: theme.border }]}>
            <Image
              source={require('@/assets/images/ocean-depths.png')}
              contentFit="cover"
              style={styles.heroImage}
            />
            <View style={styles.heroOverlay} />
            <View style={styles.heroText}>
              <ThemedText type="smallBold" style={styles.heroEyebrow}>
                {topic.category}
              </ThemedText>
              <ThemedText type="title" style={styles.heroTitle}>
                {topic.title}
              </ThemedText>
              <ThemedText style={styles.heroCopy}>{topic.summary}</ThemedText>
            </View>
          </ThemedView>

          <ThemedView type="card" style={[styles.card, { borderColor: theme.border }]}>
            <ThemedText type="smallBold" themeColor="tint">
              Why study this
            </ThemedText>
            <ThemedText>{topic.highlight}</ThemedText>
            <View style={styles.metaGrid}>
              <Meta label="Range" value={topic.depth} />
              <Meta label="Guide time" value={topic.timeToRead} />
              <Meta label="Articles" value={String(articles.length)} />
            </View>
          </ThemedView>

          <View style={styles.sectionHeader}>
            <ThemedText type="subtitle">Guided reads</ThemedText>
          </View>

          <View style={styles.articleStack}>
            {articles.map((article) => (
              <Link
                key={article.id}
                href={{ pathname: '/article/[id]', params: { id: article.id } }}
                asChild>
                <Pressable accessibilityRole="button" style={({ pressed }) => pressed && styles.pressed}>
                  <ThemedView
                    type="card"
                    style={[styles.articleCard, { borderColor: theme.border }]}>
                    <View style={styles.articleHeader}>
                      <View style={styles.articleTitleBlock}>
                        <ThemedText type="smallBold" themeColor="accent">
                          {article.difficulty}
                        </ThemedText>
                        <ThemedText type="smallBold">{article.title}</ThemedText>
                      </View>
                      <ThemedText type="small" themeColor="textSecondary">
                        {article.readingTime}
                      </ThemedText>
                    </View>
                    <ThemedText type="small" themeColor="textSecondary">
                      {article.subtitle}
                    </ThemedText>
                  </ThemedView>
                </Pressable>
              </Link>
            ))}
          </View>

          {quiz && (
            <ThemedView type="card" style={[styles.card, { borderColor: theme.border }]}>
              <ThemedText type="smallBold" themeColor="accent">
                Topic check
              </ThemedText>
              <ThemedText type="smallBold">{quiz.prompt}</ThemedText>
              <View style={styles.answerGrid}>
                {quiz.answers.map((answer, index) => {
                  const hasAnswered = selectedAnswer !== null;
                  const showCorrect = hasAnswered && isCorrectAnswer(quiz, index);
                  const showWrong = selectedAnswer === index && !showCorrect;

                  return (
                    <Pressable
                      key={answer}
                      accessibilityRole="button"
                      onPress={() => setSelectedAnswer(index)}
                      style={({ pressed }) => [
                        styles.answerButton,
                        {
                          backgroundColor: showCorrect
                            ? theme.success
                            : showWrong
                              ? theme.danger
                              : theme.cardMuted,
                          borderColor: theme.border,
                        },
                        pressed && styles.pressed,
                      ]}>
                      <ThemedText
                        type="smallBold"
                        style={(showCorrect || showWrong) && styles.answerTextOnColor}>
                        {answer}
                      </ThemedText>
                    </Pressable>
                  );
                })}
              </View>
              {selectedAnswer !== null && (
                <ThemedText type="small" themeColor="textSecondary">
                  {quiz.explanation}
                </ThemedText>
              )}
            </ThemedView>
          )}
        </ThemedView>
      </SafeAreaView>
    </ScrollView>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <ThemedView type="cardMuted" style={styles.metaCard}>
      <ThemedText type="smallBold" themeColor="textSecondary">
        {label}
      </ThemedText>
      <ThemedText type="smallBold">{value}</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    alignItems: 'center',
    paddingBottom: BottomTabInset + Spacing.five,
  },
  safeArea: {
    width: '100%',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    maxWidth: MaxContentWidth,
    gap: Spacing.four,
    paddingHorizontal: Spacing.three,
    paddingTop: Spacing.three,
  },
  hero: {
    minHeight: 320,
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  heroImage: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(3, 28, 38, 0.52)',
  },
  heroText: {
    gap: Spacing.two,
    padding: Spacing.four,
  },
  heroEyebrow: {
    color: '#BFF5EF',
  },
  heroTitle: {
    color: '#FFFFFF',
  },
  heroCopy: {
    color: '#E9FFFC',
  },
  card: {
    borderWidth: 1,
    borderRadius: 8,
    padding: Spacing.four,
    gap: Spacing.three,
  },
  metaGrid: {
    gap: Spacing.two,
  },
  metaCard: {
    borderRadius: 8,
    padding: Spacing.three,
    gap: Spacing.one,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  articleStack: {
    gap: Spacing.three,
  },
  articleCard: {
    borderWidth: 1,
    borderRadius: 8,
    padding: Spacing.three,
    gap: Spacing.two,
  },
  articleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: Spacing.three,
  },
  articleTitleBlock: {
    flex: 1,
    gap: Spacing.one,
  },
  answerGrid: {
    gap: Spacing.two,
  },
  answerButton: {
    minHeight: 46,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: Spacing.three,
    justifyContent: 'center',
  },
  answerTextOnColor: {
    color: '#FFFFFF',
  },
  primaryButton: {
    minHeight: 44,
    borderRadius: 8,
    paddingHorizontal: Spacing.three,
    justifyContent: 'center',
  },
  primaryButtonText: {
    color: '#FFFFFF',
  },
  pressed: {
    opacity: 0.72,
  },
});
