import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'ocean-study:saved-articles:v1';

function uniqueIds(ids: string[]) {
  return Array.from(new Set(ids));
}

export function useSavedArticles() {
  const [savedArticleIds, setSavedArticleIds] = useState<string[]>([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadSavedArticles() {
      try {
        const rawValue = await AsyncStorage.getItem(STORAGE_KEY);
        const parsedValue = rawValue ? JSON.parse(rawValue) : [];

        if (isMounted && Array.isArray(parsedValue)) {
          setSavedArticleIds(uniqueIds(parsedValue.filter((value) => typeof value === 'string')));
        }
      } finally {
        if (isMounted) {
          setIsReady(true);
        }
      }
    }

    void loadSavedArticles();

    return () => {
      isMounted = false;
    };
  }, []);

  const saveIds = useCallback(async (nextIds: string[]) => {
    const cleanIds = uniqueIds(nextIds);
    setSavedArticleIds(cleanIds);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(cleanIds));
  }, []);

  const addArticle = useCallback(
    async (articleId: string) => {
      await saveIds([...savedArticleIds, articleId]);
    },
    [saveIds, savedArticleIds],
  );

  const removeArticle = useCallback(
    async (articleId: string) => {
      await saveIds(savedArticleIds.filter((id) => id !== articleId));
    },
    [saveIds, savedArticleIds],
  );

  const toggleArticle = useCallback(
    async (articleId: string) => {
      if (savedArticleIds.includes(articleId)) {
        await removeArticle(articleId);
        return;
      }

      await addArticle(articleId);
    },
    [addArticle, removeArticle, savedArticleIds],
  );

  return useMemo(
    () => ({
      savedArticleIds,
      savedCount: savedArticleIds.length,
      isReady,
      isSaved: (articleId: string) => savedArticleIds.includes(articleId),
      addArticle,
      removeArticle,
      toggleArticle,
    }),
    [addArticle, isReady, removeArticle, savedArticleIds, toggleArticle],
  );
}
