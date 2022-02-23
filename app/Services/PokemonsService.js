import { ProxyState } from "../AppState.js";
import { PokeApiPokemon } from "../Models/PokeApiPokemon.js";
import { pokemonApi } from "./AxiosService.js"

class PokemonsService {
    async getAllPokemon() {
        const res = await pokemonApi.get()
        console.log(res.data);
        ProxyState.apipokemons = res.data.results

    }
    async getActivePokemon(index){
        const res = await axios.get(index)
        // let img = res.data.sprites.front_default
        console.log("Get Active Pokemon", res.data);
        ProxyState.activePokemon = new PokeApiPokemon(res.data)
        // ProxyState.activePokemon.img = img.replaceAll('^\'|\'$', "")
        console.log("New ActivePokemon", ProxyState.activePokemon);

    }
}

export const pokemonsService = new PokemonsService()