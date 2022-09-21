import {
  Box,
  Drawer,
  DrawerContent,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import MobileNav from "../layout/MobileNav";
import Sidebar from "../layout/Sidebar";
import Footer from "./Footer";

interface LayoutProps {}

const Layout: FC<LayoutProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <Sidebar
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <Sidebar onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {/* This automatic rendered if child of url path active */}
        <Outlet />
      </Box>
      <Box ml={{ base: 0, md: 60 }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
