const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}

loadCountries();

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');
    // for(const country of countries){
    //     console.log(country);

    // }

    countries.forEach(country => {
       const div = document.createElement('div');
       div.classList.add('country')
       div.innerHTML = `
       <h4>${country.name.common}</h4>
       <p>${country.capital}</p>
       <button onclick="loadCountryByName('${country.name.common}')">Details</button>
       `
       countriesDiv.appendChild(div);

    });
}






//  dynamic API

const loadCountryByName = name => {
    // console.log(name);
    const url = `https://restcountries.com/v3.1/name/${name}`
    // console.log(url)

    fetch(url)
    .then(res => res.json())
    .then(data => displayCounrtyDetail(data[0]));
}


const displayCounrtyDetail = counrty => {
    // console.log(counrty);
    const countryDetailDiv = document.getElementById('country-details');
    countryDetailDiv.innerHTML = `
    <h3>${counrty.name.common}</h3>
    <p>Population: ${counrty.population}<p>
    <img style ='width: 200px' src= '${counrty.flags.png}' >
    `
    console.log(counrty.flags)
}


