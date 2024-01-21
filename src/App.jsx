import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import jsonData from "../frontendstarter/data.json";
import Country from './components/Country';

console.log(jsonData);

function App() {
  return (
    <>
    <Header />
    <Country countryName={jsonData[29]}/>
    </>
  )
}

export default App
