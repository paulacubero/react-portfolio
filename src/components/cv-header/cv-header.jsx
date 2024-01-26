import { Logo } from '../logo/logo';
import style from './style.module.css';

export function CVHeader() {
	return (
		<>
			<div className={style.presentationWrapper}>
				<div className={style.logoWrapper}>
					<Logo />
				</div>
				<div className={style.mainInfoWrapper}>
					<div className={style.title}>
						<h1>Paula Cubero</h1>
					</div>
					<div>
						<h3>Técnico superior de desarrollo de aplicaciones web.</h3>
					</div>
					<div className={style.buttonWrapper}>
						<button className={style.cvButton}>CV</button>
						<button className={style.cvButtonLuz}></button>
					</div>
				</div>
			</div>
		</>
	);
}
