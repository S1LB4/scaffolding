import { interStarWars } from "./data";
export type Observed = ({ render:() => void} & HTMLElement);

export type AppState ={
    people: interStarWars[]
}

export enum StarAction {
    "GET" = "GET",
}

export interface GetStarAction{
    action:StarAction.GET,
    payload: interStarWars[]
}

export type Actions = GetStarAction;