import style from './style.module.css';
import { IconoHtml } from '../logo/logo.jsx';
import { IconoCss } from '../logo/logo.jsx';
import { IconoJavascript } from '../logo/logo.jsx';
import { IconoReact } from '../logo/logo.jsx';
import { Icononode } from '../logo/logo.jsx';

export function Projects() {
	return (
		<div className={style.formationWrapper}>
			<div className={style.mainFormationWrapper}>
				<div className={style.project}>
					<div className={style.imgProjectWrapper}>
						<a href=''>
							<img
								className={style.imgProject}
								src='src/assets/img/duboMartial.webp'
								alt='img de prueba'
							/>
						</a>
					</div>
					<div className={style.infoProject}>
						<h3 className={style.textProjects}>Dubo Martial Arts</h3>
						<h4 className={style.textProjects}>
							Web multipagina, con conexión a Mongo Atlas y gestión de sesiones
						</h4>
						<div className={style.iconosProjects}>
							<IconoHtml />
							<IconoCss />
							<IconoJavascript />
							<Icononode />
						</div>
					</div>
				</div>

				<div className={style.project}>
					<div className={style.imgProjectWrapper}>
						<img
							className={style.imgProject}
							src='src/assets/img/duboMartial.webp'
							alt='img de prueba'
						/>
					</div>
					<div className={style.infoProject}>
						<h3 className={style.textProjects}>Proyecto 2</h3>
						<h4 className={style.textProjects}>descripción del proyecto 2</h4>
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
