import { useState } from "react";
import { IVillaInfo } from "../../../../shared/interfaces/IVillaInfo";
import { IVillaListProps } from "./IVillaListProps";
import { VillaDetailsCard } from "./villa-details-short/VillaDetailsCard";
import { Flex, Heading, SimpleGrid, Spacer } from "@chakra-ui/react";
import { VillaFilters } from "../villa-filters/VillaFilters";

export const VillaList = (props: IVillaListProps) => {
    
    const [filteredVillas, setFilteredVillas] = useState<IVillaInfo[]>(props.villas);
    const estateList = filteredVillas.map((villa) =>
        <VillaDetailsCard
            key={villa.id}
            id = {villa.id}
            name = {villa.name}
            description = {villa.description}
            city = {villa.city}
            price = {villa.price}
            bedrooms = {villa.bedrooms}
            image = {villa.image}
        />
    );

    const filterVillas = (sortAsc: boolean, name: string, city: string, description: string, bedrooms: number) : void => {
        let filteredData = props.villas

        if (name !== "") {
            filteredData = filteredData
                .filter((villa) =>
                    villa.name.toLowerCase().includes(name.toLowerCase()));
        }
        
        if (city !== "") {
            filteredData = filteredData
                .filter((villa) =>
                    villa.city.toLowerCase() === city.toLowerCase());
        }
        
        if (description !== "") {
            filteredData = filteredData
                .filter((villa) =>
                    villa.description.toLowerCase().includes(description.toLowerCase()));
        }
        
        if (bedrooms > 1) {
            filteredData = filteredData
                .filter((villa) =>
                    villa.bedrooms >= bedrooms);
        }
        
        if (sortAsc) {
            filteredData = filteredData
                .sort((a, b) => b.price - a.price);
        } else {
            filteredData = filteredData
                .sort((a, b) => a.price - b.price);
        }

        setFilteredVillas(filteredData)
    }

    return(
        <>
        
            <Flex dir="vertical">
                <Heading size="xl">
                    Select your favourite villa and book today!
                </Heading>
                <Spacer/>
                <VillaFilters setFilters={filterVillas}/>
            </Flex>

            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, 3fr)'>
                {estateList}
            </SimpleGrid>

        </>
    );
};