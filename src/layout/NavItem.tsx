import { Flex, FlexProps, Icon } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { IconType } from 'react-icons/lib';
import { Link } from 'react-router-dom';

interface NavItemProps extends FlexProps {
  icon: IconType;
  path: string;
  children: ReactNode;
}
const NavItem = ({ icon, children, path, ...rest }: NavItemProps) => {
  return (
    <Link to={path}>
      <Flex
        align="center"
        p="3"
        mx="4"
        my="1"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

export default NavItem;
