import React, { useContext, useEffect } from "react";
import { PageWrapper } from "../../components/page-wrapper/PageWrapper";
import { Input, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Textarea, Button, useToast } from "@chakra-ui/react";
import { IVillaInfo } from "../../common/interfaces/IVillaInfo";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../common/providers/UserProvider";
import { getVillaById, updateVilla } from "../../services/VillaService";

export const EditVilla = () => {


    const toast = useToast();
    const { state: user } = useContext(UserContext);
    const { id } = useParams();

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
    const [editVilla, setEditVilla] = React.useState<IVillaInfo>(defaultVilla);


    useEffect(() => {
        if (id) {
            getVillaById(id).then((villa) => {
                if (villa) {
                    setEditVilla(villa);
                } else {
                    console.log("No villa found");
                }
            });
        };

    }, [id]);

    const handleNameChange = (e: any) => { setEditVilla({ ...editVilla, name: e.target.value }) };

    const handleCityChange = (e: any) => { setEditVilla({ ...editVilla, city: e.target.value }) };

    const handleAddressChange = (e: any) => { setEditVilla({ ...editVilla, address: e.target.value }) };

    const handleDescChange = (e: any) => { setEditVilla({ ...editVilla, description: e.target.value }) };

    const handleBedroomsChange = (value: any) => { setEditVilla({ ...editVilla, bedrooms: value }) };

    const handlePriceChange = (value: any) => { setEditVilla({ ...editVilla, price: value }) };

    const handleImageChange = (e: any) => { setEditVilla({ ...editVilla, image: e.target.value }) };

    const onUpdateClick = () => {
        if (user) {
            if (editVilla.id) {

                updateVilla(editVilla.id, editVilla).then(() => navigate('/'));

            }

        } else {
            toast({
                title: 'You must be logged in to edit an offer.',
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
        }
    };

    return (
        <PageWrapper>
            <label>Villa name</label>
            <Input placeholder='Type here...' value={editVilla.name} onChange={handleNameChange} />
            <label>City</label>
            <Input placeholder='Type here...' value={editVilla.city} onChange={handleCityChange} />
            <label>Address</label>
            <Input placeholder='Type here...' value={editVilla.address} onChange={handleAddressChange} />
            <label>Bedrooms</label>
            <NumberInput defaultValue={1} min={1} value={editVilla.bedrooms} onChange={handleBedroomsChange} >
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
            <label>Price</label>
            <NumberInput defaultValue={1000} min={0} step={1000} value={editVilla.price} onChange={handlePriceChange} >
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
            <label>Description</label>
            <Textarea placeholder='Type here...' value={editVilla.description} onChange={handleDescChange} />
            <label>Image url</label>
            <Input placeholder='Type here...' value={editVilla.image} onChange={handleImageChange} />
            <label>Your name</label>
            <Input placeholder='Type here...' value={user?.displayName?.toString()} isReadOnly={true} />
            <label>Your e-mail</label>
            <Input placeholder='Type here...' value={user?.email?.toString()} isReadOnly={true} />

            <Button onClick={onUpdateClick} variant="solid">Update</Button>
        </PageWrapper>
    );
};