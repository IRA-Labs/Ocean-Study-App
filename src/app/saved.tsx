import { Link } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { getSavedArticles, getTopicById } from '@/data/oceanKnowledge.utils';
import { useSavedArticles } from '@/hooks/use-saved-articles';
import { useTheme } from '@/hooks/use-theme';

export default function SavedScreen() {
  const theme = useTheme();
  const { isReady, savedArticleIds, removeArticle } = useSavedArticles();
  const savedArticles = getSavedArticles(savedArticleIds);

  return (
    <ScrollView
      style={[styles.scrollView, { backgroundColor: theme.background }]}
      contentContainerStyle={styles.scrollContent}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.container}>
          <View style={styles.header}>
            <ThemedText type="title">Saved</ThemedText>
            <ThemedText themeColor="textSecondary">
              Keep useful reads close while exploring the knowledge base.
            </ThemedText>
          </View>

          {!isReady && (
            <ThemedView type="card" style={[styles.card, { borderColor: theme.border }]}>
              <ThemedText type="smallBold">Loading saved articles...</ThemedText>
            </ThemedView>
          )}

          {isReady && savedArticles.length === 0 && (
            <ThemedView type="card" style={[styles.emptyCard, { borderColor: theme.border }]}>
              <ThemedText type="subtitle">No saved articles yet</ThemedText>
              <ThemedText themeColor="textSecondary">
                Save articles from any reader to build a personal ocean study list.
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
          )}

          <View style={styles.articleStack}>
            {savedArticles.map((article) => {
              const topic = getTopicById(article.topicId);

              return (
                <ThemedView
                  key={article.id}
                  type="card"
                  style={[styles.card, { borderColor: theme.border }]}>
                  <View style={styles.articleHeader}>
                    <View style={styles.articleTitleBlock}>
                      <ThemedText type="smallBold" themeColor="tint">
                        {topic?.title ?? 'Ocean Study'}
                      </ThemedText>
                      <ThemedText type="subtitle" style={styles.articleTitle}>
                        {article.title}
                      </ThemedText>
                    </View>
                    <ThemedText type="small" themeColor="textSecondary">
                      {article.readingTime}
                    </ThemedText>
                  </View>
                  <ThemedText themeColor="textSecondary">{article.subtitle}</ThemedText>
                  <View style={styles.actionRow}>
                    <Link href={{ pathname: '/article/[id]', params: { id: article.id } }} asChild>
                      <Pressable
                        accessibilityRole="button"
                        style={({ pressed }) => [
                          styles.primaryButton,
                          { backgroundColor: theme.tint },
                          pressed && styles.pressed,
                        ]}>
                        <ThemedText type="smallBold" style={styles.primaryButtonText}>
                          Read
                        </ThemedText>
                      </Pressable>
                    </Link>
                    <Pressable
                      accessibilityRole="button"
                      onPress={() => {
                        void removeArticle(article.id);
                      }}
                      style={({ pressed }) => [
                        styles.secondaryButton,
                        { borderColor: theme.border },
                        pressed && styles.pressed,
                      ]}>
                      <ThemedText type="smallBold" themeColor="danger">
                        Remove
                      </ThemedText>
                    </Pressable>
                  </View>
                </ThemedView>
              );
            })}
          </View>
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
  header: {
    gap: Spacing.two,
  },
  articleStack: {
    gap: Spacing.three,
  },
  card: {
    borderWidth: 1,
    borderRadius: 8,
    padding: Spacing.four,
    gap: Spacing.three,
  },
  emptyCard: {
    borderWidth: 1,
    borderRadius: 8,
    padding: Spacing.four,
    gap: Spacing.three,
  },
  articleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: Spacing.three,
  },
  articleTitleBlock: {
    flex: 1,
    gap: Spacing.one,
  },
  articleTitle: {
    fontSize: 22,
    lineHeight: 30,
  },
  actionRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
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
  secondaryButton: {
    minHeight: 44,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: Spacing.three,
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.72,
  },
});
