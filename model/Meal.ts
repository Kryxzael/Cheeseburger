import FoodState from "./FoodState";
import FoodBase from "./FoodBase";

/**
 * Represents a collection of food items
 */
export default class Meal extends FoodBase {

    /**
     * Gets the food states of this meal
     */
    public foodStates : FoodState[] = [];

    /**
     * Gets the total amount of carbs in this meal
     */
    public getCarbs() {
        return this.foodStates.reduce((previousValue, currentValue) => previousValue + currentValue.getTotalCarbs(), 0);
    }
}
