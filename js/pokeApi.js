class PokeApi {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  getPokemon(number) {
    return axios.get(`${this.baseURL}${number}`);
  }
}
