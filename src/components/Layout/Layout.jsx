import React from "react";
import Header from "../Header/Header";
import '../../App.scss'
export default class Layout extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
            <Header />
            <div style={{
                paddingTop: "5rem"
            }}>
                {this.props.children}
            </div>
        </div>
    }
}