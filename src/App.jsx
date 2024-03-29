import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import jsonData from "../frontendstarter/data.json";
import Countries from './components/Countries';
import Search from './components/Search';

// console.log(jsonData);

const africanCountries = jsonData.filter((country) => country.region === "Africa" );
const europeanCountries = jsonData.filter((country) => country.region === "Europe" );
const asianCountries = jsonData.filter((country) => country.region === "Asia" );
// console.log(africanCountries);
// console.log(europeanCountries);

function App() {
  const [currentCountries, setCurrentCountries] = useState(africanCountries);
  function updateDisplayedCountries() {
    setCurrentCountries(asianCountries);
  }
  return (
    <>
    <Header />
    <Search clickAction={updateDisplayedCountries}/>
    <Countries countryNames={currentCountries}/>
    </>
  )
}

export default App;
