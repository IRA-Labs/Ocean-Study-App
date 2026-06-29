import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { glossaryEntries } from '@/data/oceanKnowledge';
import { filterGlossaryEntries, getGlossaryLetters } from '@/data/oceanKnowledge.utils';
import { useTheme } from '@/hooks/use-theme';

const glossaryLetters = getGlossaryLetters(glossaryEntries);

export default function GlossaryScreen() {
  const theme = useTheme();
  const safeAreaInsets = useSafeAreaInsets();
  const [query, setQuery] = useState('');
  const [selectedLetter, setSelectedLetter] = useState('All');

  const filteredEntries = useMemo(
    () => filterGlossaryEntries(glossaryEntries, query, selectedLetter),
    [query, selectedLetter],
  );

  return (
    <ScrollView
      style={[styles.scrollView, { backgroundColor: theme.background }]}
      contentContainerStyle={[
        styles.scrollContent,
        { paddingTop: safeAreaInsets.top + Spacing.three },
      ]}>
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
              Ocean Glossary
            </ThemedText>
            <ThemedText type="title" style={styles.heroTitle}>
              Learn the language of the sea
            </ThemedText>
            <ThemedText style={styles.heroCopy}>
              Search essential ocean science terms, read simple definitions, and connect each
              concept to a real learning example.
            </ThemedText>
          </View>
        </ThemedView>

        <TextInput
          accessibilityLabel="Search glossary terms"
          value={query}
          onChangeText={setQuery}
          placeholder="Search terms, definitions, or examples..."
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
          contentContainerStyle={styles.letterRow}>
          {glossaryLetters.map((letter) => {
            const isSelected = selectedLetter === letter;

            return (
              <Pressable
                key={letter}
                accessibilityRole="button"
                accessibilityState={{ selected: isSelected }}
                onPress={() => setSelectedLetter(letter)}
                style={({ pressed }) => [
                  styles.letterChip,
                  {
                    backgroundColor: isSelected ? theme.tint : theme.card,
                    borderColor: isSelected ? theme.tint : theme.border,
                  },
                  pressed && styles.pressed,
                ]}>
                <ThemedText
                  type="smallBold"
                  style={[styles.letterChipText, isSelected && styles.selectedChipText]}>
                  {letter}
                </ThemedText>
              </Pressable>
            );
          })}
        </ScrollView>

        <View style={styles.resultHeader}>
          <ThemedText type="subtitle">Terms</ThemedText>
          <ThemedText type="small" themeColor="textSecondary">
            {filteredEntries.length} of {glossaryEntries.length}
          </ThemedText>
        </View>

        {filteredEntries.length === 0 ? (
          <ThemedView type="cardMuted" style={[styles.emptyCard, { borderColor: theme.border }]}>
            <ThemedText type="smallBold">No glossary terms found</ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              Try another word, clear the search, or choose All letters.
            </ThemedText>
          </ThemedView>
        ) : (
          <View style={styles.stack}>
            {filteredEntries.map((entry) => (
              <ThemedView
                key={entry.term}
                type="card"
                style={[styles.termCard, { borderColor: theme.border }]}>
                <View style={styles.termHeader}>
                  <ThemedText type="subtitle" style={styles.termTitle}>
                    {entry.term}
                  </ThemedText>
                  <ThemedView type="backgroundSelected" style={styles.initialBadge}>
                    <ThemedText type="smallBold">{entry.term.charAt(0).toUpperCase()}</ThemedText>
                  </ThemedView>
                </View>
                <ThemedText themeColor="textSecondary">{entry.definition}</ThemedText>
                <ThemedView type="cardMuted" style={styles.exampleBox}>
                  <ThemedText type="smallBold">Example</ThemedText>
                  <ThemedText type="small">{entry.example}</ThemedText>
                </ThemedView>
              </ThemedView>
            ))}
          </View>
        )}

        <ThemedView type="cardMuted" style={[styles.footerCard, { borderColor: theme.border }]}>
          <ThemedText type="smallBold">Keep learning in context</ThemedText>
          <ThemedText type="small" themeColor="textSecondary">
            Use these terms while reading topic guides and articles so the vocabulary stays tied
            to real ocean systems.
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
  container: {
    width: '100%',
    maxWidth: MaxContentWidth,
    gap: Spacing.four,
    paddingHorizontal: Spacing.three,
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
    backgroundColor: 'rgba(3, 28, 38, 0.58)',
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
  searchInput: {
    minHeight: 52,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: Spacing.three,
    fontSize: 16,
  },
  letterRow: {
    gap: Spacing.two,
    paddingRight: Spacing.three,
  },
  letterChip: {
    minHeight: 44,
    minWidth: 44,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: Spacing.three,
    alignItems: 'center',
    justifyContent: 'center',
  },
  letterChipText: {
    textAlign: 'center',
  },
  selectedChipText: {
    color: '#FFFFFF',
  },
  resultHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    gap: Spacing.three,
  },
  stack: {
    gap: Spacing.three,
  },
  termCard: {
    borderWidth: 1,
    borderRadius: 8,
    padding: Spacing.four,
    gap: Spacing.three,
  },
  termHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: Spacing.three,
    alignItems: 'flex-start',
  },
  termTitle: {
    flex: 1,
  },
  initialBadge: {
    minWidth: 40,
    minHeight: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  exampleBox: {
    borderRadius: 8,
    padding: Spacing.three,
    gap: Spacing.one,
  },
  emptyCard: {
    borderWidth: 1,
    borderRadius: 8,
    padding: Spacing.four,
    gap: Spacing.two,
  },
  footerCard: {
    borderWidth: 1,
    borderRadius: 8,
    padding: Spacing.four,
    gap: Spacing.three,
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
  pressed: {
    opacity: 0.72,
  },
});
