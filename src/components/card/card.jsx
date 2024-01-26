import style from './style.module.css';
import { icons } from '../../consts';
export function Card({ title, children }) {
	return (
		<div className={style.cardWrapper}>
			<div className={style.cardTitle}>
				<img className={style.titleIcon} src={icons[title]} />
				<h3>{title}</h3>
			</div>
			{children}
		</div>
	);
}
