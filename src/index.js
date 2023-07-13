import React from 'react';
import './index.css';
import App from './App';
import {ChakraProvider} from "@chakra-ui/react";
import {BrowserRouter } from "react-router-dom";

import { createRoot } from 'react-dom/client';
import ChatProvider from './Context/ChatProvider';

const container = document.getElementById('root');
const root =createRoot(container);


root.render(
  <BrowserRouter>
  <ChatProvider>   
    <ChakraProvider>
        <App />
    </ChakraProvider>
    
    
   
  </ChatProvider>
  </BrowserRouter>
 
);





