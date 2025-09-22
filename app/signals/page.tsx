'use client'

import { useEffect, useState } from 'react'

interface Signal {
	id: string
	symbol: string
	action: 'BUY' | 'SELL'
	price: string
	confidence: number
	time: string
	status: 'active' | 'completed' | 'expired'
	description: string
}

export default function SignalsPage() {
	const [signals, setSignals] = useState<Signal[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all')

	useEffect(() => {
		// Mock data for now - in real implementation, this would fetch from an API
		const mockSignals: Signal[] = [
			{
				id: '1',
				symbol: 'BTC/USD',
				action: 'BUY',
				price: '$45,230',
				confidence: 87,
				time: '2 min ago',
				status: 'active',
				description: 'Strong bullish momentum detected with volume confirmation'
			},
			{
				id: '2',
				symbol: 'ETH/USD',
				action: 'SELL',
				price: '$3,120',
				confidence: 92,
				time: '15 min ago',
				status: 'completed',
				description: 'Resistance level reached, profit target achieved'
			},
			{
				id: '3',
				symbol: 'ADA/USD',
				action: 'BUY',
				price: '$0.52',
				confidence: 75,
				time: '1 hour ago',
				status: 'active',
				description: 'Breakout pattern confirmed with increasing volume'
			},
			{
				id: '4',
				symbol: 'SOL/USD',
				action: 'SELL',
				price: '$98.50',
				confidence: 88,
				time: '2 hours ago',
				status: 'completed',
				description: 'Technical indicators showing bearish divergence'
			},
			{
				id: '5',
				symbol: 'DOT/USD',
				action: 'BUY',
				price: '$6.80',
				confidence: 81,
				time: '3 hours ago',
				status: 'active',
				description: 'Support level holding strong, potential reversal'
			},
			{
				id: '6',
				symbol: 'LINK/USD',
				action: 'SELL',
				price: '$14.20',
				confidence: 79,
				time: '4 hours ago',
				status: 'expired',
				description: 'Signal expired without execution'
			}
		]

		setTimeout(() => {
			setSignals(mockSignals)
			setIsLoading(false)
		}, 1000)
	}, [])

	const filteredSignals = signals.filter(signal => {
		if (filter === 'all') return true
		return signal.status === filter
	})

	return (
		<div className="min-h-screen bg-gray-50 py-8">
			<div className="container mx-auto px-4">
				<div className="max-w-7xl mx-auto">
					<div className="flex justify-between items-center mb-8">
						<div>
							<h1 className="text-3xl font-bold text-gray-800">Trading Signals</h1>
							<p className="text-gray-600">AI-powered market analysis and trading recommendations</p>
						</div>
						<div className="flex gap-2">
							<button
								onClick={() => setFilter('all')}
								className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-outline'}`}
							>
								All Signals
							</button>
							<button
								onClick={() => setFilter('active')}
								className={`btn ${filter === 'active' ? 'btn-primary' : 'btn-outline'}`}
							>
								Active
							</button>
							<button
								onClick={() => setFilter('completed')}
								className={`btn ${filter === 'completed' ? 'btn-primary' : 'btn-outline'}`}
							>
								Completed
							</button>
						</div>
					</div>

					{/* Stats Cards */}
					<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
						<div className="bg-white rounded-lg shadow-lg p-6">
							<div className="flex items-center">
								<div className="p-2 bg-primary-100 rounded-lg">
									<svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
									</svg>
								</div>
								<div className="ml-4">
									<p className="text-sm font-medium text-gray-600">Total Signals</p>
									<p className="text-2xl font-bold text-gray-800">{signals.length}</p>
								</div>
							</div>
						</div>

						<div className="bg-white rounded-lg shadow-lg p-6">
							<div className="flex items-center">
								<div className="p-2 bg-accent-green bg-opacity-20 rounded-lg">
									<svg className="w-6 h-6 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								</div>
								<div className="ml-4">
									<p className="text-sm font-medium text-gray-600">Active</p>
									<p className="text-2xl font-bold text-gray-800">
										{signals.filter(s => s.status === 'active').length}
									</p>
								</div>
							</div>
						</div>

						<div className="bg-white rounded-lg shadow-lg p-6">
							<div className="flex items-center">
								<div className="p-2 bg-secondary bg-opacity-20 rounded-lg">
									<svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
									</svg>
								</div>
								<div className="ml-4">
									<p className="text-sm font-medium text-gray-600">Completed</p>
									<p className="text-2xl font-bold text-gray-800">
										{signals.filter(s => s.status === 'completed').length}
									</p>
								</div>
							</div>
						</div>

						<div className="bg-white rounded-lg shadow-lg p-6">
							<div className="flex items-center">
								<div className="p-2 bg-accent-violet bg-opacity-20 rounded-lg">
									<svg className="w-6 h-6 text-accent-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
									</svg>
								</div>
								<div className="ml-4">
									<p className="text-sm font-medium text-gray-600">Avg Confidence</p>
									<p className="text-2xl font-bold text-gray-800">
										{Math.round(signals.reduce((acc, s) => acc + s.confidence, 0) / signals.length)}%
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Signals List */}
					<div className="bg-white rounded-lg shadow-lg overflow-hidden">
						{isLoading ? (
							<div className="p-8 text-center">
								<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
								<p className="text-gray-600">Loading signals...</p>
							</div>
						) : (
							<div className="overflow-x-auto">
								<table className="table w-full">
									<thead className="bg-gray-50">
										<tr>
											<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Symbol
											</th>
											<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Action
											</th>
											<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Price
											</th>
											<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Confidence
											</th>
											<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Status
											</th>
											<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Time
											</th>
											<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Description
											</th>
										</tr>
									</thead>
									<tbody className="bg-white divide-y divide-gray-200">
										{filteredSignals.map((signal) => (
											<tr key={signal.id} className="hover:bg-gray-50">
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="text-sm font-medium text-gray-900">
														{signal.symbol}
													</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
														signal.action === 'BUY' 
															? 'bg-accent-green text-white' 
															: 'bg-red-500 text-white'
													}`}>
														{signal.action}
													</span>
												</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
													{signal.price}
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="flex items-center">
														<div className="w-full bg-gray-200 rounded-full h-2 mr-2">
															<div 
																className="bg-primary h-2 rounded-full" 
																style={{ width: `${signal.confidence}%` }}
															></div>
														</div>
														<span className="text-sm text-gray-600">{signal.confidence}%</span>
													</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
														signal.status === 'active' 
															? 'bg-accent-green text-white'
															: signal.status === 'completed'
															? 'bg-primary text-white'
															: 'bg-gray-400 text-white'
													}`}>
														{signal.status}
													</span>
												</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
													{signal.time}
												</td>
												<td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
													{signal.description}
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}