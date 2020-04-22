import React from 'react';
import { connect } from 'react-redux';
import ProductPage from './ProductPage';
import { getBeersFromAPI } from '../../redux/product-reducer';

class ProductPageContainer extends React.Component {
    componentDidMount(){
        this.props.getBeersFromAPI();
    }
    render() {
        return (
            <ProductPage beers={this.props.beers} />
        )
    }

}

const mapStateToProps = (state) => {
    return {
        beers: state.productPage.beers
    }
}

export default connect(mapStateToProps, { getBeersFromAPI })(ProductPageContainer);