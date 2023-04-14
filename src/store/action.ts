import traer_api from "../services/data";
import { GetStarAction,StarAction } from "../types/store";

export const getpeople = async (): Promise<GetStarAction> => {
    const wars = await traer_api();
    return{
        action: StarAction.GET,
        payload: wars
    }
}