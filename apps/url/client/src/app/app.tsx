import React, {FormEvent, useCallback, useState} from "react";
import {extendTheme} from '@chakra-ui/react'
import axios from "axios";
import {ShortenUrlForm} from './ShortenUrlForm';
import UrlList from './url-list';

import {
  ChakraProvider,
  Button,
  Box,
  Container,
  Text,
  Input,
  UnorderedList,
  ListItem,
  Link,
} from '@chakra-ui/react';
import {Shortened} from "./types";


// theme for fonts
const theme = extendTheme({
  fonts: {
    heading: `'Work Sans', Georgia`,
    body: `'Work Sans', sans-serif`,
  },
})


export function App() {
  const [urls, setUrls] = useState<Array<Shortened>>([]);

  const requestShortUrl = useCallback(
    async (inputUrl: string) => {
      const response = await axios.post(`http://localhost:3333/api/shorten`, {
        original: inputUrl,
      });

      const newUrl = response.data as Shortened;

      setUrls([newUrl, ...urls]);
    },
    [urls, setUrls]
  );

  return (
    <Container display="flex" justifyContent="center" maxWidth="4xl" marginBlock={10} textAlign="center">
      <Box boxShadow='0px 4px 25px rgba(0, 0, 0, 0.3)' backdropFilter='blur(10px)' color='#ff7979' width='60%' p={4}
           bg='#FFC0CB4D' borderRadius='25px'>
        <Text textShadow='0px 4px 25px rgba(0, 0, 0, 0.3)' color="#686de0" fontWeight={"bold"}
              fontStyle={"Work-sans"} fontSize="45px">URL Shortener</Text>
        <label>Paste the URL to be shortened</label>
        <ShortenUrlForm requestShortUrl={requestShortUrl}/>
        <UrlList urls={urls}/>
      </Box>
    </Container>
  );
}

export default App;

