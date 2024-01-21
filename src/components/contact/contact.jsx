import React from 'react';
import style from './style.module.css';
import { IconoGitHub, IconoLinkedin, IconoGmail } from '../logo/logo.jsx';

export function Contact() {
	const enviarCorreo = () => {
		window.location.href =
			'mailto:paulacubero.e@gmail.com?subject=Asunto del correo&body=Cuerpo del correo';
	};

	return (
		<div className={style.formationWrapper}>
			<div className={style.mainFormationWrapper}>
				<div className={style.iconsContacts}>
					<a href='https://github.com/paulacubero'>
						<IconoGitHub />
					</a>
					<a href='https://www.linkedin.com/in/paula-cubero-encinas/'>
						<IconoLinkedin />
					</a>
					<a className={style.email} onClick={enviarCorreo}>
						<IconoGmail />
					</a>
				</div>
			</div>
		</div>
	);
}
