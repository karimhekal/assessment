import React from "react";
import { products } from "../../utils/services/products";
import "./Product.scss"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from "../../components/ProductCard/ProductCard";
import PanoramicIcon from "../../svg/PanoramicIcon";
import Stars from "../../components/Stars/Stars";
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

export default class ProductPage extends React.Component {
    constructor(props) {
        super(props)
        const productId = window.location.href.split('/')[4]
        this.state = {
            selectedImage: products?.find((product) => product.id === productId)?.gallery[0],
            product: products?.find((product) => product.id === productId)
        }

    }
    componentDidMount() {
        const productId = window.location.href.split('/')[4]
        console.log(productId)
        this.state = {
            selectedImage: products?.find((product) => product.id === productId)?.gallery[0],
            product: products?.find((product) => product.id === productId)
        }

    }

    render() {

        return <div className="product_page">
            <div className="product_page_inner_container">
                {this.state.product ? <div className="product_section">
                    {/* gallery section */}
                    <div className="gallery">
                        <div className="images">
                            {this.state.product.gallery.map((image) => {
                                return <img alt={`${image}`} onClick={() => {
                                    this.setState({
                                        selectedImage: image
                                    })
                                }} src={image} width={100} />
                            })}
                        </div>
                        <div className="main_image">
                            <img alt="product_image" src={this.state.selectedImage} width={"100%"} />
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
                            {this.state.product.sizes.map((size) => {
                                return <div className="size_button">{size}</div>
                            })}
                        </div>
                        <div className="size">Colors</div>
                        <div className="sizes_container">
                            {this.state.product.colors.map((color) => {
                                return <div style={{
                                    borderRadius: "100%",
                                    backgroundColor: color,
                                    width: "28.73px",
                                    height: "28.73px",
                                }} />
                            })}
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
        </div>
    }
}