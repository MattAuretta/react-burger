import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    lettuce: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.4
}

class BurgerBuilder extends Component {
    // constructor(props){
    //     super(props);
    //     this.state={...}
    // }
    state = {
        ingredients: {
            lettuce: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        // Store the old count of an ingredient in a const
        const oldCount = this.state.ingredients[type];
        // Create a new const that stores the oldCount + 1
        const updatedCount = oldCount + 1;
        // Save the ingredients state in a const so we do not mutate state directly
        const updatedIngredients = {
            ...this.state.ingredients
        };
        // Change the updated count in the const storing the updated state
        updatedIngredients[type] = updatedCount;
        // Store the amount of the specific ingredients cost
        const priceAddition = INGREDIENT_PRICES[type];
        // Store the old total in a const
        const oldTotal = this.state.totalPrice;
        // Create a new const that stores the oldTotal + the cost of the added ingredient
        const newTotal = oldTotal + priceAddition;
        // Set the state to hold the new ingredient count and total
        this.setState({
            totalPrice: newTotal,
            ingredients: updatedIngredients
        });
    };

    removeIngredientHandler = (type) => {
        // Store the old count of an ingredient in a const
        const oldCount = this.state.ingredients[type];
        // Check if there are no ingredients to remove and break out of the function if so
        if(oldCount <= 0){
            return;
        }
        // Create a new const that stores the oldCount - 1
        const updatedCount = oldCount - 1;
        // Save the ingredients state in a const so we do not mutate state directly
        const updatedIngredients = {
            ...this.state.ingredients
        };
        // Change the updated count in the const storing the updated state
        updatedIngredients[type] = updatedCount;
        // Store the amount of the specific ingredients cost
        const priceDeduction = INGREDIENT_PRICES[type];
        // Store the old total in a const
        const oldTotal = this.state.totalPrice;
        // Create a new const that stores the oldTotal + the cost of the added ingredient
        const newTotal = oldTotal - priceDeduction;
        // Set the state to hold the new ingredient count and total
        this.setState({
            totalPrice: newTotal,
            ingredients: updatedIngredients
        });
    };

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
            // {lettuce: true, meat: false, ...}
        }
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                ingredientAdded={this.addIngredientHandler}
                ingredientRemoved={this.removeIngredientHandler}
                disabled={disabledInfo}
                price={this.state.totalPrice} />
            </Aux>
        );
    }
}

export default BurgerBuilder