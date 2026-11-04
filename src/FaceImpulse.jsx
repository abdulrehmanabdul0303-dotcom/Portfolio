import React, { useState } from 'react';
import './FaceImpulse.css';

const circuitPaths = [
  // Cheek circuits
  {
    id: 'cheek1',
    d: 'M 550 405 L 595 405 L 620 382 L 685 382',
    color: '#56f4ff',
    duration: '2.1s',
    delay: '0s',
  },
  {
    id: 'cheek2',
    d: 'M 540 440 L 580 440 L 608 415 L 658 415',
    color: '#b46bff',
    duration: '2.6s',
    delay: '0.5s',
  },
  {
    id: 'cheek3',
    d: 'M 570 468 L 605 468 L 630 444 L 680 444',
    color: '#62eaff',
    duration: '2.3s',
    delay: '1s',
  },

  // Neck circuits
  {
    id: 'neck1',
    d: 'M 820 570 L 820 640 L 860 680 L 860 740',
    color: '#50eaff',
    duration: '2.8s',
    delay: '0.4s',
  },
  {
    id: 'neck2',
    d: 'M 865 590 L 865 650 L 910 695 L 910 790',
    color: '#cb69ff',
    duration: '3s',
    delay: '1.1s',
  },
  {
    id: 'neck3',
    d: 'M 760 610 L 780 650 L 780 720 L 820 770',
    color: '#50cfff',
    duration: '2.7s',
    delay: '0.8s',
  },
];

export default function FaceImpulse() {
  const [playing, setPlaying] = useState(true);

  return (
    <div className="face-impulse-wrapper">
      <div className={`face-impulse-stage ${playing ? 'playing' : 'paused'}`}>
        <img
          src="/Neon%20Cyberpunk%20AI%20Engineer%20Portrait.png"
          alt="Abdul Rehman cyberpunk portrait"
          className="face-impulse-image"
        />

        <svg
          className="face-impulse-svg"
          viewBox="0 0 1536 1024"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <defs>
            <filter
              id="face-electric-glow"
              x="-100%"
              y="-100%"
              width="300%"
              height="300%"
            >
              <feGaussianBlur stdDeviation="5" />
            </filter>
          </defs>

          {circuitPaths.map((path) => (
            <g key={path.id}>
              {/* Subtle permanent circuit line */}
              <path
                d={path.d}
                fill="none"
                stroke={path.color}
                strokeWidth="1.5"
                opacity="0.15"
              />

              {/* Moving electric impulse */}
              <path
                d={path.d}
                fill="none"
                stroke={path.color}
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="24 500"
                className="electric-travel"
                style={{
                  animationDuration: path.duration,
                  animationDelay: path.delay,
                }}
              />

              {/* Glowing traveling particle */}
              <circle
                r="7"
                fill={path.color}
                opacity="0.6"
                filter="url(#face-electric-glow)"
              >
                <animateMotion
                  dur={path.duration}
                  begin={path.delay}
                  repeatCount="indefinite"
                  path={path.d}
                />
              </circle>

              <circle r="2.5" fill="#ffffff">
                <animateMotion
                  dur={path.duration}
                  begin={path.delay}
                  repeatCount="indefinite"
                  path={path.d}
                />
              </circle>
            </g>
          ))}

          {/* ===================================
              ANIMATED SKILL HUD
          =================================== */}

          {/* Light-only overlays — image already has skill/brain/chart art */}
          <g className="skills-hud">
            {[
              { y: 348, label: 'AI ENGINEER', delay: '0s' },
              { y: 424, label: 'FULL STACK', delay: '.4s' },
              { y: 500, label: 'SAAS BUILDER', delay: '.8s' },
              { y: 576, label: 'AI AUTOMATION', delay: '1.2s' },
            ].map((skill) => (
              <g
                key={skill.label}
                className="skill-hud-item"
                style={{ animationDelay: skill.delay }}
              >
                {/* Traveling cyan signal along original skill card */}
                <path
                  d={`M 72 ${skill.y + 48} H 360`}
                  fill="none"
                  stroke="#57efff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="36 320"
                  className="skill-light-travel"
                  style={{ animationDelay: skill.delay }}
                />

                <circle
                  cx="86"
                  cy={skill.y + 26}
                  r="5"
                  fill="#62faff"
                  className="skill-status-light"
                  style={{ animationDelay: skill.delay }}
                />

                <circle
                  cx="352"
                  cy={skill.y + 26}
                  r="3"
                  fill="#d58aff"
                  className="skill-status-light"
                />
              </g>
            ))}
          </g>

          <g className="brain-hologram">
            <circle
              cx="1298"
              cy="318"
              r="108"
              fill="none"
              stroke="#33dfff"
              strokeWidth="3"
              opacity=".4"
              className="brain-energy-wave"
            />

            <g className="brain-ring-outer">
              <ellipse
                cx="1298"
                cy="318"
                rx="118"
                ry="92"
                fill="none"
                stroke="#64eaff"
                strokeWidth="3"
                strokeDasharray="45 25 10 40"
                opacity=".6"
              />
            </g>

            <g className="brain-ring-inner">
              <ellipse
                cx="1298"
                cy="318"
                rx="96"
                ry="74"
                fill="none"
                stroke="#d46aff"
                strokeWidth="2"
                strokeDasharray="20 35"
                opacity=".7"
              />
            </g>

            <path
              d="M 1225 318 L 1260 292 L 1298 322 L 1335 288 L 1380 318"
              fill="none"
              stroke="#76faff"
              strokeWidth="3"
              strokeDasharray="18 240"
              className="brain-neural-signal"
            />

            <circle
              cx="1298"
              cy="318"
              r="8"
              fill="#a4faff"
              className="brain-center-glow"
            />

            <g className="brain-orbit-particles">
              <circle cx="1412" cy="318" r="5" fill="#70faff" />
              <circle cx="1184" cy="318" r="4" fill="#e77aff" />
            </g>
          </g>

          <g className="chart-hologram">
            {/* Scan + flow only — bars already painted in the portrait */}
            <line
              x1="1268"
              y1="500"
              x2="1455"
              y2="500"
              stroke="#59f6ff"
              strokeWidth="2"
              opacity=".75"
              className="chart-scanning-line"
            />

            <path
              d="M 1275 585 L 1305 555 L 1335 565 L 1365 530 L 1395 545 L 1430 510"
              fill="none"
              stroke="#a5faff"
              strokeWidth="2.5"
              strokeDasharray="12 240"
              className="chart-data-flow"
            />

            {[38, 68, 50, 88, 62, 98].map((height, i) => (
              <rect
                key={i}
                x={1282 + i * 28}
                y={605 - height}
                width="14"
                height={height}
                rx="2"
                fill={i % 2 === 0 ? '#4ddfff' : '#bb65ff'}
                fillOpacity=".18"
                className="chart-bar"
                style={{
                  animationDelay: `${i * 0.17}s`,
                  transformOrigin: `${1289 + i * 28}px 605px`,
                }}
              />
            ))}
          </g>
        </svg>

        <div className="face-impulse-glow" />

        <button
          type="button"
          className="face-impulse-toggle"
          onClick={() => setPlaying((prev) => !prev)}
        >
          {playing ? 'PAUSE SIGNAL' : 'PLAY SIGNAL'}
        </button>
      </div>
    </div>
  );
}
