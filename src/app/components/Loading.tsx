const Loading = () => {
  return (
    <>
      <section>
        <h1>Loading...</h1>
      </section>
      <div className="w-full h-full m-auto p-4 flex items-center justify-center">
        <svg
          width="200"
          height="200"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink" // C'est un attribut correct pour SVG, donc on le conserve
        >
          {/* <!-- Robot Body --> */}
          <circle cx="100" cy="100" r="50" fill="#c3c3c3" />

          {/* <!-- Robot Eyes --> */}
          <circle cx="80" cy="90" r="10" fill="#000" />
          <circle cx="120" cy="90" r="10" fill="#000" />

          {/* <!-- Robot Antenna --> */}
          <line
            x1="100"
            y1="50"
            x2="100"
            y2="70"
            stroke="#000"
            strokeWidth="5"
          />
          <circle cx="100" cy="45" r="5" fill="#f00" />

          {/* <!-- Loading Animation --> */}
          <circle
            cx="100"
            cy="100"
            r="40"
            fill="none"
            stroke="#888"
            strokeWidth="10"
            strokeDasharray="62.8 188.4"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 100 100"
              to="360 100 100"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>
    </>
  );
};

export default Loading;
