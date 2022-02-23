import { ProxyState } from "../AppState.js"
import { pokemonsService } from "../Services/PokemonsService.js"
import { Pop } from "../Utils/Pop.js"

async function getAllPokemon(){
    try {
        await pokemonsService.getAllPokemon()
    } catch (error) {
        Pop.toast(error.message, "error")
    }
}
function _drawAllPokemons(){
    let template = ''
    ProxyState.apipokemons.forEach(p => template += 
        `<li onclick="app.pokemonsController.getActivePokemon('${p.url}')">${p.name}</li>`)
    document.getElementById("pokemons").innerHTML = template
}
function _drawActivePokemon(){
   document.getElementById("active-pokemon").innerHTML = ProxyState.activePokemon.Template

}


export class PokemonController {
    constructor(){
        ProxyState.on("apipokemons", _drawAllPokemons)
        ProxyState.on("activePokemon", _drawActivePokemon)
        getAllPokemon()
        
    }
   async getActivePokemon(index){
        try {
            await pokemonsService.getActivePokemon(index)
        } catch (error) {
            Pop.toast(error.message, "error")
        }
    }
}