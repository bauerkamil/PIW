import { useContext } from "react";
import { Button } from "@chakra-ui/react";
import { UserActions } from "../../../../common/enums/UserActions";
import { UserContext } from "../../../../common/providers/UserProvider";
import { FavoritesContext } from "../../../../common/providers/FavoritesProvider";
import { FavoritesActions } from "../../../../common/enums/FavoritesActions";
import { signOut } from "../../../../services/AuthService";
import { useNavigate } from "react-router-dom";

export const Logout = () => {

    const navigate = useNavigate();

    const { dispatch: dispatchUser } = useContext(UserContext);
    const { dispatch: dispatchFavorites } = useContext(FavoritesContext);

    const handleLogout = () => {
        signOut().then(() => {

            dispatchUser({ type: UserActions.ClearUser });
            dispatchFavorites({ type: FavoritesActions.ClearFavorites });

            navigate("/");
        });

    }

    return (
        <Button onClick={handleLogout}>
            Sign out
        </Button>
    );
};