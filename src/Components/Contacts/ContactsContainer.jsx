import { connect } from "react-redux";
import Contacts from "./Contacts";

const mapStateToProps = (state) => {
    return {
        address: state.contacts.address,
        phone: state.contacts.phone,
        email: state.contacts.email,
        requisites: state.contacts.requisites
    }
}

export default connect(mapStateToProps,{})(Contacts);