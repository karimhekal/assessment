import React from "react";
import { Link } from 'react-router-dom'
import './ProductCard.scss'
import HeartIcon from "../../svg/HeartIcon";
import Stars from "../Stars/Stars";
class ProductCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ...props.item
        }
    }


    render() {
        return <div className="product_card">
            <div onClick={() =>
                window.location.href = `/product/${this.state.id}`
            } >
                <div className="product_card_image">
                    <img alt="product" src={this.state.gallery[0]} />
                </div>
                <div className="product_name">{this.state.name}</div>
                <div className="product_describtion">{this.state.describtion}</div>
                <Stars stars={this.state.stars} />
                <div className="product_price">{this.state.price} EGP</div>
            </div>
            <div className="product_bottom_section">
                <button className="product_button" >ADD TO CART</button>
                <button className="heart_container">
                    <HeartIcon />
                </button>
            </div>

        </div>
    }
} export default ProductCard