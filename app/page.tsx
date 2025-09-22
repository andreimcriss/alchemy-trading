import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import SectionItem from '@/components/SectionItem'
import BubbleBackground from '@/components/bubble.svg'
import sectionBackground from '@/components/section.svg'
import bottomSectionBackground from '@/components/bottomSection.svg'

export default function Home() {
	return (
		<>
			<div
				className="bg-cover"
				style={{ backgroundImage: `url(${BubbleBackground.src})` }}
			>
				<Hero />
			</div>
			<div
				className="bg-cover"
				style={{
					backgroundImage: `url(${sectionBackground.src})`,
					aspectRatio: '900/100',
				}}
			></div>
			<main className="py-16">
				<div className="container mx-auto px-4">
					<h1 className="text-center text-5xl font-bold text-gray-800 mb-6">
						Welcome to SignalSquirrel 🐿️
					</h1>
					<p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
						Advanced trading signals powered by AI. Make smarter investment decisions with our intelligent market analysis.
					</p>
					
					<div className="grid md:grid-cols-2 gap-8 mb-16">
						<SectionItem
							title="AI-Powered Signals"
							description="Our advanced algorithms analyze market data in real-time to generate high-probability trading signals. Get ahead of market movements with intelligent predictions."
							img="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
							btnText="View Signals"
						/>
						<SectionItem
							title="Real-Time Analysis"
							description="Stay updated with live market analysis and instant notifications. Never miss a trading opportunity with our comprehensive monitoring system."
							img="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
							btnText="Start Trading"
						/>
					</div>

					{/* Features Section */}
					<div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
						<h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
							Why Choose SignalSquirrel?
						</h2>
						<div className="grid md:grid-cols-3 gap-8">
							<div className="text-center">
								<div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
									<svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
									</svg>
								</div>
								<h3 className="text-xl font-semibold text-gray-800 mb-2">Smart Alerts</h3>
								<p className="text-gray-600">Get notified only when it matters with our intelligent filtering system.</p>
							</div>
							<div className="text-center">
								<div className="w-16 h-16 bg-accent-green bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
									<svg className="w-8 h-8 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
									</svg>
								</div>
								<h3 className="text-xl font-semibold text-gray-800 mb-2">Lightning Fast</h3>
								<p className="text-gray-600">Process market data in milliseconds for instant signal generation.</p>
							</div>
							<div className="text-center">
								<div className="w-16 h-16 bg-secondary bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
									<svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
									</svg>
								</div>
								<h3 className="text-xl font-semibold text-gray-800 mb-2">Secure & Reliable</h3>
								<p className="text-gray-600">Bank-level security with 99.9% uptime guarantee for your peace of mind.</p>
							</div>
						</div>
					</div>

					{/* CTA Section */}
					<div className="text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white">
						<h2 className="text-3xl font-bold mb-4">Ready to Start Trading Smarter?</h2>
						<p className="text-xl mb-8 opacity-90">Join thousands of traders who trust SignalSquirrel for their investment decisions.</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<a href="/auth" className="btn btn-white text-primary hover:bg-gray-100">
								Get Started Free
							</a>
							<a href="/dashboard" className="btn btn-outline btn-white border-white text-white hover:bg-white hover:text-primary">
								View Dashboard
							</a>
						</div>
					</div>
				</div>
			</main>
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
