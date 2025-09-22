import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ConfigureAmplifyClientSide from '@/components/ConfigureAmplifyClientSide'
import Sidebar from '@/components/Sidebar'

import './globals.css'
import '@aws-amplify/ui-react/styles.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'SignalSquirrel - Trading Platform',
	description: 'Advanced trading platform with intelligent signal analysis',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" data-theme="signalsquirrel">
			<body className={inter.className}>
				<ConfigureAmplifyClientSide />
				<div className="flex">
					<Sidebar />
					<main className="flex-1 ml-16 lg:ml-64 min-h-screen bg-gray-50">
						{children}
					</main>
				</div>
			</body>
		</html>
	)
}
