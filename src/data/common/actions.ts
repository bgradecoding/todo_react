import * as ActionTypes from "../../data/rootActionType";

export async function startLoading(dispatch: any) {
  dispatch({ type: ActionTypes.LOADING_START });
}

export async function endLoading(dispatch: any) {
  dispatch({ type: ActionTypes.LOADING_END });
}
