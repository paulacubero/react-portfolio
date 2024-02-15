import { Card } from './components/card/card.jsx';
import { CVHeader } from './components/cv-header/cv-header.jsx';
import { Formation } from './components/formation/formation.jsx';
import { Skills } from './components/skills/skills.jsx';
import './style.css';
import { Projects } from './components/projects/projects.jsx';

function App() {
	return (
		<div className={'main'}>
			<CVHeader />
			<Card title={'FORMACIÓN'}>
				<Formation />
			</Card>
			<Card title={'PROYECTOS'}>
				<Projects />
			</Card>
			<Card title={'HABILIDADES'}>
				<Skills />
			</Card>
		</div>
	);
}

export default App;
