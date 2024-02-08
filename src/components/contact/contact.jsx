import React from 'react';
import style from './style.module.css';
import { IconoGitHub, IconoLinkedin, IconoGmail } from '../logo/logo.jsx';
import { enviarCorreo } from '../../services/enviarCorreo';

export function Contact() {
	return (
		<div className={style.formationWrapper}>
			<div className={style.mainFormationWrapper}>
				<div className={style.divFooter}>
					<a href='/' class='mx-auto block w-fit sm:mx-0'>
						{' '}
						<h2 class='text-2xl font-mono font-bold text-neutral-800 dark:text-white'>
							/paulacubero
						</h2>{' '}
					</a>
					<div class='w-full py-4 text-sm flex flex-col sm:flex-row items-center justify-between dark:text-gray-300 text-neutral-600 gap-y-4'>
						{' '}
						<p>© Designed and developed by PaulaCubero.</p>{' '}
						<nav class='flex gap-4'>
							{' '}
							<a
								href='https://github.com/paulacubero'
								target='_blank'
								rel='noopener noreferrer'
								class='p-2 flex bg-neutral-200 dark:bg-neutral-700 rounded-full relative before:absolute before:inset-0 dark:before:bg-white/20 before:bg-neutral-400/20 z-[2] before:rounded-full before:scale-0 before:transition-transform before:hover:scale-100 text-sm hover:text-white transition-colors'
								title='Go to Github'>
								{' '}
								<span class='sr-only'>github</span>{' '}
								<svg
									stroke-width='1.5'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									color='currentColor'
									class='w-5 h-5 dark:text-gray-300 text-neutral-600'>
									{' '}
									<path
										d='M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87M9 20.027c-3 .973-5.5 0-7-3'
										stroke='currentColor'
										stroke-linecap='round'
										stroke-linejoin='round'></path>{' '}
								</svg>{' '}
							</a>{' '}
							<a
								href='https://www.linkedin.com/in/paula-cubero-encinas/'
								target='_blank'
								rel='noopener noreferrer'
								class='p-2 flex bg-neutral-200 dark:bg-neutral-700 rounded-full relative before:absolute before:inset-0 dark:before:bg-white/20 before:bg-neutral-400/20 z-[2] before:rounded-full before:scale-0 before:transition-transform before:hover:scale-100 text-sm hover:text-white transition-colors'
								title='Visit LinkedIn'>
								{' '}
								<span class='sr-only'>linkedin</span>{' '}
								<svg
									stroke-width='2'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									color='currentColor'
									class='w-5 h-5 dark:text-gray-300 text-neutral-600'>
									{' '}
									<path
										d='M21 8v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5h8a5 5 0 015 5zM7 17v-7'
										stroke='currentColor'
										stroke-linecap='round'
										stroke-linejoin='round'></path>{' '}
									<path
										d='M11 17v-3.25M11 10v3.75m0 0c0-3.75 6-3.75 6 0V17M7 7.01l.01-.011'
										stroke='currentColor'
										stroke-linecap='round'
										stroke-linejoin='round'></path>{' '}
								</svg>{' '}
							</a>{' '}
						</nav>{' '}
					</div>
				</div>
				{/* <div className={style.iconsContacts}>
					<a className={style.logo} href='https://github.com/paulacubero'>
						<IconoGitHub />
					</a>
					<a href='https://www.linkedin.com/in/paula-cubero-encinas/'>
						<IconoLinkedin />
					</a>
					<a className={style.email} onClick={enviarCorreo}>
						<IconoGmail />
					</a>
				</div> */}
			</div>
		</div>
	);
}
