import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import {
  dailyFacts,
  learningPath,
  oceanArticles,
  oceanFacts,
  oceanTopics,
  quizQuestions,
} from '@/data/oceanKnowledge';
import { isCorrectAnswer } from '@/data/oceanKnowledge.utils';
import { useSavedArticles } from '@/hooks/use-saved-articles';
import { useTheme } from '@/hooks/use-theme';

export default function HomeScreen() {
  const theme = useTheme();
  const { savedCount } = useSavedArticles();
  const [factIndex, setFactIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const featuredTopics = useMemo(() => oceanTopics.slice(0, 3), []);
  const featuredArticle = oceanArticles[0];
  const quiz = quizQuestions[0];
  const hasAnswered = selectedAnswer !== null;
  const answeredCorrectly = selectedAnswer !== null && isCorrectAnswer(quiz, selectedAnswer);

  return (
    <ScrollView
      style={[styles.scrollView, { backgroundColor: theme.background }]}
      contentContainerStyle={styles.scrollContent}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.container}>
          <ThemedView style={styles.heroCard}>
            <Image
              source={require('@/assets/images/ocean-hero.png')}
              contentFit="cover"
              style={styles.heroImage}
            />
            <View style={styles.heroOverlay} />
            <View style={styles.heroContent}>
              <ThemedText type="smallBold" style={styles.heroEyebrow}>
                Ocean learning atlas
              </ThemedText>
              <ThemedText type="title" style={styles.heroTitle}>
                Ocean Study
              </ThemedText>
              <ThemedText style={styles.heroCopy}>
                Learn ocean zones, marine life, climate connections, seafloor science,
                exploration tools, conservation, and everyday ocean facts.
              </ThemedText>

              <View style={styles.metricRow}>
                <Metric value={String(oceanTopics.length)} label="topics" />
                <Metric value={String(oceanArticles.length)} label="articles" />
                <Metric value={String(oceanFacts.length)} label="fact cards" />
                <Metric value={String(savedCount)} label="saved" />
              </View>

              <View style={styles.heroActions}>
                <Link href="/explore" asChild>
                  <Pressable
                    accessibilityRole="button"
                    style={({ pressed }) => [styles.primaryHeroButton, pressed && styles.pressed]}>
                    <ThemedText type="smallBold" style={styles.primaryHeroButtonText}>
                      Explore
                    </ThemedText>
                  </Pressable>
                </Link>
                <Link href={{ pathname: '/article/[id]', params: { id: featuredArticle.id } }} asChild>
                  <Pressable
                    accessibilityRole="button"
                    style={({ pressed }) => [styles.secondaryHeroButton, pressed && styles.pressed]}>
                    <ThemedText type="smallBold" style={styles.secondaryHeroButtonText}>
                      Read first article
                    </ThemedText>
                  </Pressable>
                </Link>
              </View>
            </View>
          </ThemedView>

          <View style={styles.sectionHeader}>
            <ThemedText type="subtitle">Today&apos;s ocean brief</ThemedText>
            <Pressable
              accessibilityRole="button"
              onPress={() => setFactIndex((index) => (index + 1) % dailyFacts.length)}
              style={({ pressed }) => [
                styles.textButton,
                { borderColor: theme.border },
                pressed && styles.pressed,
              ]}>
              <ThemedText type="smallBold" themeColor="tint">
                Next fact
              </ThemedText>
            </Pressable>
          </View>

          <ThemedView type="card" style={[styles.card, { borderColor: theme.border }]}>
            <ThemedText type="smallBold" themeColor="tint">
              Fact {factIndex + 1} of {dailyFacts.length}
            </ThemedText>
            <ThemedText style={styles.cardCopy}>{dailyFacts[factIndex]}</ThemedText>
          </ThemedView>

          <View style={styles.sectionHeader}>
            <ThemedText type="subtitle">Ocean fact database</ThemedText>
            <Link href="/about" asChild>
              <Pressable accessibilityRole="button" style={({ pressed }) => pressed && styles.pressed}>
                <ThemedText type="linkPrimary">Open atlas</ThemedText>
              </Pressable>
            </Link>
          </View>

          <View style={styles.factGrid}>
            {oceanFacts.slice(0, 3).map((fact) => (
              <ThemedView
                key={fact.id}
                type="card"
                style={[styles.factCard, { borderColor: theme.border }]}>
                <ThemedText type="smallBold" themeColor="accent">
                  {fact.title}
                </ThemedText>
                <ThemedText type="small">{fact.fact}</ThemedText>
                <ThemedText type="small" themeColor="textSecondary">
                  {fact.whyItMatters}
                </ThemedText>
              </ThemedView>
            ))}
          </View>

          <View style={styles.sectionHeader}>
            <ThemedText type="subtitle">Learning route</ThemedText>
          </View>

          <View style={styles.pathGrid}>
            {learningPath.map((item, index) => (
              <ThemedView
                key={item.label}
                type="card"
                style={[styles.pathCard, { borderColor: theme.border }]}>
                <View style={[styles.stepBadge, { backgroundColor: theme.backgroundSelected }]}>
                  <ThemedText type="smallBold" themeColor="tint">
                    {index + 1}
                  </ThemedText>
                </View>
                <ThemedText type="smallBold">{item.label}</ThemedText>
                <ThemedText type="small" themeColor="textSecondary">
                  {item.detail}
                </ThemedText>
              </ThemedView>
            ))}
          </View>

          <ThemedView type="card" style={[styles.quizCard, { borderColor: theme.border }]}>
            <ThemedText type="smallBold" themeColor="accent">
              Quick check
            </ThemedText>
            <ThemedText type="subtitle" style={styles.quizPrompt}>
              {quiz.prompt}
            </ThemedText>

            <View style={styles.answerGrid}>
              {quiz.answers.map((answer, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === quiz.correctAnswer;
                const showCorrect = hasAnswered && isCorrect;
                const showWrong = isSelected && !isCorrect;

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
                            : isSelected
                              ? theme.backgroundSelected
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

            {hasAnswered && (
              <ThemedView
                type="cardMuted"
                style={[styles.feedbackBox, { borderColor: theme.border }]}>
                <ThemedText type="smallBold" themeColor={answeredCorrectly ? 'success' : 'danger'}>
                  {answeredCorrectly ? 'Correct' : 'Try again'}
                </ThemedText>
                <ThemedText type="small" themeColor="textSecondary">
                  {quiz.explanation}
                </ThemedText>
              </ThemedView>
            )}
          </ThemedView>

          <View style={styles.sectionHeader}>
            <ThemedText type="subtitle">Featured topics</ThemedText>
            <Link href="/explore" asChild>
              <Pressable accessibilityRole="button" style={({ pressed }) => pressed && styles.pressed}>
                <ThemedText type="linkPrimary">View all</ThemedText>
              </Pressable>
            </Link>
          </View>

          <View style={styles.topicList}>
            {featuredTopics.map((topic) => (
              <Link
                key={topic.id}
                href={{ pathname: '/topic/[id]', params: { id: topic.id } }}
                asChild>
                <Pressable accessibilityRole="button" style={({ pressed }) => pressed && styles.pressed}>
                  <ThemedView
                    type="card"
                    style={[styles.topicCard, { borderColor: theme.border }]}>
                    <View>
                      <ThemedText type="smallBold" themeColor="tint">
                        {topic.category}
                      </ThemedText>
                      <ThemedText type="smallBold">{topic.title}</ThemedText>
                    </View>
                    <ThemedText type="small" themeColor="textSecondary">
                      {topic.summary}
                    </ThemedText>
                  </ThemedView>
                </Pressable>
              </Link>
            ))}
          </View>
        </ThemedView>
      </SafeAreaView>
    </ScrollView>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <View style={styles.metric}>
      <ThemedText type="smallBold" style={styles.metricValue}>
        {value}
      </ThemedText>
      <ThemedText type="small" style={styles.metricLabel}>
        {label}
      </ThemedText>
    </View>
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
    paddingBottom: Spacing.six,
  },
  heroCard: {
    minHeight: 440,
    overflow: 'hidden',
    borderRadius: 8,
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
    backgroundColor: 'rgba(3, 28, 38, 0.5)',
  },
  heroContent: {
    gap: Spacing.three,
    padding: Spacing.four,
  },
  heroEyebrow: {
    color: '#BFF5EF',
    textTransform: 'uppercase',
  },
  heroTitle: {
    color: '#FFFFFF',
  },
  heroCopy: {
    color: '#E9FFFC',
    maxWidth: 620,
  },
  metricRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  metric: {
    minWidth: 92,
    borderRadius: 8,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    backgroundColor: 'rgba(255, 255, 255, 0.16)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.25)',
  },
  metricValue: {
    color: '#FFFFFF',
  },
  metricLabel: {
    color: '#CFF7F2',
  },
  heroActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  primaryHeroButton: {
    minHeight: 46,
    borderRadius: 8,
    paddingHorizontal: Spacing.four,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  primaryHeroButtonText: {
    color: '#063D4A',
  },
  secondaryHeroButton: {
    minHeight: 46,
    borderRadius: 8,
    paddingHorizontal: Spacing.four,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.5)',
    backgroundColor: 'rgba(255,255,255,0.12)',
  },
  secondaryHeroButtonText: {
    color: '#FFFFFF',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: Spacing.two,
  },
  textButton: {
    minHeight: 42,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: Spacing.three,
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.72,
  },
  card: {
    borderWidth: 1,
    borderRadius: 8,
    padding: Spacing.four,
    gap: Spacing.two,
  },
  cardCopy: {
    maxWidth: 700,
  },
  pathGrid: {
    gap: Spacing.three,
  },
  factGrid: {
    gap: Spacing.three,
  },
  factCard: {
    borderWidth: 1,
    borderRadius: 8,
    padding: Spacing.three,
    gap: Spacing.two,
  },
  pathCard: {
    borderWidth: 1,
    borderRadius: 8,
    padding: Spacing.three,
    gap: Spacing.two,
  },
  stepBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quizCard: {
    borderWidth: 1,
    borderRadius: 8,
    padding: Spacing.four,
    gap: Spacing.three,
  },
  quizPrompt: {
    fontSize: 22,
    lineHeight: 30,
  },
  answerGrid: {
    gap: Spacing.two,
  },
  answerButton: {
    minHeight: 48,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: Spacing.three,
    justifyContent: 'center',
  },
  answerTextOnColor: {
    color: '#FFFFFF',
  },
  feedbackBox: {
    borderWidth: 1,
    borderRadius: 8,
    padding: Spacing.three,
    gap: Spacing.one,
  },
  topicList: {
    gap: Spacing.three,
  },
  topicCard: {
    borderWidth: 1,
    borderRadius: 8,
    padding: Spacing.three,
    gap: Spacing.two,
  },
});
