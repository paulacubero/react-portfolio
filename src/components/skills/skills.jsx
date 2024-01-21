import style from './style.module.css';
import { IconoJavascript } from '../logo/logo.jsx';
import { IconoHtml } from '../logo/logo.jsx';
import { IconoCss } from '../logo/logo.jsx';
import { IconoReact } from '../logo/logo.jsx';
import { Icononode } from '../logo/logo.jsx';
import { IconoJava } from '../logo/logo.jsx';
import { IconoMongoDB } from '../logo/logo.jsx';
import { IconoPostgress } from '../logo/logo.jsx';
import { IconoMySQL } from '../logo/logo.jsx';
import { IconoGit } from '../logo/logo.jsx';

export function Skills() {
	return (
		<div className={style.skillsWrapper}>
			<div className={style.mainskillsWrapper}>
				<IconoHtml />
				<IconoCss />
				<IconoJavascript />
				<IconoReact />
				<Icononode />
				<IconoJava />
			</div>
			<div className={style.mainskillsWrapper}>
				<IconoMongoDB />
				<IconoPostgress />
				<IconoMySQL />
				<IconoGit />
			</div>
		</div>
	);
}
