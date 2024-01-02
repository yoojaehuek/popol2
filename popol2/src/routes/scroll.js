import { useRef } from "react";
import { useAnimationFrame } from "framer-motion";
import "../scss/Main.scss";

export default function Scroll() {
    // useRef를 사용하여 DOM 요소에 접근할 ref 생성
    const ref = useRef(null);

    // useAnimationFrame 훅을 사용하여 애니메이션 프레임마다 실행되는 함수 정의
    useAnimationFrame((t) => {
        // 시간에 따라 회전 각도와 y축 이동 거리를 계산하여 큐브에 적용
        const rotate = Math.sin(t / 1000) * 200; // 시간에 따라 회전 각도를 계산
        const y = (1 + Math.sin(t / 1000)) * -50; // 시간에 따라 y축 이동 거리를 계산
        // 큐브에 회전과 이동 효과 적용
        ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
    });

    // JSX를 반환하여 화면에 표시될 내용 정의
    return(
        <div className="container">
            {/* 3D 큐브를 나타내는 DOM 요소 */}
            <div className="cube" ref={ref}>
                <div className="side front" />
                <div className="side left" />
                <div className="side right" />
                <div className="side top" />
                <div className="side bottom" />
                <div className="side back" />
            </div>
            {/* 큐브 위에 표시되는 환영 메시지 */}
            <div className="cube1">
              <h1>Music Hub에 오신걸 환영합니다</h1>
            </div>
        </div>
    )
}
