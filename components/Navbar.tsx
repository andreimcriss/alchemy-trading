import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Logout from './Logout'

function Navbar({ auth }: { auth?: boolean }) {
	return (
		<div className="navbar bg-base-100 shadow-lg">
			<div className="flex-1">
				<Link href="/" className="btn btn-ghost text-2xl flex items-center gap-2">
					<Image 
						src="/signalsquirrel.png" 
						alt="SignalSquirrel Logo" 
						width={40} 
						height={40}
						className="w-10 h-10"
					/>
					<span className="text-primary font-bold">SignalSquirrel</span>
				</Link>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					<li>
						<Link href={'/dashboard'} className="text-lg text-gray-800 hover:text-primary">
							Dashboard
						</Link>
					</li>
					<li>
						<Link href={'/signals'} className="text-lg text-gray-800 hover:text-primary">
							Signals
						</Link>
					</li>
					{auth && (
						<>
							<li>
								<Link href={'/profile'} className="text-lg text-gray-800 hover:text-primary">
									Profile
								</Link>
							</li>
							<li>
								<Logout />
							</li>
						</>
					)}
				</ul>
			</div>
		</div>
	)
}

export default Navbar
