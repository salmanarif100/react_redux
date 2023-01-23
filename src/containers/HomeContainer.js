import {connect} from 'react-redux';
import Home from "../components/Home";
import { addToCart } from '../services/Actions/actions';

const mapStateToProps=state=>({
    // content
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler: data=>dispatch(addToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps);

// export default Home;