import React from "react";
import Header from "../Header/Header";
import '../../App.scss'
export default class Layout extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
            <>
                <Header />
                <div className="layout_inner">
                    {this.props.children}
                </div></>
        </div>
    }
}