import React from "react";
import { products } from "../../utils/services/products";
import "./Product.scss"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from "../../components/ProductCard/ProductCard";
import PanoramicIcon from "../../svg/PanoramicIcon";
import Stars from "../../components/Stars/Stars";
import CartContext from "../../store/cart-context";
import withRouter from "../../components/WithRouter";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

class ProductPage extends React.Component {
    constructor(props) {
        super(props)
        const productId = this.props.params.id
        const product = products?.find((product) => product.id === productId)
        this.state = {
            selectedImage: product?.gallery[0],
            product,
            amount: 1,
            size: product?.sizes[0],
            color: product?.colors[0],
            id: productId
        }

    }
    init() {
        const productId = this.props.params.id
        const product = products?.find((product) => product.id === productId)
        this.setState({
            selectedImage: product.gallery[0],
            product,
            amount: 1,
            size: product.sizes[0],
            id: productId,
            color: product.colors[0]
        })
    }

    componentDidUpdate(prevProps) {
        const { id } = this.props?.params
        console.log('prevv', prevProps.params.id)

        if (prevProps.params.id !== id)
            // The id has changed, update the state and trigger a re-render
            this.init()
        console.log('updatiiing')
    }
    increment() {
        this.setState({
            ...this.state,
            amount: this.state.amount + 1
        })
    }
    decrement() {
        if (this.state.amount <= 1) { return; }

        this.setState({
            ...this.state,
            amount: this.state.amount - 1
        })
    }
    selectSize(size) {
        console.log('working', size)
        this.setState({
            ...this.state,
            size: size
        })

    }
    selectColor(color) {
        this.setState({
            ...this.state,
            color: color
        })
    }
    render() {

        return <div className="product_page">
            <div className="product_page_inner_container">
                {this.state.product ? <div className="product_section">
                    {/* gallery section */}
                    <div className="gallery">
                        <div className="images">

                            {this.state.product.gallery.map((image, index) => {
                                return <><img key={index} alt={`${image}`} onClick={() => {
                                    this.setState({
                                        selectedImage: image
                                    })
                                }} src={require(`../../../public/images/gallery/${image}.png`)} width={100} />
                                </>
                            })}
                        </div>
                        <div className="main_image">
                            <img alt="product_image" src={require(`../../../public/images/gallery/${this.state.selectedImage}.png`)} width={"100%"} />
                        </div>
                    </div>

                    {/* details section */}
                    <div className="details">

                        <div className="product_name_container">
                            <div>
                                <div className="product_name">{this.state.product.name}</div>
                                <Stars stars={this.state.product.stars} />
                            </div>
                            <PanoramicIcon />
                        </div>


                        <div className="price_section">
                            <div className="price">{this.state.product.price} EGP</div>
                            <div className="discount">{this.state.product.discount_price || this.state.product.discount_price} EGP</div>
                        </div>
                        <div className="describtion">{this.state.product.describtion}</div>
                        <div className="size">Size</div>
                        <div className="sizes_container">
                            {this.state.product.sizes.map((size, index) => {
                                return <div onClick={this.selectSize.bind(this, size)} key={index} style={{
                                    borderColor: this.state.size === size ? "red" : 'gray'
                                }} className="size_button">{size}</div>
                            })}
                        </div>
                        <div className="size">Colors</div>
                        <div className="colors_container">
                            {/* product colors */}
                            {this.state.product.colors.map((color, index) => {
                                return <div className="product_color" onClick={this.selectColor.bind(this, color)} key={index} style={{
                                    backgroundColor: color,
                                    borderColor: this.state.color === color ? "black" : 'transparent',

                                }} />
                            })}
                        </div>
                        <div className="buy_container">
                            <div className="stepper">
                                <div onClick={this.decrement.bind(this)} >-</div>
                                <div>{this.state.amount}</div>
                                <div onClick={this.increment.bind(this)}>+</div>
                            </div>
                            <CartContext.Consumer>{(ctx) => <button onClick={ctx.addItem.bind(this, { ...this.state.product, amount: this.state.amount, size: this.state.size, color: this.state.color })} className="add_to_cart_btn">ADD TO CART</button>}</CartContext.Consumer>

                        </div>
                    </div>
                </div> : <div>
                    Sorry, This product does not exist
                </div>}



                {/* you may also like section */}
                <div className="bottom_section">
                    <h1>You May Also Like</h1>
                    <Carousel
                        responsive={responsive}
                        showDots={true}
                    >
                        {products.map((item, index) => {
                            return (
                                <div className="slider" key={index}>
                                    <ProductCard item={item} />
                                </div>
                            );
                        })}
                    </Carousel>
                </div></div>
        </div >
    }
}
export default withRouter(ProductPage)