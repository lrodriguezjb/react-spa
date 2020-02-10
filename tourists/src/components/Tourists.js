import React, { Component } from 'react';
import TouristItem from './TouristItem'
import PropTypes from 'prop-types';

class Tourists extends Component {
    render() {
        return this.props.tourists.map((tourist) => (
            <TouristItem key={tourist.id} tourist={tourist} markBooked={this.props.markBooked} delTourist={this.props.delTourist}/>
        ));
    }
}

//Proptypes
Tourists.propTypes ={
    tourists: PropTypes.array.isRequired,
    markBooked: PropTypes.func.isRequired,
    delTourist: PropTypes.func.isRequired
}



export default Tourists;
