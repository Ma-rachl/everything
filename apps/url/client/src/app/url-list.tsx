import { Link, ListItem, UnorderedList } from '@chakra-ui/react';
import { Shortened } from './types';

import QRCode from 'qrcode.react';

type UrlListProps = {
  urls: Array<Shortened>;
};

export const UrlList: React.FC<UrlListProps> = ({ urls }) => {
  return (
    <UnorderedList id="url-list" textAlign="left">
      {urls.map((u) => (
        <ListItem>
          <Link href={u.short} color="black">
            {u.short}
          </Link>{' '}
          - {u.original}
          <div id="qrCodeContainer">
            <QRCode value={u.original} />
          </div>

        </ListItem>
      ))}
    </UnorderedList>
  );
};
export default UrlList;
