export default class PC extends HTMLElement{

constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    async connectedCallback() {
        this.render()
    }

        render() {
            if (this.shadowRoot) this.shadowRoot.innerHTML = ``

            //Este es el product form
             const container = this.ownerDocument.createElement("section")
             container.className = "Container"

            const ProductForm = this.ownerDocument.createElement("h3")
            ProductForm.className = "Product"




            //Este es el Name
             const containername = this.ownerDocument.createElement("section")
             containername.className = "Name"

             const Name = this.ownerDocument.createElement("h4")
             Name.className = "NameName"

             const NameInput = this.ownerDocument.createElement("input")
             NameInput.type = "text2"



            //Este es el Price

             const containerprice = this.ownerDocument.createElement("section")
             containerprice.className = "Price"

             const Price = this.ownerDocument.createElement("h4")
             Price.className = "PricePrice"

             const PriceInput = this.ownerDocument.createElement("input")
             PriceInput.type = "text3"

            //Este es el Button Send
             const containerbtn = this.ownerDocument.createElement("section")
             containerbtn.className = "button"

        }
    }

customElements.define("my-card", PC);

