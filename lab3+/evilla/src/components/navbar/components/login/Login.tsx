import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, ModalFooter, InputGroup, InputRightElement, Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";
import React, { useContext } from "react";
import { UserActions } from "../../../../common/enums/UserActions";
import { IUser } from "../../../../common/interfaces/IUser";
import { UserContext } from "../../../../common/providers/UserProvider";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export const Login = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const { dispatch } = useContext(UserContext);

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const [show, setShow] = React.useState(false);
    const [alert, setAlert] = React.useState("");



    const users: IUser[] = [
        {
            email: "1@test.com",
            password: "test123",
            displayName: "User1",
        },
        {
            email: "2@test.com",
            password: "test123",
            displayName: "User2",
        },
        {
            email: "3@test.com",
            password: "test123",
            displayName: "User3",
        },
    ];

    const togglePwdShow = () => setShow(!show)

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handlePwdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        if (!areCredentialsValid()) {
            return;
        }
        let user = users.find((user) => user.email === email);
        if (user && user.password === password) {
            dispatch({ type: UserActions.SetUser, payload: user });
            setAlert("");
            onClose();
        }
    };

    const areCredentialsValid = () => {

        if (email === "") {
            setAlert("Email is required");
            return false;
        }

        if (password === "") {
            setAlert("Password is required");
            return false;
        }

        return true;
    };

    const onModalOpen = () => {
        setAlert("");
        onOpen();
    }

    const getAlert = () => {
        if (alert === "") {
            return (<></>);
        } else {
            return (
                <Alert status='error'>
                    <AlertIcon />
                    <AlertTitle>{alert}</AlertTitle>
                </Alert>)
        }
    }
    return (
        <>
            <Button onClick={onModalOpen}>Sign in</Button>

            <Modal
                initialFocusRef={initialRef}
                closeOnOverlayClick={false}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Sign in</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        {getAlert()}
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input ref={initialRef}
                                placeholder='Email'
                                name="email"
                                onChange={handleEmailChange} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Passowrd</FormLabel>
                            <InputGroup size='md'>
                                <Input
                                    pr='4.5rem'
                                    type={show ? 'text' : 'password'}
                                    placeholder='Enter password'
                                    name="password"
                                    onChange={handlePwdChange}
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button h='1.75rem' size='sm' variant={"ghost"} onClick={togglePwdShow}>
                                        {show ? <ViewOffIcon /> : <ViewIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button mr={3} onClick={handleLogin}>
                            Sign in
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};
