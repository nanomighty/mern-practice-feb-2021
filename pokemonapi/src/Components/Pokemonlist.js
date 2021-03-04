import React, {useState} from 'react'

const Pokemonlist = () => {
    const [pokemon, setPokemon] = useState([]);

    // useEffect( () => {
    //     fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=807')
    //         .then(response => response.json())
    //         .then(response => setPokemon(response.results))
    // }, []);

    const getPokemon = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=807')
            .then(response => {
                return response.json();
            }).then(response => {
                setPokemon(response.results);
            }).catch (err=> {
                console.log("Something is wrong");
            })
    }
    
    return (
        <div>
            <button onClick={getPokemon}>Fetch Pokemon</button>
            <ul>
                { pokemon.map( (onePokemon, index) => {
                    return (
                        <div key={index}>
                            <li>{onePokemon.name}</li>
                        </div>
                        )
                    })
                }
            </ul>
        </div>

    )
}
export default Pokemonlist;
