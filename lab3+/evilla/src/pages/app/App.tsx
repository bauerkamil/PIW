import React, { useEffect } from 'react';
import { Route, Routes } from "react-router";
import { Box, } from "@chakra-ui/react";
import styles from "./App.module.scss";
import { Navbar } from '../../components/navbar/Navbar';
import { Home } from '../home/Home';
import { NewVilla } from '../new-villa-offer/NewVilla'
import { IVillaInfo } from '../../common/interfaces/IVillaInfo';
import { VillaMessage } from '../villa-message/VillaMessage';
import axios from 'axios';
import { Favorites } from '../favorites/Favorites';


const App = () => {

  const [villas, setVillas] = React.useState<IVillaInfo[]>([]);

  useEffect(() => {
    axios
      .get<IVillaInfo[]>("/data/villas.json")
      .then((response) => { setVillas(response.data) });
  }, []);

  // useEffect(() => {
  //   console.log(villas)
  // }, [villas]);

  const getVillaInfo = (id: number): IVillaInfo | undefined => {
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
          <Route index element={<Home villas={villas} />} />
          <Route path="home" element={<Home villas={villas} />} />
          <Route path='new' element={<NewVilla addNewVilla={addNewVilla} />} />
          <Route path='villa-details/:id' element={<VillaMessage getVillaInfo={getVillaInfo} />} />
          <Route path='favorites' element={<Favorites />} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
