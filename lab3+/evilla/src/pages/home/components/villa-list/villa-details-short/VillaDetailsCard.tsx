import { Card, CardBody, CardFooter, Divider, Heading, Stack, Image, Text, Button, Flex, Spacer, CardHeader, Tooltip } from "@chakra-ui/react";
import { IVillaDetailsCardProps } from "./IVillaDetailsCardProps";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { FavoritesContext } from "../../../../../common/providers/FavoritesProvider";
import { FavoritesActions } from "../../../../../common/enums/FavoritesActions";

export const VillaDetailsCard = (props: IVillaDetailsCardProps) => {
  const { id,
    name,
    description,
    city,
    price,
    bedrooms,
    image
  } = props.villa;

  const { dispatch: dispatchFavorites } = useContext(FavoritesContext);

  const addToFavorites = () => {
    dispatchFavorites({ type: FavoritesActions.AddFavorite, payload: props.villa });
  }

  return (
    <Card maxW='md'>
      <CardHeader>
        <Flex width={"100%"}>
          <Heading size='md'>{name}</Heading>
          <Spacer />
          <Tooltip label="Add to favorites">
            <button onClick={addToFavorites}>
              <FontAwesomeIcon icon={faCirclePlus} />
            </button>
          </Tooltip>
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