import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ExternalLink } from '@/components/external-link';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import {
  glossaryEntries,
  learningModules,
  oceanArticles,
  oceanFacts,
  oceanTopics,
} from '@/data/oceanKnowledge';
import { useTheme } from '@/hooks/use-theme';

const glossaryPreview = glossaryEntries.slice(0, 6);

export default function OceanAtlasScreen() {
  const theme = useTheme();

  return (
    <ScrollView
      style={[styles.scrollView, { backgroundColor: theme.background }]}
      contentContainerStyle={styles.scrollContent}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.container}>
          <ThemedView style={[styles.hero, { borderColor: theme.border }]}>
            <Image
              source={require('@/assets/images/ocean-hero.png')}
              contentFit="cover"
              style={styles.heroImage}
            />
            <View style={styles.heroOverlay} />
            <View style={styles.heroText}>
              <ThemedText type="smallBold" style={styles.heroEyebrow}>
                Ocean Atlas
              </ThemedText>
              <ThemedText type="title" style={styles.heroTitle}>
                A learning database for the sea
              </ThemedText>
              <ThemedText style={styles.heroCopy}>
                Build ocean literacy through facts, guided lessons, glossary terms, and
                source-linked articles.
              </ThemedText>
            </View>
          </ThemedView>

          <View style={styles.statsRow}>
            <Stat value={String(oceanTopics.length)} label="topics" />
            <Stat value={String(oceanArticles.length)} label="articles" />
            <Stat value={String(oceanFacts.length)} label="fact cards" />
            <Stat value={String(glossaryEntries.length)} label="terms" />
          </View>

          <View style={styles.sectionHeader}>
            <ThemedText type="subtitle">Learning modules</ThemedText>
          </View>

          <View style={styles.stack}>
            {learningModules.map((module) => (
              <ThemedView
                key={module.id}
                type="card"
                style={[styles.card, { borderColor: theme.border }]}>
                <ThemedText type="smallBold" themeColor="tint">
                  {module.title}
                </ThemedText>
                <ThemedText themeColor="textSecondary">{module.goal}</ThemedText>
                {module.lessons.map((lesson, index) => (
                  <View key={lesson} style={styles.bulletRow}>
                    <View style={[styles.dot, { backgroundColor: theme.tint }]} />
                    <ThemedText type="small" style={styles.bulletText}>
                      {index + 1}. {lesson}
                    </ThemedText>
                  </View>
                ))}
              </ThemedView>
            ))}
          </View>

          <View style={styles.sectionHeader}>
            <ThemedText type="subtitle">Essential ocean facts</ThemedText>
          </View>

          <View style={styles.stack}>
            {oceanFacts.map((fact) => (
              <ThemedView
                key={fact.id}
                type="card"
                style={[styles.card, { borderColor: theme.border }]}>
                <ThemedText type="smallBold" themeColor="accent">
                  {fact.title}
                </ThemedText>
                <ThemedText>{fact.fact}</ThemedText>
                <ThemedText type="small" themeColor="textSecondary">
                  {fact.whyItMatters}
                </ThemedText>
                <ExternalLink href={fact.sourceUrl}>
                  <ThemedText type="linkPrimary">Source: {fact.sourceLabel}</ThemedText>
                </ExternalLink>
              </ThemedView>
            ))}
          </View>

          <View style={styles.sectionHeader}>
            <ThemedText type="subtitle">Glossary</ThemedText>
            <Link href="/glossary" asChild>
              <Pressable
                accessibilityRole="button"
                style={({ pressed }) => [styles.secondaryButton, pressed && styles.pressed]}>
                <ThemedText type="smallBold" themeColor="tint">
                  Open glossary
                </ThemedText>
              </Pressable>
            </Link>
          </View>

          <View style={styles.stack}>
            {glossaryPreview.map((entry) => (
              <ThemedView
                key={entry.term}
                type="card"
                style={[styles.glossaryCard, { borderColor: theme.border }]}>
                <ThemedText type="smallBold">{entry.term}</ThemedText>
                <ThemedText type="small" themeColor="textSecondary">
                  {entry.definition}
                </ThemedText>
                <ThemedText type="small">{entry.example}</ThemedText>
              </ThemedView>
            ))}
          </View>

          <ThemedView type="cardMuted" style={[styles.card, { borderColor: theme.border }]}>
            <ThemedText type="smallBold">Keep exploring</ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              Start with Explore, open a topic guide, read two articles, then return here to
              connect the terms and facts.
            </ThemedText>
            <Link href="/explore" asChild>
              <Pressable
                accessibilityRole="button"
                style={({ pressed }) => [
                  styles.primaryButton,
                  { backgroundColor: theme.tint },
                  pressed && styles.pressed,
                ]}>
                <ThemedText type="smallBold" style={styles.primaryButtonText}>
                  Explore topics
                </ThemedText>
              </Pressable>
            </Link>
          </ThemedView>
        </ThemedView>
      </SafeAreaView>
    </ScrollView>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <ThemedView type="card" style={styles.statCard}>
      <ThemedText type="subtitle" style={styles.statValue}>
        {value}
      </ThemedText>
      <ThemedText type="small" themeColor="textSecondary">
        {label}
      </ThemedText>
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
    minHeight: 340,
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
    backgroundColor: 'rgba(3, 28, 38, 0.56)',
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
  statsRow: {
    gap: Spacing.three,
  },
  statCard: {
    borderRadius: 8,
    padding: Spacing.three,
    gap: Spacing.one,
  },
  statValue: {
    fontSize: 24,
    lineHeight: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  stack: {
    gap: Spacing.three,
  },
  card: {
    borderWidth: 1,
    borderRadius: 8,
    padding: Spacing.four,
    gap: Spacing.three,
  },
  glossaryCard: {
    borderWidth: 1,
    borderRadius: 8,
    padding: Spacing.three,
    gap: Spacing.two,
  },
  bulletRow: {
    flexDirection: 'row',
    gap: Spacing.two,
    alignItems: 'flex-start',
  },
  bulletText: {
    flex: 1,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginTop: 7,
  },
  primaryButton: {
    alignSelf: 'flex-start',
    minHeight: 44,
    borderRadius: 8,
    paddingHorizontal: Spacing.three,
    justifyContent: 'center',
  },
  primaryButtonText: {
    color: '#FFFFFF',
  },
  secondaryButton: {
    minHeight: 44,
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: Spacing.two,
  },
  pressed: {
    opacity: 0.72,
  },
});
