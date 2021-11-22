import HandleDrop from "./HandleDrop";
import Line from "./Line";
import "./App.css";
import PinkButton from "./PinkButton";

import { useState } from "react";

function App() {
	const [ something, setSomething ] = useState(false);

	return (
		<div className="App">
			{/* <HandleDrop />
			<Line setSomething={setSomething} something={something} /> */}
			<PinkButton />
		</div>
	);
}

export default App;
