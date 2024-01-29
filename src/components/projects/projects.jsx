import './style.css';
import { IconoHtml } from '../logo/logo.jsx';
import { IconoCss } from '../logo/logo.jsx';
import { IconoJavascript } from '../logo/logo.jsx';
import { IconoReact } from '../logo/logo.jsx';
import { Icononode } from '../logo/logo.jsx';

export function Projects() {
	return (
		<div className={'formationWrapper'}>
			<div className={'mainFormationWrapper'}>
				<div className={'project'}>
					<div className={'imgProjectWrapper'}>
						<a href=''>
							<img
								className={'imgProject'}
								src='/img/duboMartial.webp'
								alt='img de prueba'
							/>
						</a>
					</div>
					<div className={'infoProject'}>
						<h3 className={'textProjects'}>Dubo Martial Arts</h3>
						<h4 className={'textProjects'}>
							Web multipagina, con conexión a Mongo Atlas y gestión de sesiones
						</h4>
						<div className={'iconosProjects'}>
							<IconoHtml />
							<IconoCss />
							<IconoJavascript />
							<Icononode />
						</div>
					</div>
				</div>

				<div className={'project'}>
					<div className={'imgProjectWrapper'}>
						<img
							className={'imgProject'}
							src='/img/duboMartial.webp'
							alt='img de prueba'
						/>
					</div>
					<div className={'infoProject'}>
						<h3 className={'textProjects'}>Potfolio personal</h3>
						<h4 className={'textProjects'}>
							Portfolio de presentación hecho con react.
						</h4>
						<div className={'iconosProjects'}>
							<IconoJavascript />
							<IconoReact />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
