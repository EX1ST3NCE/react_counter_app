import React, { useState } from 'react';
import './App.css';

const App = () => {
	const [Count, setCount] = useState(() => 0);
	return (
		<div>
			<div className='container card'>
				<div className='card-title'>Counter App</div>
				<div className='row'>
					<div className='content'>
						<button onClick={() => setCount((prevCount) => prevCount - 1)}>
							-
						</button>
						<span>{Count}</span>
						<button onClick={() => setCount((prevCount) => prevCount + 1)}>
							+
						</button>
					</div>
					<div className='reset'>
						<button onClick={() => setCount((prevCount) => (prevCount = 0))}>
							Resetgi
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
