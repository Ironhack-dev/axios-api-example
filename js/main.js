const pokeApi = new PokeApi('https://pokeapi.co/api/v2/pokemon/');

document.querySelector('#get-pokemon').onclick = function () {
  // const number = document.querySelector('#pokemon-number').value;
  // pokeApi.getPokemon(number).then((res) => {
  //   document.querySelector('#pokemons-container').innerHTML = `<div class="pokemon"><img src=${res.data.sprites.front_default} /></div>`;
  // });
  get100();
};

const get100 = () => {
  for (let i = 1; i <= 101; i++) {
    pokeApi.getPokemon(i).then((res) => {
      document.querySelector('#pokemons-container').innerHTML += `<div class="pokemon"><img src=${res.data.sprites.front_default} /></div>`;
    });
  }
};
