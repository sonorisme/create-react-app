import bearTwins from "./img/bearTwins.png";
import { useEffect, useRef } from "react";

export default function DraggableImg(props) {
	function handleDrag(e) {
		//console.log(e)
	}
	function handleDragStart(e) {
        e.dataTransfer.setData("x", e.nativeEvent.offsetX);
        e.dataTransfer.setData("y", e.nativeEvent.offsetY);
        
	}
	const ref = useRef(null);

	useEffect(() => {
		if (ref.current) {
			ref.current.style.left = props.x + "px";
			ref.current.style.top = props.y + "px";
		}
	});

	return (
		<div
			draggable="true"
			ref={ref}
			style={{ position: "absolute", zIndex: 99}}
			onDragStart={handleDragStart}
			onDrag={handleDrag}
		>
			<img src={bearTwins} alt="bearTwins" draggable="true" />
		</div>
	);
}
