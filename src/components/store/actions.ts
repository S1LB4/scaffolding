import traer_api from "../services/data";
import { GetStarWarsAction,StarWarsAction } from "../types/store";

export const getCharacter = async (): Promise<GetStarWarsAction> => {
    const war = await traer_api();
    return{
        action: StarWarsAction.GET,
        payload: war
    }
}
