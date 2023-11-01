import { useRef } from "react";
import { useAnimationFrame } from "framer-motion";
import "../scss/Main.scss";

export default function Scroll() {
    const ref = useRef(null);

    useAnimationFrame((t) => {
        const rotate = Math.sin(t / 1000) * 200;
        const y = (1 + Math.sin(t / 1000)) * -50;
        ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
    });

    return(
        <div className="container">
            <div className="cube" ref={ref}>
                <div className="side front" />
                <div className="side left" />
                <div className="side right" />
                <div className="side top" />
                <div className="side bottom" />
                <div className="side back" />
            </div>
            <div className="cube1">
              <h1>Music Hub에 오신걸 환영합니다</h1>
            </div>
        </div>
    )
}