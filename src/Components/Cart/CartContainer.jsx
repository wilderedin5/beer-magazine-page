import { connect } from 'react-redux';
import Cart from './Cart';


const mapStateToProps = (state) => {
    return {
        cart: state.productPage.cart
    }
}

export default connect(mapStateToProps,{})(Cart);