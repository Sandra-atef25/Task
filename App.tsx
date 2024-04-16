import AppRoute from "./src/navigationcontainer/index";
import { themes } from "./src/theme/theming/defaultTheme";
import { ThemeProvider, withTheme } from "./src/theme/theming/themeProvider";

const App = () => {
  return (
    <ThemeProvider theme={themes.default}>
      <AppRoute />
    </ThemeProvider>
  );
};
export default App;
