import React, { useContext } from "react";
import { PageWrapper } from "../../components/page-wrapper/PageWrapper";
import { Input, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Textarea, Button, useToast } from "@chakra-ui/react";
import { IVillaInfo } from "../../common/interfaces/IVillaInfo";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../common/providers/UserProvider";
import { addVilla } from "../../services/VillaService";

export const NewVilla = () => {


    const toast = useToast();
    const { state: user } = useContext(UserContext);

    const navigate = useNavigate();
    const defaultVilla: IVillaInfo = {
        id: undefined,
        name: "",
        city: "",
        address: "",
        description: "",
        bedrooms: 1,
        price: 0,
        image: "",
        seller: user?.displayName?.toString() ?? "",
        sellerMail: user?.email?.toString() ?? ""
    };
    const [newVilla, setNewVilla] = React.useState<IVillaInfo>(defaultVilla);

    const handleNameChange = (e: any) => { setNewVilla({ ...newVilla, name: e.target.value }) };

    const handleCityChange = (e: any) => { setNewVilla({ ...newVilla, city: e.target.value }) };

    const handleAddressChange = (e: any) => { setNewVilla({ ...newVilla, address: e.target.value }) };

    const handleDescChange = (e: any) => { setNewVilla({ ...newVilla, description: e.target.value }) };

    const handleBedroomsChange = (value: any) => { setNewVilla({ ...newVilla, bedrooms: value }) };

    const handlePriceChange = (value: any) => { setNewVilla({ ...newVilla, price: value }) };

    const handleImageChange = (e: any) => { setNewVilla({ ...newVilla, image: e.target.value }) };

    const onAddClick = () => {
        if (user) {

            addVilla(newVilla).then(() => navigate('/'));

        } else {
            toast({
                title: 'You must be logged in to add new offer.',
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
        }
    };

    return (
        <PageWrapper>
            <label>Villa name</label>
            <Input placeholder='Type here...' value={newVilla.name} onChange={handleNameChange} />
            <label>City</label>
            <Input placeholder='Type here...' value={newVilla.city} onChange={handleCityChange} />
            <label>Address</label>
            <Input placeholder='Type here...' value={newVilla.address} onChange={handleAddressChange} />
            <label>Bedrooms</label>
            <NumberInput defaultValue={1} min={1} value={newVilla.bedrooms} onChange={handleBedroomsChange} >
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
            <label>Price</label>
            <NumberInput defaultValue={1000} min={0} step={1000} value={newVilla.price} onChange={handlePriceChange} >
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
            <label>Description</label>
            <Textarea placeholder='Type here...' value={newVilla.description} onChange={handleDescChange} />
            <label>Image url</label>
            <Input placeholder='Type here...' value={newVilla.image} onChange={handleImageChange} />
            <label>Your name</label>
            <Input placeholder='Type here...' value={user?.displayName?.toString()} isReadOnly={true} />
            <label>Your e-mail</label>
            <Input placeholder='Type here...' value={user?.email?.toString()} isReadOnly={true} />

            <Button onClick={onAddClick} variant="solid">Add</Button>
        </PageWrapper>
    );
};