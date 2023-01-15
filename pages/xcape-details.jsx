import React, { useEffect, useState, useRef } from "react";
import xCapePhotos from "../xCapeImages";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../styles/xCapeDetails.module.scss";
import Head from "next/head";
// Components
import EnquireButton from "../components/EnquireButton/EnquireButton";
// Images
import heroImg from "../public/assets/x-cape-details/1MC0637-2a483352.jpeg";
import xCapeLogo from "../public/assets/x_cape_logo.png";
import featureImg1 from "../public/assets/x-cape-details/dash.jpeg";
import featureImg2 from "../public/assets/x-cape-details/storage.jpeg";
import featureImg3 from "../public/assets/x-cape-details/brake.jpeg";
import featureImg4 from "../public/assets/x-cape-details/headlight.jpeg";
import variantImg1 from "../public/assets/x-cape-index/X-Cape_red.jpeg";
import variantImg2 from "../public/assets/x-cape-index/X-Cape_gray.jpeg";
import variantImg3 from "../public/assets/x-cape-index/X-Cape_white.jpeg";
import variantImgGold from "../public/assets/X-cape-gold-index/X-Cape_gold.jpeg";

const XCapeDetails = () => {
	const [width, setWidth] = useState(0);
	const carousel = useRef();

	useEffect(() => {
		setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
	}, []);

	return (
		<>
			<Head>
				<title>Moto Morini X-Cape</title>
				<meta name="description" content="Moto Morini X-Cape Details" />
			</Head>

			<div>
				<div className={styles.details__hero}>
					<Image src={heroImg} alt="" width={1620} height={1080} fill="true" />
					<div className={styles.heading}>
						All-new Moto Morini X-Cape 650 Adventure Tourer
					</div>
				</div>
				<div className={styles.details__title}>
					<Image src={xCapeLogo} alt="" />

					<h2>KEY FEATURES</h2>
				</div>
				<div className={styles.features__container}>
					<div className={styles.features__row}>
						<div className={styles.features__img}>
							<Image src={featureImg1} alt="" layout="responsive" />
						</div>
						<div className={styles.features__text}>
							<li>Large 7&quot; TFT dash screen</li>
							<li>Music & Phone Connectivity</li>
							<li>Double USB Charger</li>
						</div>
					</div>

					<div className={styles.features__row}>
						<div className={styles.features__text}>
							<li>Protective Bars</li>
							<li>Dry weight: 213 kg</li>
							<li>Seat height: 820mm/845mm</li>
						</div>
						<div className={styles.features__img}>
							<Image src={featureImg2} alt="" layout="responsive" />
						</div>
					</div>

					<div className={styles.features__row}>
						<div className={styles.features__img}>
							<Image src={featureImg3} alt="" layout="responsive" />
						</div>
						<div className={styles.features__text}>
							<li>19&quot; front wheel & Pirelli Tyres</li>
							<li>Switchable ABS</li>
							<li>Brembo Brakes</li>
							<li>50 mm diameter adjustable Marzocchi fork </li>
						</div>
					</div>

					<div className={styles.features__row}>
						<div className={styles.features__text}>
							<li>LED Lights</li>
							<li>Maximum power: 44kW / 60hp</li>
							<li>Displacement: 649 cc</li>
						</div>
						<div className={styles.features__img}>
							<Image src={featureImg4} alt="" layout="responsive" />
						</div>
					</div>
				</div>

				<div className={styles.variant__container}>
					<div className={styles.variant__item}>
						<h3>Red Passion</h3>
						<Image src={variantImg1} alt="" />
					</div>
					<div className={styles.variant__item}>
						<h3>Smoky Anthracite</h3>
						<Image src={variantImg2} alt="" />
					</div>
					<div className={styles.variant__item}>
						<h3>Carrara White</h3>
						<Image src={variantImg3} alt="" />
					</div>
				</div>

				<div className={styles.variant__gold}>
					<h3>Gold wheels edition</h3>
					<Image
						src={variantImgGold}
						alt=""
						width={1620}
						height={1080}
						fill="true"
					/>
				</div>

				<motion.div
					ref={carousel}
					className={styles.carousel}
					whileTap={{ cursor: "grabbing" }}
				>
					<motion.div
						className={styles.innerCarousel}
						drag="x"
						dragConstraints={{ right: 0, left: -width }}
					>
						{xCapePhotos.map((xCapePhoto, index) => {
							return (
								<motion.div className={styles.carousel__item} key={index}>
									<Image src={xCapePhoto} alt="x-cape gallery" />
								</motion.div>
							);
						})}
					</motion.div>
				</motion.div>

				<EnquireButton />
			</div>
		</>
	);
};

export default XCapeDetails;
