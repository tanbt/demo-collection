class CardInfo extends HTMLElement {
    constructor() {
        super();

        var shadow = this.attachShadow({ mode: 'open' });

        var div = document.createElement('div');
        div.setAttribute('class', 'wrapper');
        var style = document.createElement('style');
        shadow.appendChild(style);
        shadow.appendChild(div);
    }

    connectedCallback() {
        this.updateStyle(this);
        this.updateContent(this);
    }


    updateStyle(elem) {
        var childNodes = elem.shadowRoot.childNodes;
        for (var i = 0; i < childNodes.length; i++) {
            if (childNodes[i].nodeName === 'STYLE') {
                childNodes[i].textContent = `
                .wrapper{
                    background-color: rgba(0, 204, 204, 0.466);
                    border: 1px solid #AAA;
                    border-radius: 3px;
                    box-shadow: 2px 2px 2px #555;
                    height: 150px;
                    width: 200px;
                    margin: 20px 0;
                    padding: 10px;
                }
                .title{
                    font-size: 1.4em;
                    font-weight: 700;
                }
                .description{
                    color: #222;
                }
                `;
            }
        }
    }

    updateContent(elem) {
        var childNodes = elem.shadowRoot.childNodes;
        for (var i = 0; i < childNodes.length; i++) {
            if (childNodes[i].nodeName === 'DIV') {
                childNodes[i].innerHTML = "<div class=\"title\">" + elem.getAttribute('cname') + "</div>";
                var detail = document.createElement('div');
                detail.setAttribute('class', 'description');
                detail.innerHTML = elem.getAttribute('cdetail');
                childNodes[i].appendChild(detail);
            }
        }
    }
}

// Define the new element
customElements.define('card-info', CardInfo);


function addCard() {
    var name = document.getElementById('card_name').value;
    var detail = document.getElementById('card_detail').value;

    var container = document.querySelector('#card_container');
    container.innerHTML = container.innerHTML + '<card-info cname="' + name + '" cdetail="' + detail + '"></card-info>';
}