import { useCallback, useEffect, useState } from "react";
import { IVillaInfo } from "../../../../common/interfaces/IVillaInfo";
import { IVillaFilters } from "../../../../common/interfaces/IVillaFilters";
import { IVillaListProps } from "./IVillaListProps";
import { VillaDetailsCard } from "./villa-details-short/VillaDetailsCard";
import { Flex, Heading, SimpleGrid, Spacer } from "@chakra-ui/react";
import { VillaFilters } from "../villa-filters/VillaFilters";

export const VillaList = (props: IVillaListProps) => {

    const [filteredVillas, setFilteredVillas] = useState<IVillaInfo[]>(props.villas);
    const [filters, setFilters] = useState<IVillaFilters>({
        isSortedAsc: false,
        name: "",
        city: "",
        description: "",
        bedroomsNumber: 1
    });

    const estateList = filteredVillas.map((villa) =>
        <VillaDetailsCard
            key={villa.id}
            {...villa}
        />
    );

    const filterVillas = (): void => {
        let filteredData = props.villas

        if (filters.name && filters.name !== "") {
            filteredData = filteredData
                .filter((villa) =>
                    villa.name.toLowerCase().includes(filters.name?.toLowerCase() ?? ""));
        }

        if (filters.city && filters.city !== "") {
            filteredData = filteredData
                .filter((villa) =>
                    villa.city.toLowerCase() === filters.city?.toLowerCase());
        }

        if (filters.description && filters.description !== "") {
            filteredData = filteredData
                .filter((villa) =>
                    villa.description.toLowerCase().includes(filters.description?.toLowerCase() ?? ""));
        }

        if ((filters.bedroomsNumber ?? 0) > 1) {
            filteredData = filteredData
                .filter((villa) =>
                    villa.bedrooms >= (filters.bedroomsNumber ?? 0));
        }

        if (filters.isSortedAsc) {
            filteredData = filteredData
                .sort((a, b) => b.price - a.price);
        } else {
            filteredData = filteredData
                .sort((a, b) => a.price - b.price);
        }

        setFilteredVillas(filteredData)
    }

    const cachedFilterSearchReviewers = useCallback(filterVillas, [filters, props.villas]);

    useEffect(() => {
        cachedFilterSearchReviewers();
    }, [cachedFilterSearchReviewers]);

    useEffect(() => {
        setFilteredVillas(props.villas);
    }, [props.villas]);

    return (
        <>

            <Flex width={"100%"}>
                <Heading size="xl">
                    Select your favourite villa and book today!
                </Heading>
                <Spacer />
                <VillaFilters setFilters={setFilters} filters={filters} />
            </Flex>

            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, 3fr)'>
                {estateList}
            </SimpleGrid>

        </>
    );
};