import React from "react"
import './Header.scss'
import MenuIcon from "../../svg/MenuIcon";
import SearchIcon from "../../svg/SearchIcon";
import CartIcon from "../../svg/CartIcon";
import ProfileIcon from "../../svg/ProfileIcon";
class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className="header">
            <div className="header_section_1">
                <MenuIcon />
                <img className="logo" src="/images/abdouLogo.png" alt="logo" width={90} height={90}/>
                <h4 >Products</h4>
                <h4 >Best Seller</h4>
                <h4 >New Arrival</h4>
                <h4  >About Us</h4>
                <h4 >Contact Us</h4>
            </div>
            <div className="header_section_2">
                <div className="icon">
                    <SearchIcon />
                </div>
                <div className="icon">
                    <CartIcon />
                </div >
                <div className="icon">
                    <ProfileIcon />
                </div>
            </div>
        </div>
    }
}
export default Header;