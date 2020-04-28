import Header from "./Header";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart
    }
}

export default connect(mapStateToProps,{})(Header);