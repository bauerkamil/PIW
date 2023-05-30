import { Dispatch, PropsWithChildren, createContext, useReducer } from "react";
import { IVillaInfo } from "../interfaces/IVillaInfo";
import { FavoritesAction, FavoritesReducer } from "../reducers/FavoritesReducer";


interface InitialFavoritesState {
    state?: IVillaInfo[],
    dispatch: Dispatch<FavoritesAction>
}

export const FavoritesContext = createContext<InitialFavoritesState>({
    dispatch: () => null
});

export const FavoritesProvider = ({ children }: PropsWithChildren) => {
    const [state, dispatch] = useReducer(FavoritesReducer, undefined);

    return (
        <FavoritesContext.Provider value={{ state, dispatch }}>
            {children}
        </FavoritesContext.Provider>
    );
}