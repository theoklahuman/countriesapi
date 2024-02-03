import Country from "./Country"

function Countries({ countryNames }) {
    return (
        <>
        {countryNames.map((names) => <Country key={names.name} countryName={names} />)}
        </>
    )
}

export default Countries;