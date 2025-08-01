import React, { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from "@tsparticles/slim";
import { motion } from "motion/react"
import './assets/style.css';
import './index.css';
import Hero from './Hero';

function Home() {
    const [init, setInit] = useState(false);
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        })
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
      };

    const options = useMemo(
        () => ({
          background: {
            color: {
              value: "#0B1215",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#3457D5",
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 30,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "triangle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }),
        [],
      );
        
  return (
    <div className='h-[100dvh] w-[100%] overflow-hidden'>
        <motion.div
            initial={{x: -500, opacity: 0}}
            animate={{x: 0, opacity: 1}}
        >
            <Hero />
        </motion.div>
        <Particles
            id="tsparticles"
            className="absolute top-0 left-0 w-full h-full -z-10"
            particlesLoaded={particlesLoaded}
            options={options}
        />
    </div>
  )
}

export default Home