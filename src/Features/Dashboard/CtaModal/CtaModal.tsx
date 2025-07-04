import { useTranslation } from 'react-i18next';
import ReactDOM from "react-dom";
import styles from "./CtaModal.module.scss";
import Cross from "@assets/CtaModal/Cross.svg?react";
import Cart from "@assets/CtaModal/Cart.svg?react";
import Shape from "@assets/CtaModal/Shape.svg?react";
import ChevronHollow from "@assets/CtaModal/ChevronHollow.svg?react";
import { useState } from "react";

const CtaModal = () => {
  	const { t } = useTranslation();
	const [isClosed, setIsClosed] = useState(false);

	return ReactDOM.createPortal(
		<div
			className={`${styles["CtaModal-container"]} ${
				isClosed && styles["CtaModal-container-closed"]
			}`}
		>
			<div className={styles["CtaModal-head"]}>
				<div className={styles["CtaModal-head-text"]}>
					<div className={styles["CtaModal-number"]}>16</div>
					<div className={styles["CtaModal-title"]}>{t('cta.new-insights')}</div>
				</div>
				<div
					className={`${styles["CtaModal-cross-container"]} ${
						isClosed && styles["CtaModal-cross-container-closed"]
					}`}
					onClick={() => setIsClosed(true)}
				>
					<Cross />
				</div>
			</div>
			<div className={styles["CtaModal-body"]}>
				<p className={styles["CtaModal-description"]}>
					{t('cta.description').split(' ')[0]}
					{t('cta.description').split(' ').slice(1).join(' ')}
				</p>
			</div>
			<button className={styles["CtaModal-button"]}>
				<p className={styles["CtaModal-button-text"]}>{t('cta.order-dna-test')}</p>
				<div className={styles["CtaModal-cart-container"]}>
					<Cart />
				</div>
			</button>

			<div
				className={`${styles["CtaModal-chevron"]} ${
					isClosed && styles["CtaModal-chevron-closed"]
				}`}
				onClick={() => setIsClosed(false)}
			>
				<ChevronHollow />
			</div>
			<Shape className={styles["CtaModal-shape"]} />
		</div>,
		document.body,
	);
};

export default CtaModal;
