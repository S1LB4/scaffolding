import style from "./styles.css"

export enum Attribute {
    "name" = "name",
    "height" = "height",
    "mass" = "mass",

}

class Card extends HTMLElement {
    name?: string;
    height?: string;
    mass?: string;

    static get observedAttributes() {
        const attrs: Record<Attribute, null> = {
            mass: null,
            height: null,
            name: null,
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
                css.innerHTML = style;
                this.shadowRoot?.appendChild(css);

                this.shadowRoot.innerHTML += `
                <section class = "card">
                <h1>Name: ${this.name}</h1>
                <p>Height: ${this.height}</p>
                <p>Mass: ${this.mass}</p>


                </section>
                `;
            }
        }
    }

customElements.define("my-card", Card);
export default Card;
