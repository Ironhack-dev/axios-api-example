window.onload = function () {
  const promises = get100();
  Promise.all(promises)
    .then((values) => {
      const data = values.map(pokemon => pokemon.base_experience);
      const labels = values.map(pokemon => pokemon.forms[0].name);
      printChart(labels, data);
    });
};


const get100 = () => {
  const pokeApi = new PokeApi('https://pokeapi.co/api/v2/pokemon/');
  const promisesArray = [];
  for (let i = 1; i <= 10; i++) {
    promisesArray.push(pokeApi.getPokemon(i).then(res => res.data));
  }
  return promisesArray;
};

const printChart = (labels, data) => {
  const ctx = document.getElementById('myChart').getContext('2d');

  const chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: 'Pokemon experience',
        backgroundColor: 'blue',
        data,
      }],
    },
  });
};
