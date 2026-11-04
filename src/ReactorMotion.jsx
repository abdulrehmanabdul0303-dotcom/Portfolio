import React, { useState } from 'react';
import './ReactorMotion.css';

const CX = 824;
const CY = 440;

const beams = Array.from({ length: 8 }, (_, i) => ({
  angle: i * 45,
  delay: i * 0.22,
}));

export default function ReactorMotion() {
  const [active, setActive] = useState(true);

  return (
    <div className="reactor-container">
      <div className={`reactor-stage ${active ? 'running' : 'paused'}`}>
        <img
          src="/reactor.png"
          alt="Futuristic AI energy reactor"
          className="reactor-background"
        />

        <div className="reactor-atmosphere" />

        <svg
          className="reactor-overlay"
          viewBox="0 0 1648 928"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <filter
              id="reactor-glow"
              x="-100%"
              y="-100%"
              width="300%"
              height="300%"
            >
              <feGaussianBlur stdDeviation="10" />
            </filter>

            <radialGradient id="reactor-center-glow">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="20%" stopColor="#b56bff" stopOpacity="0.75" />
              <stop offset="65%" stopColor="#146bff" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#146bff" stopOpacity="0" />
            </radialGradient>

            <linearGradient id="reactor-beam">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="45%" stopColor="#70faff" />
              <stop offset="100%" stopColor="#a85cff" />
            </linearGradient>
          </defs>

          {/* SOFT ENERGY AURA */}
          <circle
            cx={CX}
            cy={CY}
            r="180"
            fill="url(#reactor-center-glow)"
            className="reactor-core-aura"
          />

          {/* ROTATING CIRCULAR ENERGY */}
          <g className="reactor-ring reactor-ring-one">
            <circle
              cx={CX}
              cy={CY}
              r="212"
              fill="none"
              stroke="#5eefff"
              strokeWidth="5"
              strokeDasharray="80 35 16 70"
              className="reactor-neon-stroke"
            />
          </g>

          <g className="reactor-ring reactor-ring-two">
            <circle
              cx={CX}
              cy={CY}
              r="273"
              fill="none"
              stroke="#a269ff"
              strokeWidth="4"
              strokeDasharray="120 65 25 90"
              className="reactor-neon-stroke"
            />
          </g>

          <g className="reactor-ring reactor-ring-three">
            <circle
              cx={CX}
              cy={CY}
              r="316"
              fill="none"
              stroke="#49bfff"
              strokeWidth="3"
              strokeDasharray="28 100 85 50"
              opacity="0.7"
            />
          </g>

          {/* TRAVELING LIGHT ALONG 8 RADIAL PATHS */}
          {beams.map((beam, index) => (
            <g key={index} transform={`rotate(${beam.angle} ${CX} ${CY})`}>
              <path
                d={`M ${CX} ${CY} L ${CX} ${CY - 255}`}
                fill="none"
                stroke="url(#reactor-beam)"
                strokeWidth="4"
                opacity="0.38"
              />

              <circle
                r="13"
                fill="#33dfff"
                opacity="0.75"
                filter="url(#reactor-glow)"
              >
                <animateMotion
                  dur="2.1s"
                  begin={`${beam.delay}s`}
                  repeatCount="indefinite"
                  path={`M ${CX} ${CY} L ${CX} ${CY - 255}`}
                />
              </circle>

              <circle r="5" fill="#ffffff">
                <animateMotion
                  dur="2.1s"
                  begin={`${beam.delay}s`}
                  repeatCount="indefinite"
                  path={`M ${CX} ${CY} L ${CX} ${CY - 255}`}
                />
              </circle>
            </g>
          ))}

          {/* ENERGY WAVES */}
          {[0, 1, 2].map((i) => (
            <circle
              key={i}
              cx={CX}
              cy={CY}
              r="60"
              fill="none"
              stroke={i % 2 ? '#bb72ff' : '#4af5ff'}
              strokeWidth="5"
              className="reactor-wave"
              style={{ animationDelay: `${i * 1.1}s` }}
            />
          ))}

          {/* CORE ENERGY */}
          <circle
            cx={CX}
            cy={CY}
            r="40"
            fill="#a66cff"
            filter="url(#reactor-glow)"
            className="reactor-core-pulse"
          />

          <circle
            cx={CX}
            cy={CY}
            r="13"
            fill="#ffffff"
            className="reactor-core-pulse"
          />

          {/* ORBITING ENERGY PARTICLES */}
          <g className="reactor-ring reactor-particle-orbit">
            <circle cx={CX + 294} cy={CY} r="7" fill="#7afaff" />
            <circle cx={CX - 294} cy={CY} r="5" fill="#dd7aff" />
          </g>
        </svg>

        <div className="reactor-light-sweep" />

        <div className="reactor-hud">
          <span className="reactor-live-indicator" />
          <span>AI CORE ONLINE</span>
        </div>

        <button
          type="button"
          className="reactor-control"
          onClick={() => setActive((current) => !current)}
        >
          {active ? 'Pause motion' : 'Play motion'}
        </button>
      </div>
    </div>
  );
}
