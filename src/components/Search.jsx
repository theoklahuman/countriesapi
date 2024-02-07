import magnifyingGlass from "../assets/magnifying-glass.svg";
// import "./Search.css";

function Search({ clickAction }) {
  function clickHandler() {
    alert("Something was clicked!");
  }
  return (
    <div>
      <div className="flex justify-center space-x-4 p-1 bg-gray-700 m-4 rounded-lg">
          <img className="h-8" src={magnifyingGlass} alt="" />
          <input className="bg-gray-700" type="text" placeholder="Search for a country..." />
      </div>
      <div className="w-52 m-4 p-3 font-normal cursor-pointer bg-gray-700 border-none rounded-md">Filter by Region</div>
      <ul className="bg-gray-700 p-3 mt-1 ml-4 w-52 rounded-md border-none">
        <li className="mb-1 cursor-pointer" onClick={clickAction}>Africa</li>
        <li className="mb-1 cursor-pointer">America</li>
        <li className="mb-1 cursor-pointer" onClick={clickAction}>Asia</li>
        <li className="mb-1 cursor-pointer">Europe</li>
        <li className="mb-1 cursor-pointer">Oceania</li>
      </ul>
    </div>
  );
}

export default Search;

