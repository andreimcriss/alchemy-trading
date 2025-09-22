'use client'

import { useEffect, useState } from 'react'

interface User {
	username: string
	email: string
	groups: string[]
	status: string
	createdAt: string
}

export default function AdminPage() {
	const [users, setUsers] = useState<User[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const [userGroups, setUserGroups] = useState<string[]>(['admin'])
	const [selectedUser, setSelectedUser] = useState<User | null>(null)
	const [showAddUserModal, setShowAddUserModal] = useState(false)

	useEffect(() => {
		// Mock data for now - in real implementation, this would call a Lambda function
		if (userGroups.includes('admin')) {
			setUsers([
				{
					username: 'john.doe',
					email: 'john.doe@example.com',
					groups: ['user'],
					status: 'CONFIRMED',
					createdAt: '2024-01-15T10:30:00Z'
				},
				{
					username: 'jane.smith',
					email: 'jane.smith@example.com',
					groups: ['premium'],
					status: 'CONFIRMED',
					createdAt: '2024-01-20T14:45:00Z'
				},
				{
					username: 'admin.user',
					email: 'admin@signalsquirrel.com',
					groups: ['admin'],
					status: 'CONFIRMED',
					createdAt: '2024-01-01T09:00:00Z'
				}
			])
			setIsLoading(false)
		}
	}, [userGroups])

	const handleAddUserToGroup = async (username: string, group: string) => {
		try {
			// In real implementation, this would call a Lambda function
			console.log(`Adding user ${username} to group ${group}`)
			// Update local state
			setUsers(users.map(u => 
				u.username === username 
					? { ...u, groups: [...u.groups, group] }
					: u
			))
		} catch (error) {
			console.error('Error adding user to group:', error)
		}
	}

	const handleRemoveUserFromGroup = async (username: string, group: string) => {
		try {
			// In real implementation, this would call a Lambda function
			console.log(`Removing user ${username} from group ${group}`)
			// Update local state
			setUsers(users.map(u => 
				u.username === username 
					? { ...u, groups: u.groups.filter(g => g !== group) }
					: u
			))
		} catch (error) {
			console.error('Error removing user from group:', error)
		}
	}

	if (!userGroups.includes('admin')) {
		return (
			<div className="min-h-screen bg-gray-50 flex items-center justify-center">
				<div className="text-center">
					<h1 className="text-2xl text-gray-800 mb-4">Access Denied</h1>
					<p className="text-gray-600 mb-4">You don&apos;t have permission to access the admin panel.</p>
					<a href="/profile" className="btn btn-primary">Back to Profile</a>
				</div>
			</div>
		)
	}

	return (
		<div className="min-h-screen bg-gray-50 py-8">
			<div className="container mx-auto px-4">
				<div className="max-w-7xl mx-auto">
					<div className="flex justify-between items-center mb-8">
						<div>
							<h1 className="text-3xl font-bold text-gray-800">Admin Panel</h1>
							<p className="text-gray-600">Manage users and groups</p>
						</div>
						<button 
							onClick={() => setShowAddUserModal(true)}
							className="btn btn-primary"
						>
							Add New User
						</button>
					</div>

					<div className="bg-white rounded-lg shadow-lg overflow-hidden">
						<div className="overflow-x-auto">
							<table className="table w-full">
								<thead className="bg-gray-50">
									<tr>
										<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
											User
										</th>
										<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
											Email
										</th>
										<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
											Groups
										</th>
										<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
											Status
										</th>
										<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
											Created
										</th>
										<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
											Actions
										</th>
									</tr>
								</thead>
								<tbody className="bg-white divide-y divide-gray-200">
									{isLoading ? (
										<tr>
											<td colSpan={6} className="px-6 py-4 text-center">
												<div className="animate-pulse">Loading users...</div>
											</td>
										</tr>
									) : (
										users.map((user) => (
											<tr key={user.username} className="hover:bg-gray-50">
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="flex items-center">
														<div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
															<span className="text-white text-sm font-medium">
																{user.username[0].toUpperCase()}
															</span>
														</div>
														<div className="ml-3">
															<div className="text-sm font-medium text-gray-900">
																{user.username}
															</div>
														</div>
													</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
													{user.email}
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="flex flex-wrap gap-1">
														{user.groups.map((group) => (
															<span
																key={group}
																className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
																	group === 'admin'
																		? 'bg-accent-violet text-white'
																		: group === 'premium'
																		? 'bg-secondary text-white'
																		: 'bg-primary text-white'
																}`}
															>
																{group}
															</span>
														))}
													</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-green text-white">
														{user.status}
													</span>
												</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
													{new Date(user.createdAt).toLocaleDateString()}
												</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
													<button
														onClick={() => setSelectedUser(user)}
														className="text-primary hover:text-primary-600 mr-3"
													>
														Manage Groups
													</button>
												</td>
											</tr>
										))
									)}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>

			{/* Group Management Modal */}
			{selectedUser && (
				<div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
					<div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
						<div className="mt-3">
							<h3 className="text-lg font-medium text-gray-900 mb-4">
								Manage Groups for {selectedUser.username}
							</h3>
							<div className="space-y-3">
								{['admin', 'premium', 'user'].map((group) => (
									<div key={group} className="flex items-center justify-between">
										<span className="text-sm font-medium text-gray-700 capitalize">
											{group}
										</span>
										<div className="flex gap-2">
											{selectedUser.groups.includes(group) ? (
												<button
													onClick={() => handleRemoveUserFromGroup(selectedUser.username, group)}
													className="btn btn-sm btn-error"
												>
													Remove
												</button>
											) : (
												<button
													onClick={() => handleAddUserToGroup(selectedUser.username, group)}
													className="btn btn-sm btn-primary"
												>
													Add
												</button>
											)}
										</div>
									</div>
								))}
							</div>
							<div className="flex justify-end mt-6">
								<button
									onClick={() => setSelectedUser(null)}
									className="btn btn-outline"
								>
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}