import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Container,
  useColorMode,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon, MoonIcon, SunIcon, ChevronDownIcon } from '@chakra-ui/icons';

const Links = ['About', 'Blog'];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    variant='outline'
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box boxShadow='lg' bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Container  maxW='container.md'>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={'center'}>
              <Link 
                _hover={{
                  textDecoration: 'none',
                  scale:1,
                }}
                href={'/'}
              >
                <Avatar
                  size={'sm'}
                  style={{ border: '2px solid #2AB14B'}}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </Link>
              <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}
              >
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
                <Menu>
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Links
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Projects</MenuItem>
                    <MenuItem>Tech Stack</MenuItem>
                    <MenuItem>Open Source</MenuItem>
                    <MenuItem>Achievements</MenuItem>
                    {/* <MenuItem>Changelog</MenuItem> */}
                  </MenuList>
                </Menu>
              </HStack>
            </HStack>
            <Flex alignItems={'center'}>
              <Button
                rounded='xl' 
                size={'sm'}
                mr={4}
              >
              </Button>
              <Button
                rounded='xl'
                onClick={toggleColorMode}
                borderRadius='md'
              >
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

            </Flex>
          </Flex>

          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Container>
      </Box>
    </>
  );
}