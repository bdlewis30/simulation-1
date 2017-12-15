//37E-1
import React, { Component } from 'react';
import './ShelfA.css';

// 37E-2
export default class Home extends Component {
    //36I
    constructor() {
        super();

        // 36C
        this.state = {
            shelfA: '',
            shelfB: '',
            shelfC: '',
            shelfD: ''
        }
        // 37C
        this.handleChangeA = this.handleChangeA.bind(this);
        this.handleChangeB = this.handleChangeB.bind(this);
        this.handleChangeC = this.handleChangeC.bind(this);
        this.handleChangeD = this.handleChangeD.bind(this);
    }
    // 36D
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
    // 36F
    render() {
        return (
            <div>
                <header>SHELFIE</header>
                <section className="shelfA-container">
                {/* 36J */} {/* 37D */}
                    <input className="" placeholder="Shelf A" onChange={(e) => this.handleChangeA(e.target.value)} />
                    <input className="" placeholder="Shelf B" onChange={(e) => this.handleChangeB(e.target.value)} />
                    <input className="" placeholder="Shelf C" onChange={(e) => this.handleChangeC(e.target.value)} />
                    <input className="" placeholder="Shelf D" onChange={(e) => this.handleChangeD(e.target.value)} />
                </section>
            </div>
        );
    }
}