import style from './style.module.css';
import { IconoHtml } from '../logo/logo.jsx';
import { IconoCss } from '../logo/logo.jsx';
import { IconoJavascript } from '../logo/logo.jsx';
import { IconoReact } from '../logo/logo.jsx';
//import { Dubo } from '../../assets/img/DuboMartialArts.webp';

export function Projects() {
	return (
		<div className={style.formationWrapper}>
			<div className={style.mainFormationWrapper}>
				<div className={style.project}>
					<div className={style.imgProject}>
						<img
							src='../../assets/img/DuboMartialArts.webp'
							alt='img de prueba'
						/>
					</div>
					<div className={style.infoProject}>
						<p className={style.textProjects}>Dubo Martial Arts</p>
						<div className={style.iconosProjects}>
							<IconoHtml />
							<IconoCss />
						</div>
					</div>
				</div>

				<div className={style.project}>
					<div className={style.imgProject}>
						<img
							src='../../assets/img/DuboMartialArts.webp'
							alt='img de prueba'
						/>
					</div>
					<div className={style.infoProject}>
						<p className={style.textProjects}>Texto de prueba</p>
						<div className={style.iconosProjects}>
							<IconoJavascript />
							<IconoReact />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
