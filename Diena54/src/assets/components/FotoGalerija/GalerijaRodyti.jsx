import React from "react";

const GalerijaRodyti = (props) => {
  const next = (pokytis) => {
    props.nextFoto(pokytis);
  };
  return (
    <div>
      <button className="right" onClick={() => next(-1)}>
        <svg
          width="41"
          height="39"
          viewBox="0 0 41 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="20"
            cy="19.1667"
            rx="20"
            ry="19.1667"
            transform="matrix(-1 0 0 1 40.9851 0)"
            fill="#F4BF03"
          />
          <g clipPath="url(#clip0_0_1)">
            <path
              d="M23.4851 12.75L17.2351 19L23.4851 25.25"
              stroke="#252525"
              strokeOpacity="0.8"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_0_1">
              <rect
                width="20"
                height="20"
                fill="white"
                transform="matrix(-1 0 0 1 30.9851 9)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
      <img src={props.curentFoto} alt="" />
      <button className="left" onClick={() => next(1)}>
        <svg
          width="41"
          height="39"
          viewBox="0 0 41 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="20.015"
            cy="19.1667"
            rx="20"
            ry="19.1667"
            fill="#F4BF03"
          />
          <g clipPath="url(#clip0_0_1)">
            <path
              d="M17.515 12.75L23.765 19L17.515 25.25"
              stroke="#252525"
              strokeOpacity="0.8"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_0_1">
              <rect
                width="20"
                height="20"
                fill="white"
                transform="translate(10.015 9)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
};

export default GalerijaRodyti;
