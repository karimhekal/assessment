import React, { Component } from 'react';
import './Loader.scss'; // Import the CSS file

export default class Loader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingProgress: 0,
        };
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            if (this.state.loadingProgress < 100) {
                this.setState({
                    loadingProgress: this.state.loadingProgress + 1,
                });
            }
        }, 10);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <div className='loader_page'>
                <img loading="lazy" src={require(`../../../public/images/${"logo".toString()}.png`)} width={300} />

                <div className="loader-container">
                    <div
                        className="loader-bar"
                        style={{ width: `${this.state.loadingProgress}%` }}
                    ></div>
                </div>
            </div>
        );
    }
}
