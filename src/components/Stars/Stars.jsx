import React from "react";
import StarIcon from "../../svg/StarIcon";

export default class Stars extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
            {Array.from(Array(this.props.stars)).map((star) => {
                return <StarIcon key={star} />
            })}
        </div>
    }
}