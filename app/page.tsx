'use client'
import { SectionContainer } from "./components/sectioncontainer";
import { store } from './features/store';
import { Provider } from 'react-redux'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "./styles/globals.css";
import "./styles/header.css";
import "./styles/footer.css";
import "./styles/sectioncontainer.css";
import "./styles/skills.css";
import "./styles/work.css";

export default function Home() {
  return (
    <main className="">
      <Provider store={store}>
        <SectionContainer/>
      </Provider>
    </main>
  );
}
