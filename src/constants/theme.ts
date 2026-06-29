import '@/global.css';

import { Platform } from 'react-native';

export const Colors = {
  light: {
    text: '#082F3A',
    background: '#F4FBFA',
    backgroundElement: '#E1F1EF',
    backgroundSelected: '#C7E8E4',
    textSecondary: '#4E6B73',
    card: '#FFFFFF',
    cardMuted: '#ECF8F6',
    border: '#C4DCD9',
    tint: '#007A8A',
    accent: '#FFB45C',
    success: '#2D8F68',
    danger: '#C3504C',
  },
  dark: {
    text: '#EFFDFC',
    background: '#031C26',
    backgroundElement: '#083342',
    backgroundSelected: '#0D4656',
    textSecondary: '#A9C7CD',
    card: '#082A36',
    cardMuted: '#0B3845',
    border: '#1A5866',
    tint: '#4ED7D0',
    accent: '#FFBF73',
    success: '#67D39C',
    danger: '#FF8E89',
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: 'var(--font-display)',
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 860;
