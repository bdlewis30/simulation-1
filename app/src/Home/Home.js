import React, { Component } from 'react';
import './Home.css';
import './assets/logo.png';
import {Link} from 'react-router-dom';

export default class Home extends Component {
    constructor() {
        super();

        this.state = {
            shelfA: '',
            shelfB: '',
            shelfC: '',
            shelfD: ''
        }
        this.handleChangeA = this.handleChangeA.bind(this);
        this.handleChangeB = this.handleChangeB.bind(this);
        this.handleChangeC = this.handleChangeC.bind(this);
        this.handleChangeD = this.handleChangeD.bind(this);
    }

    handleChangeA(value) {
        this.setState({
            shelfA: value
        })
    }
    handleChangeB(value) {
        this.setState({
            shelfB: value
        })
    }
    handleChangeC(value) {
        this.setState({
            shelfC: value
        })
    }
    handleChangeD(value) {
        this.setState({
            shelfD: value
        })
    }

    render() {
        return (
            <div>
                <header>SHELFIE</header>
                <section className="shelfie-container">
                    <Link to="./ShelfA"><button className="button">Shelf A</button></Link>
                    <Link to="./ShelfB"><button className="button">Shelf B</button></Link>
                    <Link to="./ShelfC"><button className="button">Shelf C</button></Link>
                    <Link to="./ShelfD"><button className="button">Shelf D</button></Link>
                </section>
            </div>
        );
    }
}