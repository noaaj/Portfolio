import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions
} from "@tsparticles/engine";
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.

export function MyParticles({particleColor} : {particleColor:string}) {
    const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          repulse: {
            distance: 100,
            duration: .5,
          },
        },
      },
      particles: {
        color: {
          value: particleColor,
        },
        links: {
          color: "#ffffff",
          distance: 100,
          enable: false,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "left",
          enable: true,
          outModes: {
            default: "out",
          },
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 200,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: .5, max: 1.2 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  options.particles!.color!.value = particleColor;

  return (
    <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="particles"
      />
  )
}