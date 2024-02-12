'use client'
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

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <main className="" data-theme={theme}> 
      <Provider store={store}>
        <MyParticles/>
        <SectionContainer theme={switchTheme} />
      </Provider>
    </main>
  );
}
