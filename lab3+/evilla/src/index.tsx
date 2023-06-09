import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/app/App";
import { BrowserRouter } from "react-router-dom";
import { ChakraBaseProvider } from "@chakra-ui/react";
import theme from "./assets/themes/theme";
import { UserProvider } from "./common/providers/UserProvider";
import { FavoritesProvider } from "./common/providers/FavoritesProvider";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
      <UserProvider>
        <FavoritesProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </FavoritesProvider>
      </UserProvider>
    </ChakraBaseProvider>
  </React.StrictMode>
);
