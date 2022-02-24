import { ProxyState } from "../AppState.js"
import { PokeApiPokemon } from "../Models/PokeApiPokemon.js";
import { sandboxApi } from "./AxiosService.js";

class MyPokemonsService{
    async getMyPokemon(){
        const res = await sandboxApi.get()
        console.log(res.data, "my pokemons");
        ProxyState.myPokemon = res.data.map(p => new PokeApiPokemon(p))

    }
    async catchPokemon(){
        let pokemon = ProxyState.activePokemon
        const res = await sandboxApi.post('', pokemon)
        console.log(res.data);
        ProxyState.myPokemon = [...ProxyState.myPokemon, new PokeApiPokemon(res.data)]
    }
    selectPokemon(id){
        let selectedPokemon = ProxyState.myPokemon.find(p => p.id == id)
        ProxyState.activePokemon = selectedPokemon
    }
    async removePokemon(){
        let id = ProxyState.activePokemon.id
        const res = await sandboxApi.delete(id)
        ProxyState.activePokemon = {}
        ProxyState.myPokemon = ProxyState.myPokemon.filter(p => p.id != id)
    }
}

export const myPokemonsService = new MyPokemonsService()