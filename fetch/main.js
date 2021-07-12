fetch('https://pokeapi.co/api/v2/pokemon/150')
  .then(response => response.json())
  .then(data => console.log('Mewtwo: ', data));
