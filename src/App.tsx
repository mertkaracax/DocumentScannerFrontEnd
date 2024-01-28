import styles from './App.module.css';
import { Homepage } from './pages/Homepage';
import PageContextProvider from './store/page-context';

export function App() {
  return (
    <PageContextProvider>
      <main className={styles.main}>
        <Homepage />
      </main>
    </PageContextProvider>
  );
}
