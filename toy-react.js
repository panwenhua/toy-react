class ElementWrapper {
    constructor(type) {
        this.root = document.createElement(type);

    }
    setAttribute(name, value) {
        this.root.setAttribute(name, value);
    }
    appendChild(component) {
        this.root.appendChild(component.root);
    }
}
class TextWrapper {
    constructor(type) {
        this.root = document.createTextNode(type);
    }
}
class Component {
    constructor() {
        this.props = Object.create(null);
        this.children = [];
        this._root = null;
    }
    setAttribute(name, value) {
        this.props[name] = value;
    }
    appendChild(component) {
        this.children.push(component);
    }
    get root() {
        if (!this._root) {
            this._root = this.render().root;
        }
        return this._root;
    }
}


function createElement(type, attributes, ...children) {
    let e;
    if (typeof type === 'string') {
        e = document.createElement(type);
    } else {
        e = new type;
    }
    for (const p in attributes) {
        e.setAttribute(p, attributes[p]);
    }
    for (const child of children) {
        if (typeof child === 'string') {
            e.appendChild(new TextWrapper(child));
        } else {
            e.appendChild(child);
        }
    }
    return e;
}

function render(component, el) {

}

module.exports = {
    createElement,
    Component,
    render
}