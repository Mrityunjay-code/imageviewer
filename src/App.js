import React, { useEffect, useState } from 'react';
import './App.css';
import images from './data';




function App() {
	
	const [filteredImages, setFilteredImages] = useState([]);

	useEffect(
		() => {
			 setFilteredImages(images);
		},
		
	);

	return (
		<div className="App">
		
			
				<div className="container">
					{filteredImages.map(image => (
						<div key={image.id} className="image-card">
							<a href={`/images/${image.imageName}`}>
								<img className="image" src={`/images/${image.imageName}`} alt="" />
							</a>
						</div>
					))}
				</div>
			
		</div>
	);
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
	return (
		<button className={`tag ${tagActive ? 'active' : null}`} onClick={() => handleSetTag(name)}>
			{name.toUpperCase()}
		</button>
	);
};

export default App;
