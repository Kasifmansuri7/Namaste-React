import { Link } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../utils/UserContext";
import { useSelector } from "react-redux";

function Header() {
  const theme = useContext(ThemeContext);
  // subscribing to the store using a selector
  const cartItems = useSelector((store) => store?.cart?.items);
  return (
    <header className="flex justify-between mt-2 w-full ">
      <Link to="/">
        <div className="w-15 p-2">
          <svg
            className="_8pSp-"
            viewBox="0 0 559 825"
            height="49"
            width="34"
            fill="#fc8019"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M542.92 388.542C546.805 366.526 542.355 349.598 530.881 340.76C513.621 327.466 487.698 320.236 425.954 320.236C380.271 320.236 331.225 320.286 310.268 320.275C308.322 319.894 301.285 317.604 301.02 309.112L300.734 174.289C300.727 165.779 307.531 158.857 315.943 158.839C324.369 158.825 331.204 165.723 331.211 174.226C331.211 174.226 331.421 247.414 331.441 273.424C331.441 275.936 332.892 281.8 338.549 283.328C375.43 293.267 561.865 285.999 558.967 251.804C543.147 109.96 424.476 0 280.394 0C235.021 0 192.065 10.9162 154.026 30.2754C62.9934 77.5955 -1.65904 173.107 0.0324268 283.43C1.23215 361.622 52.2203 500.605 83.434 521.234C97.8202 530.749 116.765 527.228 201.484 527.228C239.903 527.228 275.679 527.355 293.26 527.436C295.087 527.782 304.671 530.001 304.671 538.907L304.894 641.393C304.915 649.907 298.104 656.826 289.678 656.829C281.266 656.843 274.434 649.953 274.42 641.446C274.42 641.446 275.17 600.322 275.17 584.985C275.17 581.435 275.424 575.339 265.178 570.727C231.432 555.553 121.849 564.712 115.701 581.457C113.347 587.899 125.599 612.801 144.459 644.731C170.102 685.624 211.889 747.245 245.601 792.625C261.047 813.417 268.77 823.813 280.467 824.101C292.165 824.389 300.514 814.236 317.213 793.928C383.012 713.909 516.552 537.663 542.92 388.542Z"
              fill="url(#paint0_linear_19447_66107)"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_19447_66107"
                x1="445.629"
                y1="63.8626"
                x2="160.773"
                y2="537.598"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF993A"></stop>
                <stop offset="1" stopColor="#F15700"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </Link>
      <div className="flex items-center h-16 ">
        <input
          type="text"
          className="p-2 m-4 w-80 border rounded-md shadow-md"
          placeholder="Search the nearby restaurant.."
        />
        <button className="text-white border p-2 bg-amber-500 rounded-md hover:bg-amber-400 shadow-md">
          Search
        </button>
      </div>
      <div className="flex">
        <Link to="/contact-us">
          <h3 className="m-2 text-amber-500 ">Contact Us</h3>
        </Link>
        <Link to="/about">
          <h3 className="m-2  text-amber-500">About</h3>
        </Link>
        <Link to="/grocery">
          <h3 className="m-2  text-amber-500">Grocery</h3>
        </Link>
        <Link to="/cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6 inline-block  text-amber-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
          <h3 className="my-2 inline-block  text-amber-500">
            ({cartItems.length})
          </h3>
        </Link>
      </div>
    </header>
  );
}
export default Header;
