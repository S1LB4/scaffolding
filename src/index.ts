import {traer_api} from "./components/data"
import "./components/export";
import MyCard, { Attribute } from "./components/export/SWAPI/swapi";



class AppContainer extends HTMLElement {
    StarwarsList: MyCard [] = [];

    constructor() {
        super();
        this.attachShadow({mode: "open" })
    }

    async connectedCallback() {

        const dataStarwars = await traer_api()
            console.log(traer_api);

            dataStarwars?.forEach((data: any) => {
                const StarwarsCard = this.ownerDocument.createElement("my-card") as MyCard;
                StarwarsCard.setAttribute(Attribute.name, data.name);
                StarwarsCard.setAttribute(Attribute.height, data.height);
                StarwarsCard.setAttribute(Attribute.mass, data.mass);
                StarwarsCard.setAttribute(Attribute.hair_color, data.hair_color);
                StarwarsCard.setAttribute(Attribute.skin_color, data.skin_color);
                StarwarsCard.setAttribute(Attribute.eye_color, data.eye_color);
                StarwarsCard.setAttribute(Attribute.birth_year, data.birth_year);
                StarwarsCard.setAttribute(Attribute.gender, data.gender);
                StarwarsCard.setAttribute(Attribute.homeworld, data.homeworld);
                this.StarwarsList.push(StarwarsCard);
            });
            this.render(this.StarwarsList);

        };

        render(StarwarsList:any) {
            const StarwarsCard = this.ownerDocument.createElement("section")
            StarwarsCard.className="StarSection"
            this.StarwarsList.forEach((s)=>{
                StarwarsCard.appendChild(s)
            });
            this.shadowRoot?.appendChild(StarwarsCard);
        }

    }






customElements.define("app-container", AppContainer);