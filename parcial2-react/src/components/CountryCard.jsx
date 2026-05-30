const CountryCard = ({ country }) => {
    return (
        <div className="card">
            <img src={country.flags.png} alt={country.name.common} className="flag"/>
            <h3>{country.name.common}</h3>
            <p>Capital: {country.capital?.[0]}</p>
            <p>Población: {country.population}</p>
        </div>
    );
};

export default CountryCard;