import React from 'react';
import Beer from '../Beer/Beer';
import style from './Cart.module.scss';

const Cart = (props) => {
    return (
        <div className={style.cart}>
            {
                props.cart.map(beer => <Beer image={beer.image_url} name={beer.name} description={beer.description} tips={beer.brewers_tips}
                    contributed={beer.contributed_by} date={beer.first_brewed} abv={beer.abv} deleteItemFromCart={props.deleteItemFromCart} beerId={beer.id} />)
            }
        </div>
    )
}

export default Cart;