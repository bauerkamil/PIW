import { Button, Card, CardBody, Flex, Heading, Spacer } from "@chakra-ui/react"
import { IVillaInfo } from "../../../../common/interfaces/IVillaInfo"
import { useContext } from "react";
import { FavoritesContext } from "../../../../common/providers/FavoritesProvider";
import { FavoritesActions } from "../../../../common/enums/FavoritesActions";


export const FavoriteDetail = (props: { villaInfo: IVillaInfo }) => {
    const villaInfo = props.villaInfo;

    const { dispatch } = useContext(FavoritesContext);

    const deleteFavorite = () => {
        dispatch({ type: FavoritesActions.RemoveFavorite, payload: villaInfo.id });

    }
    return (
        <Card width={"60%"}>
            <CardBody>
                <Flex width={"100%"}>

                    <Heading size='md'>{villaInfo.name}</Heading>
                    <Spacer />
                    <Button onClick={deleteFavorite}>
                        Delete
                    </Button>
                </Flex>
            </CardBody>
        </Card>
    )
}