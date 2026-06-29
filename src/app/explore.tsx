import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ExternalLink } from '@/components/external-link';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { categories, oceanTopics } from '@/data/oceanKnowledge';
import { filterTopics, getArticlesForTopic } from '@/data/oceanKnowledge.utils';
import { useTheme } from '@/hooks/use-theme';

export default function ExploreScreen() {
  const theme = useTheme();
  const safeAreaInsets = useSafeAreaInsets();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [expandedTopicId, setExpandedTopicId] = useState(oceanTopics[0]?.id);

  const filteredTopics = useMemo(
    () => filterTopics(oceanTopics, { category: selectedCategory, query }),
    [query, selectedCategory],
  );

  return (
    <ScrollView
      style={[styles.scrollView, { backgroundColor: theme.background }]}
      contentContainerStyle={[
        styles.scrollContent,
        { paddingTop: safeAreaInsets.top + Spacing.three },
      ]}>
      <ThemedView style={styles.container}>
        <ThemedView style={[styles.exploreHero, { borderColor: theme.border }]}>
          <Image
            source={require('@/assets/images/ocean-depths.png')}
            contentFit="cover"
            style={styles.exploreImage}
          />
          <View style={styles.exploreHeroCopy}>
            <ThemedText type="smallBold" themeColor="accent">
              Explore knowledge base
            </ThemedText>
            <ThemedText type="subtitle">Search topics, open guides, and trace sources.</ThemedText>
            <ThemedText themeColor="textSecondary">
              Browse source-linked ocean lessons built for self-paced study.
            </ThemedText>
          </View>
        </ThemedView>

        <TextInput
          accessibilityLabel="Search ocean topics"
          value={query}
          onChangeText={setQuery}
          placeholder="Search zones, reefs, climate, exploration..."
          placeholderTextColor={theme.textSecondary}
          style={[
            styles.searchInput,
            {
              backgroundColor: theme.card,
              borderColor: theme.border,
              color: theme.text,
            },
          ]}
        />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryRow}>
          {categories.map((category) => {
            const isSelected = selectedCategory === category;

            return (
              <Pressable
                key={category}
                accessibilityRole="button"
                onPress={() => setSelectedCategory(category)}
                style={({ pressed }) => [
                  styles.categoryChip,
                  {
                    backgroundColor: isSelected ? theme.tint : theme.card,
                    borderColor: theme.border,
                  },
                  pressed && styles.pressed,
                ]}>
                <ThemedText
                  type="smallBold"
                  style={isSelected && styles.selectedChipText}
                  themeColor={isSelected ? undefined : 'textSecondary'}>
                  {category}
                </ThemedText>
              </Pressable>
            );
          })}
        </ScrollView>

        <View style={styles.resultHeader}>
          <ThemedText type="smallBold">
            {filteredTopics.length} topic{filteredTopics.length === 1 ? '' : 's'}
          </ThemedText>
          <ThemedText type="small" themeColor="textSecondary">
            Tap a topic to preview
          </ThemedText>
        </View>

        <View style={styles.topicStack}>
          {filteredTopics.map((topic) => {
            const isExpanded = expandedTopicId === topic.id;
            const articleCount = getArticlesForTopic(topic.id).length;

            return (
              <ThemedView
                key={topic.id}
                type="card"
                style={[styles.topicCard, { borderColor: theme.border }]}>
                <Pressable
                  accessibilityRole="button"
                  onPress={() => setExpandedTopicId(isExpanded ? '' : topic.id)}
                  style={({ pressed }) => [styles.topicHeader, pressed && styles.pressed]}>
                  <View style={styles.topicTitleBlock}>
                    <ThemedText type="smallBold" themeColor="tint">
                      {topic.category}
                    </ThemedText>
                    <ThemedText type="subtitle" style={styles.topicTitle}>
                      {topic.title}
                    </ThemedText>
                  </View>
                  <View style={[styles.depthPill, { backgroundColor: theme.cardMuted }]}>
                    <ThemedText type="smallBold" themeColor="textSecondary">
                      {articleCount} reads
                    </ThemedText>
                  </View>
                </Pressable>

                <ThemedText themeColor="textSecondary">{topic.summary}</ThemedText>

                <View style={styles.tagRow}>
                  {topic.tags.map((tag) => (
                    <View
                      key={tag}
                      style={[
                        styles.tag,
                        { backgroundColor: theme.backgroundElement, borderColor: theme.border },
                      ]}>
                      <ThemedText type="small" themeColor="textSecondary">
                        {tag}
                      </ThemedText>
                    </View>
                  ))}
                </View>

                {isExpanded && (
                  <ThemedView
                    type="cardMuted"
                    style={[styles.expandedPanel, { borderColor: theme.border }]}>
                    <ThemedText type="smallBold">Why it matters</ThemedText>
                    <ThemedText type="small" themeColor="textSecondary">
                      {topic.highlight}
                    </ThemedText>
                    <View style={styles.metaRow}>
                      <ThemedText type="smallBold" themeColor="textSecondary">
                        Study range
                      </ThemedText>
                      <ThemedText type="small">{topic.depth}</ThemedText>
                    </View>
                    <View style={styles.actionRow}>
                      <Link href={{ pathname: '/topic/[id]', params: { id: topic.id } }} asChild>
                        <Pressable
                          accessibilityRole="button"
                          style={({ pressed }) => [
                            styles.primaryButton,
                            { backgroundColor: theme.tint },
                            pressed && styles.pressed,
                          ]}>
                          <ThemedText type="smallBold" style={styles.primaryButtonText}>
                            Open topic
                          </ThemedText>
                        </Pressable>
                      </Link>
                      <ExternalLink href={topic.sourceUrl}>
                        <ThemedText type="linkPrimary">Source</ThemedText>
                      </ExternalLink>
                    </View>
                  </ThemedView>
                )}
              </ThemedView>
            );
          })}
        </View>

        {filteredTopics.length === 0 && (
          <ThemedView type="card" style={[styles.emptyState, { borderColor: theme.border }]}>
            <ThemedText type="smallBold">No matching topics yet</ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              Try another search term or switch back to All.
            </ThemedText>
          </ThemedView>
        )}
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    alignItems: 'center',
    paddingHorizontal: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.five,
  },
  container: {
    width: '100%',
    maxWidth: MaxContentWidth,
    gap: Spacing.three,
  },
  exploreHero: {
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
  },
  exploreImage: {
    width: '100%',
    height: 240,
  },
  exploreHeroCopy: {
    padding: Spacing.four,
    gap: Spacing.two,
  },
  searchInput: {
    minHeight: 52,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: Spacing.three,
    fontSize: 16,
  },
  categoryRow: {
    gap: Spacing.two,
    paddingVertical: Spacing.one,
  },
  categoryChip: {
    minHeight: 42,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: Spacing.three,
    justifyContent: 'center',
  },
  selectedChipText: {
    color: '#FFFFFF',
  },
  pressed: {
    opacity: 0.72,
  },
  resultHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: Spacing.three,
  },
  topicStack: {
    gap: Spacing.three,
  },
  topicCard: {
    borderWidth: 1,
    borderRadius: 8,
    padding: Spacing.three,
    gap: Spacing.two,
  },
  topicHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: Spacing.three,
  },
  topicTitleBlock: {
    flex: 1,
    gap: Spacing.one,
  },
  topicTitle: {
    fontSize: 22,
    lineHeight: 30,
  },
  depthPill: {
    borderRadius: 8,
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  tag: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
  },
  expandedPanel: {
    borderWidth: 1,
    borderRadius: 8,
    padding: Spacing.three,
    gap: Spacing.two,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: Spacing.three,
  },
  actionRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: Spacing.three,
  },
  primaryButton: {
    minHeight: 42,
    borderRadius: 8,
    paddingHorizontal: Spacing.three,
    justifyContent: 'center',
  },
  primaryButtonText: {
    color: '#FFFFFF',
  },
  emptyState: {
    borderWidth: 1,
    borderRadius: 8,
    padding: Spacing.four,
    gap: Spacing.one,
  },
});
