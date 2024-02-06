import style from './style.module.css';
import { icons } from '../../consts';
export function Card({ title, children }) {
	return (
		<div className={style.cardWrapper}>
			<div className={style.cardTitle}>
				<ion-icon name={icons[title]}></ion-icon>

				<h3>{title}</h3>
			</div>
			{children}
		</div>
	);
}
