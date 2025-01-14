

import { Button, Input } from '@chakra-ui/react';
import { FormEvent, useCallback, useState } from 'react';


export type Shortened = {
  original: string;
  short: string;
};

type ShortenUrlFormProps = {
  requestShortUrl: (original: string) => Promise<void>;
};

export const ShortenedUrl: React.FC<ShortenUrlFormProps> = ({
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
    <form onSubmit={onSubmit}>
      <Input
        id="url-input"
        size="lg"
        marginBlock={4}
        value={inputUrl}
        onChange={(e) => {
          setInputUrl(e.target.value);
        }}
        placeholder="www.my-super-long-url-here.com/12345"
      />
      <Button id="submit-btn" type="submit" colorScheme="teal" size="lg">
        Generate
      </Button>
    </form>
  );
};

export default ShortenedUrl;
