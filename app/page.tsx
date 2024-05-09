import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import SectionItem from './components/SectionItem'
import BubbleBackground from './components/bubble.svg'
import sectionBackground from './components/section.svg'
import bottomSectionBackground from './components/bottomSection.svg'

export default function Home() {
	return (
		<>
			<div
				className="bg-cover"
				style={{ backgroundImage: `url(${BubbleBackground.src})` }}
			>
				<Navbar />
				<Hero />
			</div>
			<div
				className="bg-cover"
				style={{
					backgroundImage: `url(${sectionBackground.src})`,
					aspectRatio: '900/100',
				}}
			></div>
			<div className="flex justify-start">
				<SectionItem />
			</div>
			<div className="flex justify-end">
				<SectionItem />
			</div>
			<div
				className="bg-cover"
				style={{
					backgroundImage: `url(${bottomSectionBackground.src})`,
					aspectRatio: '900/100',
				}}
			></div>
			<Footer />
		</>
	)
}
