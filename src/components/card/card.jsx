import style from './style.module.css';
import FormationLogo from '../../assets/formation.svg';
import SkillsLogo from '../../assets/skills.svg';
import ProjectsLogo from '../../assets/projects.svg';
import ContactLogo from '../../assets/contacto.svg';

export function Card({ title, children }) {
	const icons = {
		['FORMACIÓN']: FormationLogo,
		['HABILIDADES']: SkillsLogo,
		['PROYECTOS']: ProjectsLogo,
		['CONTACTO']: ContactLogo,
	};

	return (
		<div className={style.cardWrapper}>
			<div className={style.cardTitle}>
				<img className={style.titleIcon} src={icons[title]} />
				<h3>{title}</h3>
			</div>
			{children}
		</div>
	);
}
