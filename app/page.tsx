'use client'
import { SectionContainer } from "./components/sectioncontainer";
import { store } from './features/store';
import { Provider } from 'react-redux'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "./globals.css";

export default function Home() {
  return (
    <main className="">
      <Provider store={store}>
        <SectionContainer/>
      </Provider>
    </main>
  );
}
