import React from 'react';
import { useDisclosure, Button, Divider, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Input, DrawerFooter, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Textarea } from "@chakra-ui/react";
import { IVillaFiltersProps } from "./IVillaFiltersProps";
import { HamburgerIcon, TriangleUpIcon, TriangleDownIcon } from "@chakra-ui/icons";


export const VillaFilters = (props: IVillaFiltersProps) => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [sortAsc, setSortAsc] = React.useState<boolean>(false);
    const changeSortDir = () => {setSortAsc(!sortAsc)}

    const [name, setName] = React.useState<string>("")
    const handleNameChange = (e: any) => {setName(e.target.value)}

    const [city, setCity] = React.useState<string>("")
    const handleCityChange = (e: any) => {setCity(e.target.value)}

    const [description, setDesc] = React.useState<string>("")
    const handleDescChange = (e: any) => {setDesc(e.target.value)}

    const [bedrooms, setBedrooms] = React.useState<number>(1)
    const handleBedroomsChange = (value: any) => {setBedrooms(value)}

    const clearFilters = () => {
        setSortAsc(false);
        setName("");
        setCity("");
        setDesc("");
        setBedrooms(1);

        // applyFilters();
    }

    const applyFilters = () => {
        props.setFilters(sortAsc, name, city, description, bedrooms)

        onClose();
    }

    const sortButton = 
        sortAsc ? <><p>Sort ascending</p> <TriangleUpIcon/></> : <><p>Sort descending</p> <TriangleDownIcon/></>;
    
    return (
        <>
            <Button onClick={onOpen} variant="ghost">
                <p>Filters</p>
                <HamburgerIcon/>
            </Button>
            <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Filters</DrawerHeader>

          <DrawerBody>
            <Button variant="ghost" onClick={changeSortDir}>
                {sortButton}
            </Button>
            <Divider />
            <label>Villa name</label>
            <Input placeholder='Type here...' value={name} onChange={handleNameChange}/>
            <label>City</label>
            <Input placeholder='Type here...' value={city} onChange={handleCityChange} />
            <label>Min. bedrooms</label>
            <NumberInput defaultValue={1} min={1} value={bedrooms} onChange={handleBedroomsChange} >
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
            <label>Description</label>
            <Textarea  placeholder='Type here...' value={description} onChange={handleDescChange} />

          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={clearFilters}>
              Clear
            </Button>
            <Button variant="solid" onClick={applyFilters}>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
        </>
    );
};