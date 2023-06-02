import { Route, Routes } from "react-router";
import { Box, } from "@chakra-ui/react";
import styles from "./App.module.scss";
import { Navbar } from '../../components/navbar/Navbar';
import { Home } from '../home/Home';
import { NewVilla } from '../new-villa-offer/NewVilla'
import { VillaMessage } from '../villa-message/VillaMessage';
import { Favorites } from '../favorites/Favorites';
import { EditVilla } from "../edit-villa-offer/EditVilla";


const App = () => {

  return (
    <Box className={styles.appContainer}>
      <Routes>
        <Route element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path='new' element={<NewVilla />} />
          <Route path='villa-details/:id' element={<VillaMessage />} />
          <Route path='edit/:id' element={<EditVilla />} />
          <Route path='favorites' element={<Favorites />} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
