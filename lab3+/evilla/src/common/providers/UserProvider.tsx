import { Dispatch, PropsWithChildren, createContext, useReducer } from "react";
import { UserAction, UserReducer } from "../reducers/UserReducer";
import { User } from "firebase/auth";

interface InitialState {
    state?: User;
    dispatch: Dispatch<UserAction>;
}

export const UserContext = createContext<InitialState>({
    dispatch: () => null,
});

export const UserProvider = ({ children }: PropsWithChildren) => {
    const user = window.localStorage.getItem("user");
    const [state, dispatch] = useReducer(
        UserReducer,
        user ? JSON.parse(user) : null
    );

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    );
};
