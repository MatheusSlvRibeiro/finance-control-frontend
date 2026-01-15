import React, { useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./EmblaCarousel.module.scss";

type Slide = { path: string; alt?: string };

type PropType = {
	slides: Slide[];
	options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
	const { slides, options } = props;
	const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
	const [dimensions, setDimensions] = useState<[number, number]>([700, 400]);

	useEffect(() => {
		function slideSize(): [number, number] {
			let maxWidth = window.innerWidth;
			let maxHeight = window.innerHeight;

			if (maxWidth <= 425) {
				maxWidth = 320;
				maxHeight = 160;
			} else if (maxWidth <= 768) {
				maxWidth = 600;
				maxHeight = 300;
			} else {
				maxWidth = 900;
				maxHeight = 500;
			}
			return [maxWidth, maxHeight];
		}

		function handleResize() {
			setDimensions(slideSize());
		}

		window.addEventListener("resize", handleResize);

		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const [maxWidth, maxHeight] = dimensions;

	return (
		<section className={styles.embla}>
			<div className={styles.embla__viewport} ref={emblaRef}>
				<div className={styles.embla__container}>
					{slides.map((slide, index) => (
						<div className={styles.embla__slide} key={index}>
							<img
								src={slide.path}
								alt={slide.alt || "slide"}
								width={maxWidth}
								height={maxHeight}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default EmblaCarousel;
