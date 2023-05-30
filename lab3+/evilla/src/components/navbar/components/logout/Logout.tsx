import { useContext } from "react";
import { Button } from "@chakra-ui/react";
import { UserActions } from "../../../../common/enums/UserActions";
import { UserContext } from "../../../../common/providers/UserProvider";
import { FavoritesContext } from "../../../../common/providers/FavoritesProvider";
import { FavoritesActions } from "../../../../common/enums/FavoritesActions";

export const Logout = () => {
    const { dispatch: dispatchUser } = useContext(UserContext);
    const { dispatch: dispatchFavorites } = useContext(FavoritesContext);

    const handleLogout = () => {
        dispatchUser({ type: UserActions.ClearUser });
        dispatchFavorites({ type: FavoritesActions.ClearFavorites });

    }

    return (
        <Button onClick={handleLogout}>
            Sign out
        </Button>
    );
};