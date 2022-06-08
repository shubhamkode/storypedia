import React from "react";

interface IFooterProps {}

const Footer: React.FC<IFooterProps> = (): JSX.Element => {
  return (
    <footer className="my-[100px] relative">
      <div className="px-4 pt-16 pb-8 mx-auto max-w-screen sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <strong className="block text-xl font-medium text-center text-white sm:text-3xl">
            Want us to Email you with the latest stories..
          </strong>
          <form className="mt-6">
            <div className="relative max-w-lg">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                className="w-full p-4 pr-16 text-sm font-medium bg-white border-none rounded-full"
                placeholder="john@doe.com"
              />
              <button className="absolute p-3 text-xs font-bold tracking-wide text-white uppercase transition -translate-y-1 bg-blue-600 rounded-full top-1/4 right-1.5 hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-16 lg:grid-cols-2 lg:gap-32">
          <div className="max-w-sm mx-auto lg:max-w-none">
            <span className="block w-32 h-10 mx-auto bg-gray-700 rounded-lg lg:ml-0"></span>
            <p className="mt-4 text-center text-white lg:text-left lg:text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
              quisquam velit debitis possimus natus blanditiis tenetur
              voluptatum, quas itaque qui.
            </p>
            <div className="flex justify-center gap-4 mt-6 text-gray-300 lg:justify-start">
              <a
                href=""
                className="transition hover:opacity-75"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">Facebook</span>

                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
            <div>
              <strong className="text-sm font-bold tracking-wide text-white uppercase">
                Services
              </strong>
            </div>
            <nav className="flex flex-col mt-6 space-y-1 text-gray-400">
                <a href="/" className="tansition hover:text-white">Latest Stories</a>
                <a href="/" className="tansition hover:text-white">Top Trending</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
