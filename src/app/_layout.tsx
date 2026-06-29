import { DarkTheme, DefaultTheme, Tabs, ThemeProvider } from 'expo-router';
import { SymbolView } from 'expo-symbols';
import { StatusBar } from 'expo-status-bar';
import { type ComponentProps } from 'react';
import { useColorScheme } from 'react-native';

import { Colors } from '@/constants/theme';

type SymbolName = ComponentProps<typeof SymbolView>['name'];

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const resolvedScheme = colorScheme === 'dark' ? 'dark' : 'light';
  const colors = Colors[resolvedScheme];

  return (
    <ThemeProvider value={resolvedScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <StatusBar style={resolvedScheme === 'dark' ? 'light' : 'dark'} />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.tint,
          tabBarInactiveTintColor: colors.textSecondary,
          tabBarStyle: {
            backgroundColor: colors.card,
            borderTopColor: colors.border,
          },
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Study',
            tabBarIcon: ({ color }) => (
              <TabSymbol
                color={String(color)}
                name={{ ios: 'sparkles', android: 'auto_awesome', web: 'auto_awesome' }}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: 'Explore',
            tabBarIcon: ({ color }) => (
              <TabSymbol
                color={String(color)}
                name={{ ios: 'map', android: 'explore', web: 'explore' }}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="saved"
          options={{
            title: 'Saved',
            tabBarIcon: ({ color }) => (
              <TabSymbol
                color={String(color)}
                name={{ ios: 'bookmark', android: 'bookmark', web: 'bookmark' }}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="about"
          options={{
            title: 'Atlas',
            tabBarIcon: ({ color }) => (
              <TabSymbol
                color={String(color)}
                name={{ ios: 'info.circle', android: 'info', web: 'info' }}
              />
            ),
          }}
        />
        <Tabs.Screen name="topic/[id]" options={{ href: null }} />
        <Tabs.Screen name="article/[id]" options={{ href: null }} />
      </Tabs>
    </ThemeProvider>
  );
}

function TabSymbol({ color, name }: { color: string; name: SymbolName }) {
  return <SymbolView name={name} size={22} tintColor={color} />;
}
