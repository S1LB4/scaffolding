import MyCard, {Attribute} from "./components/export/SWAPI/swapi";
import { getCharacter } from "../store/actions";
import { addObserved,appState,dispatch } from "../store/index";

class Dashboard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:"open"})
        addObserved(this)
    }
    async connectedCallback(){
        const action = await getCharacter();
        dispatch(action)
    }

    render(){
        appState.character.forEach((data:any) => {
            const StarWarsCard = this.ownerDocument.createElement("my-card") as MyCard;
            StarWarsCard.setAttribute(Attribute.name, data.name);
            StarWarsCard.setAttribute(Attribute.gender, data.gender);
            this.shadowRoot?.appendChild(StarWarsCard)
        })
    }
}

customElements.define("app-dashboard", Dashboard)