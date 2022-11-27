import {
  Box,
  BoxProps,
  Divider,
  Heading,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

interface ContentProps extends BoxProps {
  title: string;
  children?: ReactNode;
}

const Content: FC<ContentProps> = ({ title, children, ...rest }) => {
  return (
    <Box
      flexDirection={'row'}
      bg={useColorModeValue('white', 'gray.900')}
      p={3}
      borderRadius={5}
      mt={2}
      {...rest}
    >
      <Stack mb={2}>
        <Heading size={'md'}>{title}</Heading>
        <Divider orientation="horizontal" />
      </Stack>
      {children}
    </Box>
  );
};

export default Content;
