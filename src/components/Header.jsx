import moonIcon from "../assets/moon-solid.svg";

function Header() {
  return (
    <header className="flex bg-gray-700 text-center p-3 justify-between">
      <p className="font-semibold">Where in the world?</p>
      <div className="flex space-x-3">
        <img src={moonIcon} alt="moon icon" />
        <p className="font-light cursor-pointer">Dark Mode</p>
      </div>
    </header>
  );
}

export default Header;
