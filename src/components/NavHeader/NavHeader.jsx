import React from "react"
import './NavHeader.scss'
class NavHeader extends React.Component {
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
        return <div className="nav_header">

            <div className="nav_header_1">
                <img loading="lazy" className="logo" src="/images/abdouLogo.png" alt="logo" width={90} height={90} />
                <h4>Products</h4>
                <h4>Best Seller</h4>
                <h4>New Arrival</h4>
                <h4>About Us</h4>
                <h4>Contact Us</h4>
            </div>

        </div>
    }
}
export default NavHeader;