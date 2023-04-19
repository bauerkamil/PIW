import React from "react";
import { PageWrapper } from "../../components/page-wrapper/PageWrapper";
import { INewVillaProps } from "./INewVillaProps";
import { Input, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Textarea, Button } from "@chakra-ui/react";
import { IVillaInfo } from "../../shared/interfaces/IVillaInfo";
import { useNavigate } from "react-router-dom";

export const NewVilla = (props: INewVillaProps) => {
    
    const navigate = useNavigate();
    
    const [name, setName] = React.useState<string>("")
    const handleNameChange = (e: any) => {setName(e.target.value)}

    const [city, setCity] = React.useState<string>("")
    const handleCityChange = (e: any) => {setCity(e.target.value)}

    const [address, setAddress] = React.useState<string>("")
    const handleAddressChange = (e: any) => {setAddress(e.target.value)}

    const [description, setDesc] = React.useState<string>("")
    const handleDescChange = (e: any) => {setDesc(e.target.value)}

    const [bedrooms, setBedrooms] = React.useState<number>(1)
    const handleBedroomsChange = (value: any) => {setBedrooms(value)}

    const [price, setPrice] = React.useState<number>(0)
    const handlePriceChange = (value: any) => {setPrice(value)}

    const [image, setImage] = React.useState<string>("")
    const handleImageChange = (e: any) => {setImage(e.target.value)}
    
    const [seller, setSeller] = React.useState<string>("")
    const handleSellerChange = (e: any) => {setSeller(e.target.value)}
    
    const [sellerMail, setSellerMail] = React.useState<string>("")
    const handleSellerMailChange = (e: any) => {setSellerMail(e.target.value)}

    const onAddClick = () => {
        let newVilla: IVillaInfo = {
            id: -1,
            name: name,
            city: city,
            address: address,
            description: description,
            bedrooms: bedrooms,
            price: price,
            image: image,
            seller: seller,
            sellerMail: sellerMail
        };
        props.addNewVilla(newVilla);

        navigate('/');
    }

    return(
        <PageWrapper>
            <label>Villa name</label>
            <Input placeholder='Type here...' value={name} onChange={handleNameChange}/>
            <label>City</label>
            <Input placeholder='Type here...' value={city} onChange={handleCityChange} />
            <label>Address</label>
            <Input placeholder='Type here...' value={address} onChange={handleAddressChange} />
            <label>Bedrooms</label>
            <NumberInput defaultValue={1} min={1} value={bedrooms} onChange={handleBedroomsChange} >
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
            <label>Price</label>
            <NumberInput defaultValue={1000} min={0} step={1000} value={price} onChange={handlePriceChange} >
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
            <label>Description</label>
            <Textarea  placeholder='Type here...' value={description} onChange={handleDescChange} />
            <label>Image url</label>
            <Input placeholder='Type here...' value={image} onChange={handleImageChange} />
            <label>Your name</label>
            <Input placeholder='Type here...' value={seller} onChange={handleSellerChange} />
            <label>Your e-mail</label>
            <Input placeholder='Type here...' value={sellerMail} onChange={handleSellerMailChange} />

            <Button onClick={onAddClick} variant="solid">Add</Button>
        </PageWrapper>
    );
};