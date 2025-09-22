'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const navigation = [
	{ name: 'Dashboard', href: '/dashboard', icon: '📊' },
	{ name: 'Signals', href: '/signals', icon: '📈' },
	{ name: 'Profile', href: '/profile', icon: '👤' },
	{ name: 'Admin', href: '/admin', icon: '⚙️' },
]

export default function Sidebar() {
	const [isCollapsed, setIsCollapsed] = useState(true)
	const pathname = usePathname()

	return (
		<div className={`bg-white shadow-lg transition-all duration-300 ${
			isCollapsed ? 'w-16' : 'w-64'
		} h-screen fixed left-0 top-0 z-50`}>
			{/* Header */}
			<div className="p-4 border-b border-gray-200">
				<div className="flex items-center">
					<Image 
						src="/signalsquirrel.png" 
						alt="SignalSquirrel Logo" 
						width={32} 
						height={32}
						className="w-8 h-8"
					/>
					{!isCollapsed && (
						<span className="ml-2 text-lg font-bold text-primary">SignalSquirrel</span>
					)}
				</div>
			</div>

			{/* Toggle Button */}
			<button
				onClick={() => setIsCollapsed(!isCollapsed)}
				className="absolute -right-3 top-4 bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-primary-600 transition-colors"
			>
				{isCollapsed ? '→' : '←'}
			</button>

			{/* Navigation */}
			<nav className="mt-6 px-2">
				<ul className="space-y-2">
					{navigation.map((item) => {
						const isActive = pathname === item.href
						return (
							<li key={item.name}>
								<Link
									href={item.href}
									className={`flex items-center px-3 py-3 rounded-lg transition-colors group ${
										isActive
											? 'bg-primary text-white'
											: 'text-gray-700 hover:bg-gray-100'
									}`}
								>
									<span className="text-xl">{item.icon}</span>
									{!isCollapsed && (
										<span className="ml-3 font-medium">{item.name}</span>
									)}
									{isCollapsed && (
										<div className="absolute left-16 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
											{item.name}
										</div>
									)}
								</Link>
							</li>
						)
					})}
				</ul>
			</nav>

			{/* Footer */}
			<div className="absolute bottom-4 left-2 right-2">
				{!isCollapsed && (
					<div className="text-xs text-gray-500 text-center">
						SignalSquirrel v1.0
					</div>
				)}
			</div>
		</div>
	)
}
