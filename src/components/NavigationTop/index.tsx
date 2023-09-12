import Link from "next/link";

const NavigationTop = () => {
  return (
    <section>
      <div className="h-11 bg-gray-300 text-[11px] text-slate-950 flex flex-row justify-evenly items-center">
        <h5>WELCOME TO WOLMART STORE MESSAGE!</h5>
        <div className="flex flex-row items-center gap-4">
          <ul className="flex flex-row gap-6">
            <li>USD</li>
            <li>ENG</li>
          </ul>

          <span className="rotate-90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15"
              />
            </svg>
          </span>

          <ul className="flex flex-row items-center gap-6">
            <li>Blog</li>
            <li>Contact Us</li>
            <li>My Account</li>
            <li className="flex flex-row items-center gap-1">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </span>

              <span className="flex flex-row items-center">
                <Link href="#">Sign In</Link>
                <span className="-rotate-[64deg]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                </span>
                <Link href="#">Register</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NavigationTop;
