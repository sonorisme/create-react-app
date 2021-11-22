import { useState } from "react";
import Background from "./Background";

export default function HandleDrop() {
	const [x, setx] = useState(0);
	const [y, sety] = useState(0);

	function handleDragOver(e) {
		e.preventDefault();      
	}

	function handleDrop(e) {
		e.preventDefault();
		var x = parseFloat(e.dataTransfer.getData("x"));
		var y = parseFloat(e.dataTransfer.getData("y"));
		console.log(e.dataTransfer.getData("x"));
		console.log(e.dataTransfer.getData("y"));
		x = e.clientX - x;
		y = e.clientY - y;
		// console.log(e.clientX, e.clientY);
		// console.log( data[0], data[1]);
		// console.log(x, y);
		setx(x);
		sety(y);

	}

	return (
		<div onDragOver={handleDragOver} onDrop={handleDrop}>
			<Background x={x} y={y} />
		</div>
	);
}
