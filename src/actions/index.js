//Actions in Redux are JavaScript objects that you set up to describe any event in your application that should update your application’s state.

export const ADD_RECIPE = "ADD_RECIPE";
export const REMOVE_FROM_CALENDAR = "REMOVE_FROM_CALENDAR";

//ACTIONS CREATER
export function AddRecipe({day, recipe, meal}){
    //return a action wich is really just a object
    return {
        type: ADD_RECIPE,
        recipe,
        day,
        meal
    }
}

//action creators
export function removeFromCalendar({day, meal}){
    //return actions
    return {
        type: REMOVE_FROM_CALENDAR,
        day,
        meal
    }
}