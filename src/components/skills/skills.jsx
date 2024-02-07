import style from './style.module.css';
import { IconoJavascript, IconoTailwind } from '../logo/logo.jsx';
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
				<div className={style.logo}>
					<IconoHtml />
				</div>
				<div className={style.logo}>
					<IconoCss />
				</div>
				<div className={style.logo}>
					<IconoJavascript />
				</div>
				<div className={style.logo}>
					<IconoReact />
				</div>
				<div className={style.logo}>
					<Icononode />
				</div>
				<div className={style.logo}>
					<IconoJava />
				</div>
			</div>
			<div className={style.mainskillsWrapper}>
				<div className={style.logo}>
					<IconoMongoDB />
				</div>
				<div className={style.logo}>
					<IconoPostgress />
				</div>
				<div className={style.logo}>
					<IconoMySQL />
				</div>
				<div className={style.logo}>
					<IconoGit />
				</div>
				<div className={style.logo}>
					<IconoTailwind />
				</div>
			</div>
		</div>
	);
}
