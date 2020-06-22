import Food from "./Food";

/**
 * Represent the state of a food type when in a meal
 */
export default class FoodState {

    /**
     * Gets the food type this food state is made from
     */
    public food : Food;

    /**
     * Gets the amount of portions this food state contains
     */
    public portionSize = 1;

    /**
     * Creates a new food state
     * @param food The food type to create a state of
     */
    constructor(food : Food) {
        this.food = food;
    }

    public getTotalCarbs() {
        return this.portionSize * this.food.carbs;
    }
}