import { useContext } from "react";
import { Card, CardBody, CardFooter, Divider, Heading, Stack, Image, Text, Button, Flex, Spacer, CardHeader, Tooltip } from "@chakra-ui/react";
import { IVillaDetailsCardProps } from "./IVillaDetailsCardProps";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FavoritesContext } from "../../../../../common/providers/FavoritesProvider";
import { FavoritesActions } from "../../../../../common/enums/FavoritesActions";
import { UserContext } from "../../../../../common/providers/UserProvider";

export const VillaDetailsCard = (props: IVillaDetailsCardProps) => {
  const { id,
    name,
    description,
    city,
    price,
    bedrooms,
    image
  } = props.villa;

  const { state: user } = useContext(UserContext);

  const { dispatch: dispatchFavorites } = useContext(FavoritesContext);

  const addToFavorites = () => {
    dispatchFavorites({ type: FavoritesActions.AddFavorite, payload: props.villa });
  };

  const getEditLink = () => {
    if (user && user.email === props.villa.sellerMail) {
      return (
        <Link to={`/edit/${id}`} >
          <FontAwesomeIcon icon={faPenToSquare} />
        </Link>
      )
    }
  }

  return (
    <Card maxW='md'>
      <CardHeader>
        <Flex width={"100%"}>
          <Heading size='md'>{name}</Heading>
          <Spacer />
          <Flex gap={"1rem"}>
            {getEditLink()}
            <Tooltip label="Add to favorites">
              <button onClick={addToFavorites}>
                <FontAwesomeIcon icon={faCirclePlus} />
              </button>
            </Tooltip>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Image
          src={image}
          alt='Villa image'
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Text>
            {description}
          </Text>
          <Text>
            bedrooms: {bedrooms}
          </Text>
          <Flex>
            <Text color='orange.600' fontSize='2xl'>
              {price}$
            </Text>
            <Spacer />
            <Text>
              {city}
            </Text>

          </Flex>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link to={`/villa-details/${id}`} >
          <Button variant="solid">
            Book a meeting
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};