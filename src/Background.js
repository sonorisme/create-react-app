import { useEffect, useRef } from "react";
import bear from "./img/bear.jpg";
import DraggableImg from "./DraggableImg";

function Background(props) {
	var container = useRef(null);
	function resizeWin() {
		container.current.style.height =
		window.innerWidth / 1.6 <= window.innerHeight
				? window.innerWidth / 1.6 + "px"
				: window.innerHeight + "px";
	}

   
	
    useEffect(() => {
		container.current.style.height = window.innerWidth / 1.6 + "px";
		resizeWin();
	});

	useEffect(() => {
		window.addEventListener("resize", resizeWin);
		return () => {
			window.removeEventListener("resize", resizeWin);
		};
	});

	return (
		
			<div
				ref={container}
				style={{
					width: "100vw",
					overflow: "hidden",
					position: "relative",
				}}
              
			>
                 <DraggableImg x={props.x} y={props.y} />
				<img
					style={{
						width: "130vw",
						padding: 0,
						margin: 0,
						left: "50%",
						top: "50%",
						position: "absolute",
						transform: "translate(-50%, -50%)",
					}}
					src={bear}
					alt="bear"
				/>
               
			</div>

	);
}

export default Background;
