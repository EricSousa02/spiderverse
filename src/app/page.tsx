import styles from "./page.module.scss";

import HeroesList from "@/components/HeroesList";
import { IHeroData } from "@/interfaces/heroes";

async function getHeroesData(): Promise<{ data: IHeroData[] }> {
  const res = await fetch(`${process.env.DOMAIN_ORIGIN}/api/heroes`);

  if (!res.ok) {
    throw new Error("Erro ao buscar heróis");
  }

  // Adicione logs para debug
  const rawResponse = await res.text();
  console.log('Raw Response:', rawResponse);

  return res.json();
}


export default async function Home() {
  const res = await getHeroesData();

  return (
    <main className={styles.main}>
      <HeroesList heroes={res.data} />
    </main>
  );
}
