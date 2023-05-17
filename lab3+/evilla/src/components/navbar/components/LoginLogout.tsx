import { useContext } from "react";
import { UserContext } from "../../../common/providers/UserProvider";
import { Login } from "./login/Login";
import { Logout } from "./logout/Logout";

export const LoginLogout = () => {
    const { state: user } = useContext(UserContext);

    const getLoginLogout = () => {
        if (user) {
            return (<Logout />);
        } else {
            return (<Login />);
        };
    };

    return (
        <>
            {getLoginLogout()}
        </>
    );
};