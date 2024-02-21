import { Logo } from '../logo/logo';
import style from './style.module.css';

export function CVHeader() {
	const cambiarTema = () => {
		// Obtén el valor actual del atributo data-theme
		const htmlElement = document.documentElement;
		let currentTheme = htmlElement.getAttribute('data-theme');
		// Cambia el tema dependiendo del tema actual
		const newTheme = currentTheme === 'dracula' ? 'cupcake' : 'dracula';
		const iconos = document.querySelectorAll('.ionicon');
		// Verifica el tema actual y aplica la clase correspondiente a los iconos
		if (currentTheme === 'dracula') {
			iconos.forEach((icono) => {
				icono.classList.remove('ionicon-light');
			});
		} else {
			iconos.forEach((icono) => {
				icono.classList.add('ionicon-light');
			});
		}

		const logos = document.querySelectorAll('.logo');
		// Verifica el tema actual y aplica la clase correspondiente a los iconos
		if (currentTheme === 'dracula') {
			logos.forEach((icono) => {
				icono.classList.add('logo-white');
				icono.classList.remove('logo-dark');
			});
		} else {
			logos.forEach((icono) => {
				icono.classList.remove('logo-white');
				icono.classList.add('logo-dark');
			});
		}

		// Establece el nuevo tema
		htmlElement.setAttribute('data-theme', newTheme);
	};

	return (
		<>
			<div className={style.presentationWrapper}>
				<div className={style.topSection}>
					<div className={style.buttonWrapper}>
						<label className='swap swap-rotate'>
							{/* this hidden checkbox controls the state */}
							<input type='checkbox' onClick={cambiarTema} />

							{/* sun icon */}
							<svg
								className='swap-on fill-current w-10 h-10'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'>
								<path d='M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z' />
							</svg>

							{/* moon icon */}
							<svg
								className='swap-off fill-current w-10 h-10'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'>
								<path d='M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z' />
							</svg>
						</label>
					</div>
				</div>

				<div className={style.logoWrapper}>
					<div className={style.divLogo}>
						<Logo />
					</div>
					<div className={style.mainInfoWrapper}>
						<div className={style.title}>
							<h1 className='titleMarginTop text-4xl lg:text-6xl font-bold '>
								Paula Cubero
							</h1>
						</div>
						<div className={'flex flex-col md:flex-row items-center gap-4 '}>
							<h2 className='text-secondary hover:text-primary'>
								paulacubero.e@gmail.com
							</h2>
							<div className={'flex items-center gap-4'}>
								<a
									className={
										'p-2 flex bg-secondary btn btn-circle hover:bg-primary'
									}
									href='./archivo/cv_PaulaCubero.pdf'
									target='_blank'>
									CV
								</a>
								<nav class='flex gap-4'>
									{' '}
									<a
										href='https://github.com/paulacubero'
										target='_blank'
										rel='noopener noreferrer'
										className='btn btn-circle bg-secondary hover:bg-primary'
										title='Go to Github'>
										<ion-icon name='logo-github' size='large'></ion-icon>
									</a>
									<a
										href='https://www.linkedin.com/in/paula-cubero-encinas/'
										target='_blank'
										rel='noopener noreferrer'
										className='btn btn-circle bg-secondary hover:bg-primary'
										title='Visit LinkedIn'>
										<ion-icon name='logo-linkedin' size='large'></ion-icon>
									</a>
								</nav>
							</div>
						</div>
						<div>
							<h3 className='text-center'>
								<span className='bg-primary  bg-clip-text text-transparent font-medium italic '>
									Desarrolladora de Software
								</span>{' '}
								con muchas ganas de seguir aprendiedo.
							</h3>
						</div>
					</div>
				</div>
			</div>
			<hr className='mx-8 my-6' />
		</>
	);
}
