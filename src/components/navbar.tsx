import { Brain, RefreshCcw } from "lucide-react";
import ColorModeSwitcher from "../components/color-mode-switcher";

interface NavbarProps {
  setCardsTheme: (theme: string) => void;
}

const Navbar = ({ setCardsTheme }: NavbarProps) => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="#"
          className="flex items-center space-x-3 rtl:space-x-reverse text-black dark:text-white"
        >
          <Brain size={"3rem"} />
          <h1>Memory Game</h1>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http:www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <form className="max-w-sm mx-auto">
                <select
                  onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                    setCardsTheme(event.target.value)
                  }
                  id="cards-theme"
                  className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-white dark:border-white dark:placeholder-black dark:text-black dark:focus:ring-white dark:focus:border-white"
                >
                  <option selected value="katuri">
                    Katuri
                  </option>
                  <option value="frameworks">Frameworks</option>
                  <option value="pawpatrol">Paw Patrol</option>
                  <option value="superheros">Super Heros</option>
                  <option value="superpatrol">Super Patrol</option>
                </select>
              </form>
            </li>
            <li>
              <button
                type="button"
                className="text-black border border-black hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-white dark:text-white dark:hover:text-black dark:focus:ring-white dark:hover:bg-white"
                onClick={() => window.location.reload()}
              >
                <RefreshCcw />
                <span className="sr-only">Icon description</span>
              </button>
            </li>
            <li>
              <ColorModeSwitcher />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
