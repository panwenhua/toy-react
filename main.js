import { createElement, render, Component } from './toy-react'

class MyComponent extends Component {
    constructor() {

    }
    setAttribute(name, value) {

    }
    appendChild() {

    }
}


render((<MyComponent id='a' class="abc">
    <span>123</span>
    <p>12223</p>
    <p>12223</p>
    <p>12223</p>
</MyComponent>), document.getElementById('root'));
