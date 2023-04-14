import styles from "./swapi.css"

export enum Attribute {
    "name" = "name",
    "height" = "height",
    "mass" = "mass",
    "hair_color" = "hair_color",
    "skin_color" = "skin_color",
    "eye_color" = "eye_color",
    "birth_year" = "birth_year",
    "gender" = "gender",
    "homeworld" = "homeworld"
}

class MyCard extends HTMLElement {
    name?: string;
    height?: string;
    mass?: string;
    hair_color?: string;
    skin_color?: string;
    eye_color?: string;
    birth_year?: string;
    gender?: string;
    homeworld?: string;


    static get observedAttributes() {
        const attrs: Record<Attribute, null> = {
            name: null,
            height: null,
            mass: null,
            hair_color: null,
            skin_color: null,
            eye_color: null,
            birth_year: null,
            gender: null,
            homeworld: null
        };
        return Object.keys(attrs);
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(
        propName: Attribute,
        _: string | undefined,
        newValue: string | undefined
        ) {
            switch (propName) {

                default:
                this[propName] = newValue;
                break;
            }

            this.render();
        }

        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = ``

                const css = this.ownerDocument.createElement("style");
                css.innerHTML=styles;
                this.shadowRoot?.appendChild(css);

                this.shadowRoot.innerHTML += `
                <section class="card">
                <h1>Name: ${this.name}</h1>
                <h1>Height: ${this.height}cm</h1>
                <h1>Mass: ${this.mass}kg</h1>
                <h1>Hair color: ${this.hair_color}</h1>
                <h1>Skin color: ${this.skin_color}</h1>
                <h1>Eye color: ${this.eye_color}</h1>
                <h1>Birth year: ${this.birth_year}</h1>
                <h1>Gender: ${this.gender}</h1>
                </section>
                `;
            }
        }
    }

customElements.define("my-card", MyCard);
export default MyCard;
