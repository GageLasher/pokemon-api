import { ProxyState } from "../AppState.js"
import { myPokemonsService } from "../Services/MyPokemonsService.js"

function _drawMyPokemons(){
    let template = ""
    ProxyState.myPokemon.forEach(p => template += p.MyTemplate)
    document.getElementById("my-pokemon").innerHTML = template
}


export class MyPokemonsController{
    constructor(){
        ProxyState.on("myPokemon", _drawMyPokemons)
        this.getMyPokemon()
    }
    async getMyPokemon(){
        await myPokemonsService.getMyPokemon()
    }
    async catchPokemon(){
        try {
            await myPokemonsService.catchPokemon()

        } catch (error) {
            console.error(error);
        }
    }
    selectPokemon(id) {
        myPokemonsService.selectPokemon(id)
        console.log(id);
    }
}