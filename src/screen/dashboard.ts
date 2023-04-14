import Card, {Attribute} from "../components/card/card";
import { getpeople } from "../store/action";
import { addObserved,appState,dispatch } from "../store/index";

class Dashboard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:"open"})
        addObserved(this)
    }
    async connectedCallback(){
        const action = await getpeople();
        dispatch(action)
    }

    render(){
        appState.people.forEach((data:any) => {
            const StarCard = this.ownerDocument.createElement("my-card") as Card;
            StarCard.setAttribute(Attribute.name, data.name);
            StarCard.setAttribute(Attribute.height, data.height);
            StarCard.setAttribute(Attribute.mass, data.mass);
            this.shadowRoot?.appendChild(StarCard)
        })
    }
}

customElements.define("app-dashboard", Dashboard)