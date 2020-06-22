/**
 * Represents a user defined 
 */
export default abstract class FoodBase {

    /**
     * Gets or sets the name of this food base
     */
    public name = "";

    /**
     * Gets the amount of carbs in this food base
     */
    public abstract getCarbs() : number;
}