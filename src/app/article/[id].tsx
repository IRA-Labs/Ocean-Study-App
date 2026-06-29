import { Image } from 'expo-image';
import { Link, useLocalSearchParams } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ExternalLink } from '@/components/external-link';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { getArticleById, getTopicById } from '@/data/oceanKnowledge.utils';
import { useSavedArticles } from '@/hooks/use-saved-articles';
import { useTheme } from '@/hooks/use-theme';

function getArticleImageSource(heroImage: string) {
  if (heroImage === 'ocean-depths') {
    return require('@/assets/images/ocean-depths.png');
  }

  return require('@/assets/images/ocean-hero.png');
}

export default function ArticleDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const theme = useTheme();
  const article = getArticleById(id);
  const topic = article ? getTopicById(article.topicId) : undefined;
  const { isReady, isSaved, toggleArticle } = useSavedArticles();

  if (!article || !topic) {
    return (
      <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
        <ThemedView style={styles.container}>
          <ThemedText type="subtitle">Article not found</ThemedText>
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

  const saved = isSaved(article.id);

  return (
    <ScrollView
      style={[styles.scrollView, { backgroundColor: theme.background }]}
      contentContainerStyle={styles.scrollContent}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.container}>
          <ThemedView style={[styles.hero, { borderColor: theme.border }]}>
            <Image
              source={getArticleImageSource(article.heroImage)}
              contentFit="cover"
              style={styles.heroImage}
            />
            <View style={styles.heroOverlay} />
            <View style={styles.heroText}>
              <ThemedText type="smallBold" style={styles.heroEyebrow}>
                {topic.title} / {article.difficulty}
              </ThemedText>
              <ThemedText type="title" style={styles.heroTitle}>
                {article.title}
              </ThemedText>
              <ThemedText style={styles.heroCopy}>{article.subtitle}</ThemedText>
            </View>
          </ThemedView>

          <View style={styles.actionRow}>
            <Pressable
              accessibilityRole="button"
              disabled={!isReady}
              onPress={() => {
                void toggleArticle(article.id);
              }}
              style={({ pressed }) => [
                styles.primaryButton,
                { backgroundColor: saved ? theme.backgroundSelected : theme.tint },
                pressed && styles.pressed,
              ]}>
              <ThemedText
                type="smallBold"
                style={!saved && styles.primaryButtonText}
                themeColor={saved ? 'tint' : undefined}>
                {saved ? 'Saved' : 'Save article'}
              </ThemedText>
            </Pressable>
            <Link href={{ pathname: '/topic/[id]', params: { id: topic.id } }} asChild>
              <Pressable
                accessibilityRole="button"
                style={({ pressed }) => [
                  styles.secondaryButton,
                  { borderColor: theme.border },
                  pressed && styles.pressed,
                ]}>
                <ThemedText type="smallBold" themeColor="tint">
                  Topic guide
                </ThemedText>
              </Pressable>
            </Link>
          </View>

          <ThemedView type="card" style={[styles.card, { borderColor: theme.border }]}>
            <ThemedText type="smallBold" themeColor="accent">
              Key takeaways
            </ThemedText>
            {article.keyTakeaways.map((takeaway, index) => (
              <View key={takeaway} style={styles.takeawayRow}>
                <View style={[styles.takeawayDot, { backgroundColor: theme.tint }]} />
                <ThemedText type="small" style={styles.takeawayText}>
                  {index + 1}. {takeaway}
                </ThemedText>
              </View>
            ))}
          </ThemedView>

          {article.sections.map((section) => (
            <ThemedView
              key={section.heading}
              type="card"
              style={[styles.card, { borderColor: theme.border }]}>
              <ThemedText type="subtitle" style={styles.sectionTitle}>
                {section.heading}
              </ThemedText>
              <ThemedText themeColor="textSecondary">{section.body}</ThemedText>
            </ThemedView>
          ))}

          <ThemedView type="cardMuted" style={[styles.sourceCard, { borderColor: theme.border }]}>
            <ThemedText type="smallBold">Further reading</ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              Use the source link to continue learning, compare details, and check the evidence.
            </ThemedText>
            <ExternalLink href={article.sourceUrl}>
              <ThemedText type="linkPrimary">Source: {article.sourceLabel}</ThemedText>
            </ExternalLink>
          </ThemedView>
        </ThemedView>
      </SafeAreaView>
    </ScrollView>
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
    minHeight: 360,
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
  actionRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  primaryButton: {
    minHeight: 46,
    borderRadius: 8,
    paddingHorizontal: Spacing.four,
    justifyContent: 'center',
  },
  primaryButtonText: {
    color: '#FFFFFF',
  },
  secondaryButton: {
    minHeight: 46,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: Spacing.four,
    justifyContent: 'center',
  },
  card: {
    borderWidth: 1,
    borderRadius: 8,
    padding: Spacing.four,
    gap: Spacing.three,
  },
  takeawayRow: {
    flexDirection: 'row',
    gap: Spacing.two,
    alignItems: 'flex-start',
  },
  takeawayDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginTop: 7,
  },
  takeawayText: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 22,
    lineHeight: 30,
  },
  sourceCard: {
    borderWidth: 1,
    borderRadius: 8,
    padding: Spacing.four,
    gap: Spacing.two,
  },
  pressed: {
    opacity: 0.72,
  },
});
