import Link from "next/link";
import styles from "./page.module.scss";
import { Footer } from "@components/layout/footer/footer";
import { BenefitsCard } from "./_components/BenefitsCard/benefitsCard";
import { MoveRight } from "lucide-react";
import EmblaCarousel from "./_components/EmblaCarousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import Button from "@components/ui/button/button";
import { Header } from "./_components/Header/header";

export default function Home() {
	const OPTIONS: EmblaOptionsType = {};
	const SLIDES = [
		{
			path: "/images/print1.png",
		},
		{
			path: "/images/print2.png",
		},
		{
			path: "/images/print3.png",
		},
		{
			path: "/images/print4.png",
		},
	];

	return (
		<div className={styles.page}>
			<Header />

			<section className={styles.heroSection}>
				<h1 className={styles.title}>
					Organize suas finanças com
					<span> clareza e simplicidade</span>
				</h1>

				<p className={styles.paragraph}>
					Visualize receitas, despesas e evolução do seu patrimônio em
					um dashboard moderno e intuitivo. Tome decisões financeiras
					mais inteligentes.
				</p>

				<div className={styles.heroSectionButtons}>
					<Link href="/auth/register">
						<Button variant="register">
							Começar agora
							<MoveRight />
						</Button>
					</Link>

					<Link href="/auth/login">
						<Button variant="default">Já tenho conta</Button>
					</Link>
				</div>
			</section>

			<section className={styles.benefitsSection}>
				<div className={styles.benefitsContent}>
					<h2 className={styles.benefitsTitle}>
						Por que escolher o Finance Control?
					</h2>

					<p className={styles.benefitsSubtitle}>
						Aqui você tem ferramentas poderosas para ter controle
						total de suas finanças
					</p>
				</div>
				<BenefitsCard />
			</section>

			<section className={styles.carouselSection}>
				<div className={styles.carouselContent}>
					<h2 className={styles.carouselTitle}>
						Dashboard poderoso e intuitivo
					</h2>

					<p className={styles.carouselSubtitle}>
						Visualize todas as informações importantes em um único
						lugar
					</p>
				</div>
				<EmblaCarousel slides={SLIDES} options={OPTIONS} />
			</section>

			<section className={styles.finalCtaSection}>
				<div className={styles.finalCtaContent}>
					<h2 className={styles.finalCtaTitle}>
						Comece a organizar suas finaças hoje
					</h2>
					<p className={styles.finalCtaSubtitle}>
						Crie sua conta gratuita e tenha controle total do seu
						dinheiro
					</p>
					<Link href="/auth/register">
						<Button variant="register">
							Criar conta gratuita
							<MoveRight />
						</Button>
					</Link>
				</div>
			</section>

			<Footer />
		</div>
	);
}
