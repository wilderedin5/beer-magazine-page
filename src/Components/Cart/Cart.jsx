import React from 'react';
import Beer from '../Beer/Beer';

const Cart = (props) => {
    return (
        <div>
            {
                props.cart.map(beer => <Beer image={beer.image_url} name={beer.name} description={beer.description} tips={beer.brewers_tips}
                    contributed={beer.contributed_by} date={beer.first_brewed} abv={beer.abv} />)
            }
        </div>
    )
}

export default Cart;