import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function ListItem(props) {
  return <li>{props.name}</li>;
}

function PokedexList(props) {
  const listPokemon = props.values.map(pokemon =>
    <ListItem key={pokemon.number} name={pokemon.name} />
  );
  return (
    <ul>
      {listPokemon}
    </ul>
  );
}

ReactDOM.render(
  <PokedexList values={pokedex} />,
  document.querySelector('#root')
);
