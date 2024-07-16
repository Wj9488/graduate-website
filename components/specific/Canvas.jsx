import { useEffect, useState } from "react";
import { motion as a, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";

import HomePageImage from "@/public/images/h.png";

const GradientBackground = () => {
  const [isMobile, setIsMobile] = useState(false);

  const mouseX = useMotionValue("50%");
  const mouseY = useMotionValue("50%");

  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const imageAnimation = {
    hidden: {opacity: 0, filter: "blur(15px)" },
    visible: {opacity: 1, filter: "blur(0px)" },
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isMobile) {
        mouseX.set(e.clientX - 250);
        mouseY.set(e.clientY - 250);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
      if (window.innerWidth < 800) {
        mouseX.set("50%");
        mouseY.set("50%");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile, mouseX, mouseY]);

  return (
    <div className="fixed inset-0 overflow-hidden z-[2]">
      <a.div
        className="absolute"
        style={{
          left: isMobile ? "50%" : springX,
          top: isMobile ? "50%" : springY,
          x: isMobile ? "-50%" : 0,
          y: isMobile ? "-50%" : 0,
        }}
      >
        <a.div
          initial="hidden"
          animate="visible"
          transition={{ delay: 1, duration: 0.5 }}
          variants={imageAnimation}
        >
          <Image
            src={HomePageImage}
            width={500}
            height={"auto"}
            placeholder="blur"
            className="2xl:w-[500px] lg:block hidden lg:w-[300px]"
          />
        </a.div>
      </a.div>
    </div>
  );
};

export default GradientBackground;

//

// components/AuroraGradient.js
// import { useRef, useEffect } from "react";
// import * as THREE from "three";

// const AuroraGradient = () => {
//   const containerRef = useRef();

//   useEffect(() => {
//     const container = containerRef.current;
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     camera.position.z = 1;

//     const renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     container.appendChild(renderer.domElement);

//     const uniforms = {
//       u_time: { type: "f", value: 1.0 },
//       u_mouse: { type: "v2", value: new THREE.Vector2() },
//       u_resolution: {
//         type: "v2",
//         value: new THREE.Vector2(window.innerWidth, window.innerHeight),
//       },
//     };

//     const geometry = new THREE.PlaneGeometry(2, 2);
//     const material = new THREE.ShaderMaterial({
//       uniforms: uniforms,
//       vertexShader: `
//         void main() {
//           gl_Position = vec4(position, 1.0);
//         }
//       `,
//       fragmentShader: `
//         uniform vec2 u_resolution;
//         uniform vec2 u_mouse;
//         uniform float u_time;

//         void main() {
//           vec2 st = gl_FragCoord.xy / u_resolution;
//           vec3 color1 = vec3(1.0, 0.06, 0.48); // #FF0F7B
//           vec3 color2 = vec3(0.97, 0.61, 0.16); // #F89B29

//           float pct = abs(sin(u_time * 0.1 + length(st - u_mouse * 0.5)));
//           vec3 color = mix(color1, color2, pct);

//           gl_FragColor = vec4(color, 1.0);
//         }
//       `,
//     });

//     const plane = new THREE.Mesh(geometry, material);
//     scene.add(plane);

//     function animate() {
//       uniforms.u_time.value += 0.05;
//       renderer.render(scene, camera);
//       requestAnimationFrame(animate);
//     }

//     function onMouseMove(event) {
//       uniforms.u_mouse.value.x = (event.clientX / window.innerWidth) * 2 - 1;
//       uniforms.u_mouse.value.y = -(event.clientY / window.innerHeight) * 2 + 1;
//     }

//     window.addEventListener("mousemove", onMouseMove);
//     animate();

//     return () => {
//       window.removeEventListener("mousemove", onMouseMove);
//       container.removeChild(renderer.domElement);
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="w-[25vh] h-[25vh] lg:w-[50vh] lg:h-[50%] blur-[100px] lg:blur-[250px] 2xl:blur-[500px] opacity-50"
//     />
//   );
// };

// export default AuroraGradient;
