import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, ModalFooter, InputGroup, InputRightElement, Alert, AlertIcon, AlertTitle, Divider, Flex, Tooltip } from "@chakra-ui/react";
import React, { useContext } from "react";
import { UserActions } from "../../../../common/enums/UserActions";
import { UserContext } from "../../../../common/providers/UserProvider";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { registerWithEmail } from "../../../../services/AuthService";
import { User } from "firebase/auth";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

export const Register = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const { dispatch } = useContext(UserContext);

    const [email, setEmail] = React.useState("");
    const [displayName, setDisplayName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [repeatPassword, setRepeatPassword] = React.useState("");


    const [show, setShow] = React.useState(false);
    const [showRepeat, setShowRepeat] = React.useState(false);

    const [alert, setAlert] = React.useState("");

    const togglePwdShow = () => setShow(!show);
    const toggleRepeatPwdShow = () => setShowRepeat(!showRepeat);


    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handleDisplayNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDisplayName(e.target.value);
    };
    const handlePwdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleRepeatPwdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRepeatPassword(e.target.value);
    };

    const handleRegister = () => {
        if (!areCredentialsValid()) {
            return;
        }

        registerWithEmail(email, displayName, password).then((user: User | null) => {
            if (user) {
                dispatch({ type: UserActions.SetUser, payload: user });
                onClose();
            }
        });
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

        if (password !== repeatPassword) {
            setAlert("Passwords must match");
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
            <Button onClick={onModalOpen} variant={"ghost"}>
                <Tooltip label="Register">
                    <FontAwesomeIcon icon={faUserPlus} size="xl" />
                </Tooltip>
            </Button>

            <Modal
                initialFocusRef={initialRef}
                closeOnOverlayClick={false}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Sign up</ModalHeader>
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

                        <FormControl>
                            <FormLabel>Display name</FormLabel>
                            <Input
                                placeholder='Your name'
                                name="displayName"
                                onChange={handleDisplayNameChange} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Password</FormLabel>
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
                        <FormControl mt={4}>
                            <FormLabel>Repeat password</FormLabel>
                            <InputGroup size='md'>
                                <Input
                                    pr='4.5rem'
                                    type={showRepeat ? 'text' : 'password'}
                                    placeholder='Enter password'
                                    name="password"
                                    onChange={handleRepeatPwdChange}
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button h='1.75rem' size='sm' variant={"ghost"} onClick={toggleRepeatPwdShow}>
                                        {show ? <ViewOffIcon /> : <ViewIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button mr={3} onClick={handleRegister}>
                            Sign up
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};
