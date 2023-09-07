import React from "react";
import { useParams, useNavigate } from 'react-router-dom'
import './ProductCard.scss'
import HeartIcon from "../../svg/HeartIcon";
import Stars from "../Stars/Stars";
import CartContext from "../../store/cart-context";
import withRouter from "../WithRouter";
import PanoramicIcon from "../../svg/PanoramicIcon";
import Panoramic360Icon from "../../svg/Panoramic360Icon";



class ProductCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ...props.item
        }
    }
    getSnapshotBeforeUpdate() {
        this.setState()
    }

    render() {
        return <CartContext.Consumer>
            {(ctx) => {
                return <div key={this.props.id} className="product_card">

                    {this.state.panoramic ? <div className="panoramic_card_tag"><Panoramic360Icon /></div> : null}
                    <div>
                        <div onClick={() => {
                            this.props.navigate(`/product/${this.state.id}`)
                        }} className="product_card_image">
                            <img loading="lazy" alt="product" src={`${require(`../../../public/images/gallery/${this.state.gallery[1]}.png`)}`} />
                        </div>
                        <div className="product_card_name">{this.state.name}</div>
                        <div className="product_describtion">{this.state.describtion}</div>
                        <Stars stars={this.state.stars} />
                        <div className="product_price">{this.state.price} EGP</div>
                    </div>
                    <div className="product_bottom_section">
                        <button onClick={ctx.addItem.bind(this, { amount: 1, ...this.props.item, size: this.props.item.sizes[0], color: this.props.item.colors[0] })} className="product_button" >ADD TO CART</button>
                        <button className="heart_container">
                            <HeartIcon />
                        </button>
                    </div>

                </div>
            }}
        </CartContext.Consumer>
    }
} export default withRouter(ProductCard)