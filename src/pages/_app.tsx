import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Layout from "@/components/Layout";
import GlobalStyle from "@/styles/globalStyle";

import { Provider } from "react-redux";
import { persistor, store } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";

import Dracula from "../styles/dracula";
import Bearded from "@/styles/bearded";

export default function App({ Component, pageProps }: AppProps) {
  const [localTheme, setLocalTheme] = useState<string | null>("");

  //first time render
  useEffect(() => {
    const theme = window.localStorage.getItem("theme");
    setLocalTheme(theme);
  }, []);

  //watch localStorage
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
        <PersistGate loading={null} persistor={persistor}>
          <GlobalStyle />
          <ThemeProvider theme={localTheme == "dracula" ? Dracula : Bearded}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  );
}
