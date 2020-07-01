import React, {Component} from "react";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

class Loading extends Component {

    render() {

        return (
            <div>
                <Backdrop style={
                        {zIndex: 10}
                    }
                    open={
                        this.props.open
                }>
                    <CircularProgress color="primary"/>
                </Backdrop>
            </div>

        );
    }
}

export default Loading

// import Loading from '../../components/Loading/index'
// {this.props.restaurants[0] ? "" : <Loading open={true} />}
