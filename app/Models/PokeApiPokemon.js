export class PokeApiPokemon {
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.nickName = data.nickName
        this.img = data.img || data.sprites.other.dream_world.front_default
        this.weight = data.weight
        this.height = data.height
        this.types = data.types
        this.user = data.user
    }
    get Template() {
        return `
        <div>
        <img src="${this.img}">
        <div>
            ${this.Button}
         `
    }
    get MyTemplate() {
        return `
        <div class="col-6">
        <div>
        <img class="img-fluid" src="${this.img}" onclick="app.myPokemonsController.selectPokemon('${this.id}')">
        </div>
        </div>
        `
    }
    get Button(){
        let out = ""
        
        if(this.user) {
           out =  `
         <button class="btn btn-success" onclick="app.myPokemonsController.removePokemon()"> Remove Pokemon </button>
            `
        } else {
          out =  `
            <button class="btn btn-success" onclick="app.myPokemonsController.catchPokemon()"> Catch Pokemon! </button>
            `
        }

        return out
    }
}