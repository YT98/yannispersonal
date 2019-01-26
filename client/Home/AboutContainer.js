import {connect} from 'react-redux';
import About from './About';

const mapStateToProps = state => {
    return {
        theme: state.themeReducer
    }
}

const mapDispatchToProps = {
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (About)