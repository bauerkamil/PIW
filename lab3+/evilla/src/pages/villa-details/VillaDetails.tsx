import { useEffect, useRef } from "react";
import { useParams } from "react-router";
import { PageWrapper } from "../../components/page-wrapper/PageWrapper";
import { IVillaDetailsProps } from "./IVillaDetailsProps";
import { Button, Heading, Input, Textarea, useToast } from "@chakra-ui/react";

export const VillaDetails = (props: IVillaDetailsProps) => {
    const toast = useToast()
    const { id } = useParams();
    const villaDetails = props.getVillaInfo(Number(id));

    const msgTitleInputRef = useRef<HTMLInputElement>(null);
    const messageInputRef = useRef<HTMLTextAreaElement>(null);


    useEffect(() => {
        msgTitleInputRef.current?.focus();
    }, []);


    const sendMessage = () => {
        console.log(msgTitleInputRef.current?.value);
        showRandomSuccess();
    };

    const showRandomSuccess = () => {
        let randomBoolean = Math.random() < 0.5;

        if (randomBoolean) {
            toast({
                title: 'Message sent.',
                description: "The seller has been notified.",
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
        } else {
            toast({
                title: 'Message not sent.',
                description: "There has been an error.",
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
        };
    };

    return (
        <PageWrapper>
            <Heading>
                {villaDetails?.name}
            </Heading>
            <p>Send a message</p>
            <p>To: {villaDetails?.seller} ({villaDetails?.sellerMail})</p>

            <label>Title:</label>
            <Input ref={msgTitleInputRef} />
            <label>Message:</label>
            <Textarea ref={messageInputRef} />
            <Button onClick={sendMessage}>Send</Button>
        </PageWrapper>
    );
};