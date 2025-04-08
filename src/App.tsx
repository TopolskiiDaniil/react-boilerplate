import { Button } from './components/button'
import { Card } from './components/card'
import { Text, Heading } from './components/typography'

function App() {
	return (
		<>
			<Card>
				<Heading size="md">Stitches UI</Heading>
				<Text>Пример использования темы и вариантов компонентов.</Text>
				<Button variant="primary" size="md">Primary</Button>
				<Button variant="secondary" size="sm" style={{ marginLeft: 75 }}>Secondary</Button>
				<Button variant="outline" size="lg" style={{ marginLeft: 75 }}>Outline</Button>
			</Card>
		</>
	)
}

export default App
