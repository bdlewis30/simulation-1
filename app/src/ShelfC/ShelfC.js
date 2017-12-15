import React, { Component } from 'react';


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
                
            </div>
        );
    }
}