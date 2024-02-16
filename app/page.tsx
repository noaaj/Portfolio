'use client';
import { useState } from 'react';
import { SectionContainer } from "./components/sectioncontainer";
import { MyParticles } from "./components/myparticles";
import { store } from './features/store';
import { Provider } from 'react-redux'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "./styles/globals.css";
import "./styles/header.css";
import "./styles/footer.css";
import "./styles/sectioncontainer.css";
import "./styles/skills.css";
import "./styles/work.css";
import useLocalStorage from 'use-local-storage'


export default function Home() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const [particleColor, setColor] = useState(theme === "light" ? "rgba(39,44,41,1)" : "#ACB9B2");
  const [modeButton, setChecked] = useState(theme ==="light" ? false : true);

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    setColor(theme === "light" ? "#ACB9B2" : "rgba(39,44,41,1)");
    setChecked(theme === "light" ? true : false);
  }

  const headerProps = {switchTheme, modeButton}

  return (
    <main className="" data-theme={theme}>
      <Provider store={store}>
        <MyParticles particleColor={particleColor} />
        <SectionContainer headerProps={headerProps} />
      </Provider>
    </main>
  );
}
