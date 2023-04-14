import "./components/export"
import "./screen/dashboard"
import styles from "./components/card/styles.css"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:"open"})
    }

    connectedCallback(){
        this.render()
    }

    render() {
        const window= this.ownerDocument.createElement("app-dashboard");
        this.shadowRoot?.appendChild(window)
    }
}

customElements.define("app-container", AppContainer)