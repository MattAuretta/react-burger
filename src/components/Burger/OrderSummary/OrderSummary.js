import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    // Could be a functional component, it's a class only for this check
    componentDidUpdate() {
        console.log('[OrderSummary] will update')
    }
    
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
        return (
            <li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
            </li>
        );
    })
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total price: {this.props.total.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );
    }
};

export default OrderSummary;