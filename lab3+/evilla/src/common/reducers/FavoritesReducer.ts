import { Reducer } from "react";
import { FavoritesActions } from "../enums/FavoritesActions";
import { IVillaInfo } from "../interfaces/IVillaInfo";

export interface FavoritesAction {
    type: FavoritesActions;
    payload?: any;
}

export const FavoritesReducer: Reducer<IVillaInfo[] | undefined, FavoritesAction> = (state, action) => {
    switch (action.type) {
        case FavoritesActions.SetFavorites: {
            return action.payload;
        }
        case FavoritesActions.ClearFavorites: {
            return null;
        }
        case FavoritesActions.AddFavorite: {
            if (state) {
                if (!state.some(item => item.id === action.payload.id)) {

                    return ([...state, action.payload]);

                } else {
                    return (state);
                }
            } else {
                return ([action.payload]);
            };
        }
        case FavoritesActions.RemoveFavorite: {
            if (state) {
                return state.filter(item => item.id !== action.payload);
            } else {
                return null
            }
        }
        default:
            return state;
    }
}