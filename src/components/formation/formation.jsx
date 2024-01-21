import style from './style.module.css';

export function Formation() {
	return (
		<div className={style.formationWrapper}>
			<div className={style.mainFormationWrapper}>
				<ul>CICLO DE GRADO SUPERIOR EN DESARROLLO DE APLICACIONES WEB.</ul>
				<ul className={style.years}>Campus FP | 2022 - 2024</ul>
				<ul>HIGHER NATIONAL DIPLOMA (HND)</ul>
				<ul className={style.years}>Campus FP | 2022 - 2024</ul>
				<ul>BACHILLERATO DE CIENCIAS SOCIALES.</ul>
				<ul className={style.years}>
					Colegio Divina Pastora Getafe | 2020 - 2022
				</ul>
			</div>
		</div>
	);
}
