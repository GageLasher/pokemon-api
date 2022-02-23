import { MyPokemonsController } from "./Controllers/myPokemonsController.js";
import { PokemonController } from "./Controllers/PokemonsController.js";

class App {
  pokemonsController = new PokemonController()
  myPokemonsController = new MyPokemonsController()
}

window["app"] = new App();
