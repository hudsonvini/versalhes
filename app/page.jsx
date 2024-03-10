import styles from "./page.module.css";
import { Montserrat_Alternates } from "next/font/google"

export const mont_Alt = Montserrat_Alternates({ 
  subsets: ['latin'],
  weight: ['400' , '500', '600', '700'] , 
});

// Componets
import InitialBanner from "./components/InitialBannerComponent/InitialBanner";

export default function Home() {
  return (
    <main className={mont_Alt.className}>
        <InitialBanner />
    </main>
  );
}
