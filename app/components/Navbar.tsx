import React from 'react'

function Navbar() {
	return (
		<div className="navbar">
			<div className="flex-1">
				<a className="btn btn-ghost text-2xl">Focus Otter</a>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					<li>
						<a className="text-lg">Link</a>
					</li>
					<li>
						<details>
							<summary className="text-lg">Parent</summary>
							<ul className="p-2  rounded-t-none">
								<li>
									<a className="text-lg">Link 1</a>
								</li>
								<li>
									<a className="text-lg">Link 2</a>
								</li>
							</ul>
						</details>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar
