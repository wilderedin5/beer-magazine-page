import { connect } from 'react-redux';
import Cart from './Cart';
import { deleteItemFromCart } from '../../redux/cart-reducer';

const mapStateToProps = (state) => ({
    cart: state.cart.cart
})

export default connect(mapStateToProps, { deleteItemFromCart })(Cart);