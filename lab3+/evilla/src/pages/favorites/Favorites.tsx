import { Heading } from "@chakra-ui/react";
import { PageWrapper } from "../../components/page-wrapper/PageWrapper";
import { useContext } from "react";
import { FavoritesContext } from "../../common/providers/FavoritesProvider";
import { FavoriteDetail } from "./components/favorite-details/FavoriteDetails";


export const Favorites = () => {

    const { state: favorites } = useContext(FavoritesContext);

    const getFavorites = () => {
        if (favorites) {
            return (
                favorites.map((villa) =>
                    <FavoriteDetail
                        key={villa.id}
                        villaInfo={villa} />
                )
            );

        } else {
            return (<></>);
        }
    }
    return (
        <PageWrapper>
            <Heading>
                Here is a poorly designed list of your favourite villas
            </Heading>
            they are removed on page reload, don't do that c:
            {getFavorites()}
        </PageWrapper>
    );
}