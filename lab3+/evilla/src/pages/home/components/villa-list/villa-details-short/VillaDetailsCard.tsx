import { Card, CardBody, CardFooter, Divider, Heading, Stack, Image, Text, Button, Flex, Spacer } from "@chakra-ui/react";
import { IVillaDetailsCardProps } from "./IVillaDetailsCardProps";
import { Link } from "react-router-dom";

export const VillaDetailsCard = (props: IVillaDetailsCardProps) => {
    return (
        <Card maxW='md'>
        <CardBody>
          <Image
            src={props.image}
            alt='Villa image'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{props.name}</Heading>
            <Text>
              {props.description}
            </Text>
            <Text>
                bedrooms: {props.bedrooms}
            </Text>
            <Flex>
                <Text color='orange.600' fontSize='2xl'>
                {props.price}$
                </Text>
                <Spacer />
                <Text>
                {props.city}
                </Text>
                
            </Flex>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
            <Link to={`/villa-details/${props.id}`} >
                <Button variant="solid">
                    Book a meeting
                </Button>
            </Link>
        </CardFooter>
      </Card>
    );
  };