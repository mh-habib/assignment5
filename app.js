fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))

const displayCountries = countries => {
    //console.log(countries);
    const countriesContainer = document.getElementById('countries-container');
    //Using foreach loop//
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';

        const countryInfo = `
            <h3 class="country-name">${country.name}</h3>
            <p class="capital-name">${country.capital}</p>
            <button onclick="displayCountryDetail('${country.name}')">DETAILS</button>
        `;
        countryDiv.innerHTML = countryInfo;
        countriesContainer.appendChild(countryDiv);
    });

    // //Using For loop//
    // for (let i = 0; i < countries.length; i++) {
    //     const country = countries[i];
    //     //console.log(country.name);
    //     const countryDiv = document.createElement('div');
    //     countryDiv.className = 'country';

    //     // const countryName = document.createElement('h3');
    //     // countryName.innerText = country.name;
    //     // countryDiv.appendChild(countryName);

    //     // const countryCapital = document.createElement('p');
    //     // countryCapital.innerText = country.capital;            
    //     // countryDiv.appendChild(countryCapital); 
    //     const countryInfo = `
    //         <h3 class="country-name">${country.name}</h3>
    //         <p class="capital-name">${country.capital}</p>
    //     `;
    //     countryDiv.innerHTML = countryInfo;
    //     countriesContainer.appendChild(countryDiv);     
    // }
}

const displayCountryDetail = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    //console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => renderCountryInfo(data[0]));
}

const renderCountryInfo = country =>{
    const countryDiv = document.getElementById('country-details');
    countryDiv.innerHTML = `
    <h1>${country.name}</h1>
    <p>${country.area}</p>
    <img src='${country.flag}'>
    `
}
