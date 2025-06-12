
// custom react = how react works

let root = document.querySelector('#root');

const reactElement = {
    type:'a',
    attributes:{
        href :'https://google.com',
        target: '_blank'
    },
    childrenElement : 'Click me to visit google'
}

// custom render Just like of react 

function customrender(re,r) {
    const domEle = document.createElement(re.type);  // Making anchor tag
    domEle.innerText = re.childrenElement;           // Putting some text inside it 

    // domEle.setAttribute('href',re.attributes.herf); // Can be done this way but looping is better approach
    for (let attr in re.attributes) {
        domEle.setAttribute(attr,re.attributes[attr]);
    }
    r.appendChild(domEle);
}

customrender(reactElement,root)