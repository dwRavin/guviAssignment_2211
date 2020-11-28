try {
    var request = new XMLHttpRequest();

    request.open('GET', 'https://restcountries.eu/rest/v2/all', true);

    request.send();

    request.onload = function () {
        var data = JSON.parse(this.response)
        console.log('All countries from Asia continent using Filter function :');

        var asiaCountryFilter = data.filter((country) => {
            return country.region === 'Asia';
        })

        console.log(asiaCountryFilter);
        console.log('');

        var populationFilter = data.filter((country) => {
            return country.population < 200000;
        })
        console.log('All countries with population less than 2 lac using Filter function :');
        console.log(populationFilter);

        console.log('');
        console.log('Print name, capital, flag using forEach function :');

        var arr = [];
        data.forEach(element => {
            var js = {};
            js['Name'] = element.name;
            js['Capital'] = element.capital;
            js['flag'] = element.flag;
            arr.push(js);
        });
        console.log(arr);

        console.log('');
        console.log('Print total population of countries using reduce function :');
        var totalPopulation = data.reduce((total, country) => {
            return total += country.population;
        }, 0)
        console.log(totalPopulation);

        console.log('');
        console.log('Print total population of countries in Asia using reduce & filter function :');
        var totalAsiaPopulation = asiaCountryFilter.reduce((total, country) => {
            return total += country.population;
        }, 0)
        console.log(totalAsiaPopulation);

        console.log('');

        var USDCountriesFilter = data.filter((country) => {
            return country.currencies.find((cur) => { return cur.code === 'USD' });
        })
        console.log('All countries with currency as USD :');
        console.log(USDCountriesFilter);

    }
} catch (error) {
    console.log('error',error.name);
}
