import "./Country.css";

function Country({ countryName }) {
  return (
    <div className="country">
      <img src={countryName.flag} alt="country flag" />
      <section>
          <div id="countryName">{countryName.name}</div>
          <div className="countryInfo">
              <div>Population: <span>{countryName.population}</span></div>
              <div>Region: <span>{countryName.region}</span></div>
              <div>Capital: <span>{countryName.capital}</span></div>
          </div>
      </section>
    </div>
  );
}

export default Country;
