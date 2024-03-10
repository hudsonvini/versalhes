import styles from "./page.module.css";

// Componets
import InitialBanner from "./components/InitialBannerComponent/InitialBanner";

export default function Home() {
  return (
    <main className={styles.main}>
        <InitialBanner />
    </main>
  );
}
