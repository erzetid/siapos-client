import { Image, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import Assets from '../assets';

function Logo() {
  return (
    <Link to={'/'}>
      <Stack direction="row" justifyContent={'center'} alignItems={'center'}>
        <Image
          borderRadius="full"
          boxSize="32px"
          src={Assets.image().LOGO_LIGHT}
        />
        <Text as="b" fontSize="2xl">
          ERZETID
        </Text>
      </Stack>
    </Link>
  );
}

export default Logo;
