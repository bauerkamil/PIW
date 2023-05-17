import { useContext } from "react";
import { Button } from "@chakra-ui/react";
import { UserActions } from "../../../../common/enums/UserActions";
import { UserContext } from "../../../../common/providers/UserProvider";

export const Logout = () => {
    const { dispatch } = useContext(UserContext);

    const handleLogout = () => {
        dispatch({ type: UserActions.ClearUser });

    }

    return (
        <Button onClick={handleLogout}>
            Sign out
        </Button>
    );
};