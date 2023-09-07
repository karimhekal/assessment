import React from "react"
import './Header.scss'
import MenuIcon from "../../svg/MenuIcon";
import SearchIcon from "../../svg/SearchIcon";
import CartIcon from "../../svg/CartIcon";
import ProfileIcon from "../../svg/ProfileIcon";
import CartContext from "../../store/cart-context";
import DeleteIcon from "../../svg/DeleteIcon";
class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showCart: false
        }
    }
    toggleCart() {
        this.setState({
            showCart: !this.state.showCart
        })
    }
    render() {
        return <CartContext.Consumer>
            {(ctx) => {
                return <div className="header">

                    <div className="header_section_1">
                        <MenuIcon />
                        <img loading="lazy" className="logo" src={require(`../../../public/images/${"logo".toString()}.png`)} alt="Logos" />
                        <h4>Products</h4>
                        <h4>Best Seller</h4>
                        <h4>New Arrival</h4>
                        <h4>About Us</h4>
                        <h4>Contact Us</h4>
                    </div>
                    <div className="header_section_2">
                        <div className="icon">
                            <SearchIcon />
                        </div>
                        {this.state.showCart ? <div onClick={this.toggleCart.bind(this)} className="backdrop" /> : null}
                        {this.state.showCart ? <div className="cart">
                            <div className="mycart_title">
                                <div>MY CART</div>
                                <div className="x" onClick={this.toggleCart.bind(this)}>X</div>
                            </div>
                            <div className="scrollable">
                                {ctx.items.map((item) => {
                                    return <div className="cart_item_container">
                                        <div className="cart_item">
                                            <img alt="item" loading="lazy" className="item_image" src={require(`../../../public/images/gallery/${item.gallery[0]}.png`)} width={50} height={50} />
                                            <div className="item_details">
                                                <div>
                                                    <div>{item.name}</div>
                                                    <div className="size_text">Size: {item.size}</div>
                                                    <div className="size_text">Color: <div style={{
                                                        width: "20px",
                                                        height: "20px",
                                                        borderRadius: "100%",
                                                        backgroundColor: item.color
                                                    }}></div></div>
                                                </div>
                                                <div className="price_container" >{item.amount} x {item.price} = <div className="price_text"> {item.amount * item.price} EGP</div></div>
                                            </div>
                                        </div>
                                        <div onClick={ctx.removeItem.bind(this, item.id)} className="delete_item"><DeleteIcon /></div>
                                    </div>
                                })}
                            </div>
                            <div className="sub_total"><div>Sub Total:</div> <div className="sub_total_number">{ctx.totalAmount} EGP</div></div>
                        </div> : null}
                        <div className="icon" onClick={() => this.toggleCart()} >
                            <div >
                                <CartIcon /></div>
                            <div className="cart_number">{ctx.items.length}</div>
                        </div>
                        <div className="icon">
                            <ProfileIcon />
                        </div>
                    </div>
                </div>
            }}</CartContext.Consumer>
    }
}
export default Header;