import {createTheming} from '@callstack/react-theme-provider';
import { themes } from './defaultTheme';

export const { ThemeProvider, withTheme, useTheme } = createTheming(themes.default);
