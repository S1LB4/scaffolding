import { Actions,AppState, StarAction } from "../types/store";

export const reducer = (currentAction: Actions,currentState:AppState): AppState => {
    const {action, payload} = currentAction;
    console.log(action,payload);
    switch (action) {

        case StarAction.GET:
            return{
                ...currentState,
                people:payload
            }
            default:
                return currentState;
    }
}