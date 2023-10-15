import "@/styles/globals.css";
import createEmotionCache from "@/utils/services/createEmotionCache";
import theme from "@/utils/services/theme";
import { CacheProvider } from "@emotion/react";
import { CssBaseline, responsiveFontSizes, ThemeProvider } from "@mui/material";

const clientSideEmotionCache = createEmotionCache();
const responsiveFonts = responsiveFontSizes(theme);

export default function App(props: any) {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={responsiveFonts}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
