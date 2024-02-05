import { Logo } from '../logo/logo';
import style from './style.module.css';

export function CVHeader() {
	const cambiarTema = () => {
		const htmlElement = document.documentElement;
		// Obtén el valor actual del atributo data-theme
		const currentTheme = htmlElement.getAttribute('data-theme');

		// Cambia el tema dependiendo del tema actual
		const newTheme = currentTheme === 'dracula' ? 'cupcake' : 'dracula';

		// Establece el nuevo tema
		htmlElement.setAttribute('data-theme', newTheme);

		// Obtén todos los elementos svg
		const svgElements = document.querySelectorAll('svg');

		// Cambia el atributo fill de los elementos svg
		svgElements.forEach((svg) => {
			svg.setAttribute('fill', newTheme === 'dracula' ? '#000' : '#FFF');
		});
	};

	return (
		<>
			<div className={style.presentationWrapper}>
				<div className={style.topSection}>
					<div className={style.buttonWrapper}>
						<button className={style.cvButton}>CV</button>
						<button className={style.buttonLuz} onClick={cambiarTema}></button>
					</div>
				</div>

				<div className={style.logoWrapper}>
					<div className={style.divLogo}>
						<Logo />
					</div>
				</div>
				<div className={style.mainInfoWrapper}>
					<div className={style.title}>
						<h1 className={style.titleMarginTop}>Paula Cubero</h1>
					</div>
					<h2 className={style.emailColor}>paulacubero.e@gmail.com</h2>
					<div>
						<h3>Programadora Junior con muchas ganas de seguir aprendiedo.</h3>
					</div>
				</div>
			</div>
		</>
	);
}
