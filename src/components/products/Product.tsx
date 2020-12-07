import React from 'react';

interface Productitem {
    item: {
        id: number
        name: string,
        price: number,
        description: string
    }
}

class Product extends React.Component<Productitem>{
    render(){
        return(
            <div className="JokeItem">
                <h3>{this.props.item.name}</h3>
                <p>Price: {this.props.item.price}€</p>
                <p>Description: {this.props.item.description}</p>
            </div>
        )
    }
}

export default Product;