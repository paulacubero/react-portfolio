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
						<div className={style.buttonWrapper}>
							<button className={style.cvButtontop}>ES</button>
							<button className={style.cvButtonLuz}></button>
						</div>
					</div>
					<div>
						<h3>Técnico superior de desarrollo de aplicaciones web.</h3>
					</div>
					<div className={style.buttonWrapper}>
						<button className={style.cvButtoBottom}>CV</button>
					</div>
				</div>
			</div>
		</>
	);
}
