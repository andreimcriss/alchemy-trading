'use client'

import { useEffect, useState } from 'react'

export default function ProfilePage() {
	const [userGroups, setUserGroups] = useState<string[]>(['user'])
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		// Simulate loading
		setIsLoading(false)
	}, [])

	return (
		<div className="min-h-screen bg-gray-50 py-8">
			<div className="container mx-auto px-4">
				<div className="max-w-4xl mx-auto">
					<div className="bg-white rounded-lg shadow-lg p-8">
						<div className="flex items-center gap-6 mb-8">
							<div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
								<span className="text-white text-2xl font-bold">
									T
								</span>
							</div>
							<div>
								<h1 className="text-3xl font-bold text-gray-800">
									Trader User
								</h1>
								<p className="text-lg text-gray-600">trader@signalsquirrel.com</p>
							</div>
						</div>

						<div className="grid md:grid-cols-2 gap-8">
							<div className="space-y-6">
								<div>
									<h2 className="text-xl font-semibold text-gray-800 mb-4">Account Information</h2>
									<div className="space-y-3">
										<div>
											<label className="block text-sm font-medium text-gray-700">Email</label>
											<p className="text-lg text-gray-800">trader@signalsquirrel.com</p>
										</div>
										<div>
											<label className="block text-sm font-medium text-gray-700">User ID</label>
											<p className="text-sm text-gray-600 font-mono">user-12345</p>
										</div>
										<div>
											<label className="block text-sm font-medium text-gray-700">Account Status</label>
											<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-green text-white">
												Active
											</span>
										</div>
									</div>
								</div>

								<div>
									<h2 className="text-xl font-semibold text-gray-800 mb-4">User Groups</h2>
									{isLoading ? (
										<div className="animate-pulse">
											<div className="h-4 bg-gray-200 rounded w-1/4"></div>
										</div>
									) : (
										<div className="flex flex-wrap gap-2">
											{userGroups.length > 0 ? (
												userGroups.map((group) => (
													<span
														key={group}
														className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
															group === 'admin'
																? 'bg-accent-violet text-white'
																: group === 'premium'
																? 'bg-secondary text-white'
																: 'bg-primary text-white'
														}`}
													>
														{group.charAt(0).toUpperCase() + group.slice(1)}
													</span>
												))
											) : (
												<span className="text-gray-500">No groups assigned</span>
											)}
										</div>
									)}
								</div>
							</div>

							<div className="space-y-6">
								<div>
									<h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
									<div className="space-y-3">
										<button className="w-full btn btn-primary text-left justify-start">
											Edit Profile
										</button>
										<button className="w-full btn btn-outline text-left justify-start">
											Change Password
										</button>
										{userGroups.includes('admin') && (
											<a href="/admin" className="w-full btn btn-secondary text-left justify-start">
												Admin Panel
											</a>
										)}
									</div>
								</div>

								<div>
									<h2 className="text-xl font-semibold text-gray-800 mb-4">Account Statistics</h2>
									<div className="grid grid-cols-2 gap-4">
										<div className="bg-gray-50 p-4 rounded-lg text-center">
											<div className="text-2xl font-bold text-primary">0</div>
											<div className="text-sm text-gray-600">Signals Generated</div>
										</div>
										<div className="bg-gray-50 p-4 rounded-lg text-center">
											<div className="text-2xl font-bold text-accent-green">0</div>
											<div className="text-sm text-gray-600">Successful Trades</div>
										</div>
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