import styles from "./page.module.css";
import { Montserrat_Alternates } from "next/font/google"

export const mont_Alt = Montserrat_Alternates({ 
  subsets: ['latin'],
  weight: ['400' , '500', '600', '700'] , 
});

// Componets
import InitialBanner from "./components/InitialBannerComponent/InitialBanner";
import ContainerCards from "./components/ContainerCards/ContainerCards";
import MiddlebannerVideo from "./components/MiddleBannerVideo/MiddleBannerVideo";
import TestemonialArea from "./components/TestemonialArea/TestemonialArea";

export default function Home() {
  return (
    <main className={mont_Alt.className}>
        <InitialBanner />

        <ContainerCards />

        <MiddlebannerVideo />

        <TestemonialArea />
    </main>
  );
}
