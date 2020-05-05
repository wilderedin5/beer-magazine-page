import { connect } from "react-redux"
import Shares from "./Shares";

const mapStateToProps = (state) => {
    return {
        shares: state.shares.shares
    }
}

export default connect(mapStateToProps,{})(Shares);