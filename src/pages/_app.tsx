import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Layout from "@/components/Layout";
import GlobalStyle from "@/styles/globalStyle";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Dracula from "../styles/dracula";
import Bearded from "@/styles/bearded";

export default function App({ Component, pageProps }: AppProps) {
  const [localTheme, setLocalTheme] = useState<string | null>("");

  useEffect(() => {
    const handleStorage = () => {
      const theme = window.localStorage.getItem("theme");
      setLocalTheme(theme);
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <ThemeProvider theme={localTheme == "bearded" ? Bearded : Dracula}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Provider>
    </>
  );
}
