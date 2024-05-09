import React from 'react'

function SectionItem() {
	return (
		<div
			data-theme="emerald"
			className="card lg:card-side shadow-xl max-w-3xl m-8"
		>
			<figure className="lg:ml-4">
				<img
					src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
					alt="Album"
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">New album is released!</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
					asperiores incidunt quas aspernatur, recusandae magnam odit nostrum
					necessitatibus similique laborum iste sunt, vero doloremque obcaecati
					corporis dolores? Quam, soluta praesentium!
				</p>
				<div className="card-actions justify-end">
					<button className="btn btn-primary">Listen</button>
				</div>
			</div>
		</div>
	)
}

export default SectionItem
