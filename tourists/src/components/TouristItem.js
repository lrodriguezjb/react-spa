import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class TouristItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc solid',
            textDecoration: this.props.tourist.booked ? 'line-through' : 'none'
        }
    }

        render() {
            const {id, title} = this.props.tourist;
            return (
                <div style={this.getStyle()}>
                    <p>
                    <input type='checkbox' onChange={this.props.markBooked.bind(this, id)}/> {' '}
                    {title}
                    <button onClick={this.props.delTourist.bind(this, id)} style={btnStyle}>X</button>
                    </p>
                </div>
            )
        }
    }

    //Proptypes
    TouristItem.propTypes = {
        tourists: PropTypes.object.isRequired,
        markBooked: PropTypes.func.isRequired,
        delTourist: PropTypes.func.isRequired
}

    const btnStyle = {
        background: '#ff0000',
        color: '#fff',
        border: 'none',
        padding: '5px 8px',
        borderRadius: '50%',
        cursor: 'pointer',
        float: 'right'
    }
    export default TouristItem
