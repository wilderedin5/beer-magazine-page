import { connect } from 'react-redux';
import Cart from './Cart';
import { deleteItemFromCart } from '../../redux/product-reducer';

const mapStateToProps = (state) => {
    return {
        cart: state.productPage.cart
    }
}

export default connect(mapStateToProps,{deleteItemFromCart})(Cart);