import React from 'react';
import { Route, Routes } from "react-router";
import { Box, } from "@chakra-ui/react";
import styles from "./App.module.scss";
import { Navbar } from '../../components/navbar/Navbar';
import { Home } from '../home/Home';
import { NewVilla } from '../new-villa-offer/NewVilla'
import { IVillaInfo } from '../../shared/interfaces/IVillaInfo';
import { VillaDetails } from '../villa-details/VillaDetails';

const App = () => {

  const [villas, setVillas] = React.useState<IVillaInfo[]>([
    {
      id: 1,
      name: "Villa nr 1",
      description: "description ",
      price: 1000,
      address: "Pl. Grunwaldzki 3",
      image: "https://amazingarchitecture.com/storage/1729/responsive-images/selina_villa_dubai_uae_gravity_studio_mohanad_albasha___media_library_original_1344_756.jpg",
      city: "Wrocław",
      bedrooms: 1,
      seller: "You!",
      sellerMail: "youremail@gmail.com",
    },
    {
      id: 2,
      name: "Villa nr 2",
      description: "description",
      price: 2000,
      address: "Nowowiejska 35",
      image: "https://amazingarchitecture.com/storage/1729/responsive-images/selina_villa_dubai_uae_gravity_studio_mohanad_albasha___media_library_original_1344_756.jpg",
      city: "Wrocław",
      bedrooms: 2,
      seller: "Cing Ciang Ciong",
      sellerMail: "youremail@gmail.com",
    },
    {
      id: 3,
      name: "Villa nr 3",
      description: "description",
      price: 3000,
      address: "Wybrzeże Wyspiańskiego 31",
      image: "https://amazingarchitecture.com/storage/1729/responsive-images/selina_villa_dubai_uae_gravity_studio_mohanad_albasha___media_library_original_1344_756.jpg",
      city: "Wrocław",
      bedrooms: 3,
      seller: "You!",
      sellerMail: "youremail@gmail.com",
    },
  ]);

  const getVillaInfo = (id: number) : IVillaInfo | undefined => {
    return villas.find((villa) => villa.id === id);
  }

  const addNewVilla = (newVilla: IVillaInfo): void => {
    const ids = villas.map((villa) => villa.id);
    const maxId = Math.max(...ids);
    newVilla.id = maxId + 1;
    setVillas([...villas, newVilla]);
  }

  return (
    <Box className={styles.appContainer}>
      <Routes>
        <Route element={<Navbar />}>
          <Route index element={<Home villas={villas}/>} />
          <Route path="home" element={<Home villas={villas}/>} />
          <Route path='new' element={<NewVilla addNewVilla={addNewVilla} />} />
          <Route path='villa-details/:id' element={<VillaDetails getVillaInfo={getVillaInfo} />} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
