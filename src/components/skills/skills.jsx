import './style.css';
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
		<div className={'skillsWrapper'}>
			<div className={'mainskillsWrapper'}>
				{/* <div className={'logo logo-white'}>
					<IconoHtml />
				</div>
				<div className={'logo logo-white'}>
					<IconoCss />
				</div> */}
				<div className={'logo logo-white'}>
					<IconoJavascript />
				</div>
				<div className={'logo logo-white'}>
					<IconoReact />
				</div>
				<div className={'logo logo-white'}>
					<Icononode />
				</div>
				<div className={'logo logo-white'}>
					<IconoJava />
				</div>
				<div className={'logo logo-white'}>
					<IconoMongoDB />
				</div>
				<div className={'logo logo-white'}>
					<IconoPostgress />
				</div>
				<div className={'logo logo-white'}>
					<IconoMySQL />
				</div>
				<div className={'logo logo-white'}>
					<IconoGit />
				</div>
				<div className={'logo logo-white'}>
					<IconoTailwind />
				</div>
			</div>
		</div>
	);
}
