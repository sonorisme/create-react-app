import Typed from "typed.js";
import { useRef, useEffect } from "react";

function Line(props) {
	const ref = useRef(null);

	useEffect(() => {
        console.log("update")
        if(props.something == false) {
		var typed = new Typed(ref.current, {
			strings: ["Long long time ago...", "I'm a web developer."],
			typeSpeed: 50,
			backSpeed: 50,
			showCursor: false,
			startDelay: 1000,
			backDelay: 1000,
            onComplete: (self) => {
                console.log("done");
                props.setSomething(true);
                self.destroy();
            }
		});
        }
	});

    if(props.something) {
        return null
    }

	return (
		<div className="line">
			<p ref={ref}></p>
		</div>
	);
}

export default Line;
