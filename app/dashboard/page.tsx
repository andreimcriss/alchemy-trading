'use client'

import { useEffect, useState } from 'react'

export default function DashboardPage() {
	const [userGroups, setUserGroups] = useState<string[]>(['user'])
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		// Simulate loading
		setIsLoading(false)
	}, [])

	return (
		<div className="min-h-screen bg-gray-50 py-8">
			<div className="container mx-auto px-4">
				<div className="max-w-7xl mx-auto">
					<div className="mb-8">
						<h1 className="text-3xl font-bold text-gray-800 mb-2">
							Welcome back, Trader!
						</h1>
						<p className="text-gray-600">Here&apos;s what&apos;s happening with your trading signals today.</p>
					</div>

					{/* Stats Cards */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
						<div className="bg-white rounded-lg shadow-lg p-6">
							<div className="flex items-center">
								<div className="p-2 bg-primary-100 rounded-lg">
									<svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
									</svg>
								</div>
								<div className="ml-4">
									<p className="text-sm font-medium text-gray-600">Active Signals</p>
									<p className="text-2xl font-bold text-gray-800">12</p>
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
									<p className="text-sm font-medium text-gray-600">Successful Trades</p>
									<p className="text-2xl font-bold text-gray-800">8</p>
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
									<p className="text-sm font-medium text-gray-600">Total Profit</p>
									<p className="text-2xl font-bold text-gray-800">+$2,450</p>
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
									<p className="text-sm font-medium text-gray-600">Win Rate</p>
									<p className="text-2xl font-bold text-gray-800">67%</p>
								</div>
							</div>
						</div>
					</div>

					{/* Main Content Grid */}
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
						{/* Recent Signals */}
						<div className="lg:col-span-2">
							<div className="bg-white rounded-lg shadow-lg p-6">
								<h2 className="text-xl font-bold text-gray-800 mb-4">Recent Signals</h2>
								<div className="space-y-4">
									{[
										{ symbol: 'BTC/USD', action: 'BUY', price: '$45,230', time: '2 min ago', status: 'active' },
										{ symbol: 'ETH/USD', action: 'SELL', price: '$3,120', time: '15 min ago', status: 'completed' },
										{ symbol: 'ADA/USD', action: 'BUY', price: '$0.52', time: '1 hour ago', status: 'active' },
										{ symbol: 'SOL/USD', action: 'SELL', price: '$98.50', time: '2 hours ago', status: 'completed' },
									].map((signal, index) => (
										<div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
											<div className="flex items-center space-x-4">
												<div className={`w-3 h-3 rounded-full ${
													signal.status === 'active' ? 'bg-accent-green' : 'bg-gray-400'
												}`}></div>
												<div>
													<p className="font-medium text-gray-800">{signal.symbol}</p>
													<p className="text-sm text-gray-600">{signal.time}</p>
												</div>
											</div>
											<div className="text-right">
												<p className={`font-bold ${
													signal.action === 'BUY' ? 'text-accent-green' : 'text-red-500'
												}`}>
													{signal.action}
												</p>
												<p className="text-sm text-gray-600">{signal.price}</p>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>

						{/* Quick Actions & Account Info */}
						<div className="space-y-6">
							{/* Quick Actions */}
							<div className="bg-white rounded-lg shadow-lg p-6">
								<h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
								<div className="space-y-3">
									<button className="w-full btn btn-primary text-left justify-start">
										Generate New Signal
									</button>
									<button className="w-full btn btn-outline text-left justify-start">
										View All Signals
									</button>
									<button className="w-full btn btn-outline text-left justify-start">
										Export Data
									</button>
									{userGroups.includes('admin') && (
										<a href="/admin" className="w-full btn btn-secondary text-left justify-start">
											Admin Panel
										</a>
									)}
								</div>
							</div>

							{/* Account Status */}
							<div className="bg-white rounded-lg shadow-lg p-6">
								<h2 className="text-xl font-bold text-gray-800 mb-4">Account Status</h2>
								<div className="space-y-3">
									<div className="flex justify-between">
										<span className="text-gray-600">Plan:</span>
										<span className={`font-medium ${
											userGroups.includes('premium') ? 'text-secondary' : 'text-primary'
										}`}>
											{userGroups.includes('premium') ? 'Premium' : 'Basic'}
										</span>
									</div>
									<div className="flex justify-between">
										<span className="text-gray-600">Signals Today:</span>
										<span className="font-medium text-gray-800">12/50</span>
									</div>
									<div className="flex justify-between">
										<span className="text-gray-600">Next Reset:</span>
										<span className="font-medium text-gray-800">23 hours</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}