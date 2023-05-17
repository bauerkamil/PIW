import React from 'react';
import { useDisclosure, Button, Divider, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Input, DrawerFooter, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Textarea } from "@chakra-ui/react";
import { IVillaFiltersProps } from "./IVillaFiltersProps";
import { HamburgerIcon, TriangleUpIcon, TriangleDownIcon } from "@chakra-ui/icons";
import { IVillaFilters } from '../../../../common/interfaces/IVillaFilters';


export const VillaFilters = (props: IVillaFiltersProps) => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const [filters, setFilters] = React.useState<IVillaFilters>({ ...props.filters });

  const toggleSortDir = () => { setFilters({ ...filters, isSortedAsc: !filters.isSortedAsc }); }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => { setFilters({ ...filters, name: e.target.value }) }

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => { setFilters({ ...filters, city: e.target.value }) }

  const handleDescChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => { setFilters({ ...filters, description: e.target.value }) }

  const handleBedroomsChange = (_: string, value: number) => { setFilters({ ...filters, bedroomsNumber: value }) }

  const clearFilters = () => {
    setFilters({
      isSortedAsc: false,
      name: "",
      city: "",
      description: "",
      bedroomsNumber: 1
    })

  }

  const applyFilters = () => {
    props.setFilters(filters)

    onClose();
  }

  const sortButton =
    filters.isSortedAsc ? <><p>Sort ascending</p> <TriangleUpIcon /></> : <><p>Sort descending</p> <TriangleDownIcon /></>;

  return (
    <>
      <Button onClick={onOpen} variant="ghost">
        <p>Filters</p>
        <HamburgerIcon />
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
            <Button variant="ghost" onClick={toggleSortDir}>
              {sortButton}
            </Button>
            <Divider />
            <label>Villa name</label>
            <Input placeholder='Type here...' value={filters.name} onChange={handleNameChange} />
            <label>City</label>
            <Input placeholder='Type here...' value={filters.city} onChange={handleCityChange} />
            <label>Min. bedrooms</label>
            <NumberInput defaultValue={1} min={1} value={filters.bedroomsNumber} onChange={handleBedroomsChange} >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <label>Description</label>
            <Textarea placeholder='Type here...' value={filters.description} onChange={handleDescChange} />

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