import { useParams } from "react-router";
import { PageWrapper } from "../../components/page-wrapper/PageWrapper";
import { IVillaDetailsProps } from "./IVillaDetailsProps";
import { Button, Heading, Input, Textarea, useToast } from "@chakra-ui/react";

export const VillaDetails = (props: IVillaDetailsProps) => {
    const { id } = useParams();
    const villaDetails = props.getVillaInfo(Number(id))

    const toast = useToast()
    
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
        }
    }
    return (
        <PageWrapper>
            <Heading>
                {villaDetails?.name}
            </Heading>
            <p>Send a message</p>
            <p>To: {villaDetails?.seller} ({villaDetails?.sellerMail})</p>

            <label>From:</label>
            <Input/>
            <label>Message:</label>
            <Textarea />
            <Button onClick={showRandomSuccess}>Send</Button>
        </PageWrapper>
    );
};