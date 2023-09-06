import React from "react"
import './Header.scss'
import MenuIcon from "../../svg/MenuIcon";
import SearchIcon from "../../svg/SearchIcon";
import CartIcon from "../../svg/CartIcon";
import ProfileIcon from "../../svg/ProfileIcon";
import CartContext from "../../store/cart-context";
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
                        <img className="logo" src="/images/abdouLogo.png" alt="logo" width={90} height={90} />
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
                        <div className="icon" >
                            {this.state.showCart ? <div className="cart">
                                {/* {JSON.stringify(ctx)} */}
                                {JSON.stringify(ctx.totalAmount)}
                            </div> : null}
                            <div onClick={() => this.toggleCart()}>
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