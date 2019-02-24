import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    // Extracts keys from an object (ingredients in BurgerBuilder state) and transforms the values into an array
    const transformedIngredients = Object.keys(props.ingredients)
    //Map over each ingredient as a string value
    .map(igKey => {
        // Returns an array with a length equal to the ingredient's state value
        // [...Array(3)] would return an array with 3 undefined spaces
        // We use props.ingredients[igKey] to get the specific number for said ingredient
        return [...Array(props.ingredients[igKey])]
        // Map the undefined values array
        // We use an underscore since the value doesn't matter, but we do want the index
        .map((_, index) => {
            return <BurgerIngredient key={igKey + index} type={igKey} />;
        });
    });
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;