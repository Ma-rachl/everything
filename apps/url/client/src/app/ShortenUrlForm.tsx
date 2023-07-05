import {Button, Input } from '@chakra-ui/react';
import {ChakraProvider} from '@chakra-ui/react';
import {FormEvent, useCallback, useState} from 'react';

type ShortenUrlFormProps = {
  requestShortUrl: (original: string) => Promise<void>;
};

export const ShortenUrlForm: React.FC<ShortenUrlFormProps> = ({
                                                                requestShortUrl,
                                                              }) => {
  const [inputUrl, setInputUrl] = useState<string>('');
  const onSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();
      await requestShortUrl(inputUrl);
      setInputUrl('');
    },
    [inputUrl, setInputUrl]
  );
  return (
    <ChakraProvider>
    <form onSubmit={onSubmit}>
      <Input
        id="url-input"
        size="lg"
        marginBlock={16}
        value={inputUrl}
        onChange={(e) => {
          setInputUrl(e.target.value);
        }}
        placeholder="www.my-super-long-url-here.com/12345"
      />
      <Button id="submit-btn" bgGradient="linear(to-r, #E6C0E9, #BFABCB)" boxShadow="0px 4px 25px rgba(0, 0, 0, 0.2)"
              textColor="black" type="submit"
              colorScheme="teal"
              size="lg"
              _hover={{bgGradient: 'linear(to-r, #BFABCB, #E6C0E9)'}} // Optional hover effect
      >
        Generate
      </Button>
    </form>
    </ChakraProvider>
  );
};

export default ShortenUrlForm;
