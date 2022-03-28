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
  Icon,
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon, MoonIcon, SunIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { MotionBox } from './animations/motion';
import NextLink from 'next/link';
import { BiChevronDown } from 'react-icons/bi';
import { AiTwotoneThunderbolt } from 'react-icons/ai';
import { BsBook , BsCheckCircle, BsGithub} from 'react-icons/bs';
import { MdTimeline } from 'react-icons/md';
import { CgArrowsExchange } from 'react-icons/cg';
import { useRouter } from 'next/router';
import { useLinkColor } from './theme/colors';

const webLinks = [
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
];

const mobileLinks = [
  { name: 'Projects', path: '/projects' },
  { name: 'Open Source', path: '/open-source' },
  { name: 'Blog', path: '/blog' },
  { name: 'Changelog', path: '/changelog' },
];

const dropdownLinks = [
  { name: 'Projects', path: '/projects' },
  { name: 'Tech Stack', path: '/tech-stack' },
  { name: 'Open Source', path: '/open-source' },
  { name: 'Achievements', path: '/achievements' },
  // { name: 'Changelog', path: '/changelog' },
  // { name: "Developer Story", path: "/developer-story" }
];

interface NavLinkProps {
  index?: number;
  name: string;
  path: string;
  linkColor: string;
  onClose: () => void;
}

const NavLink = (props: NavLinkProps) => {
  const router = useRouter();
  const link = {
    bg: useColorModeValue('gray.200', 'gray.900'),
    color: useColorModeValue('blue.500', 'blue.200'),
  };

  return (
    <NextLink href={props.path} passHref>
      <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
          textDecoration: 'none',
          bg: link.bg,
        }}
        bg={router.pathname === props.path ? link.bg : 'transparent'}
        color={router.pathname === props.path ? props.linkColor : 'inherit'}
        onClick={() => props.onClose()}
      >
        {props.name}
      </Link>
    </NextLink>
  );
};

interface MenuLinkProps {
  name: string;
  path: string;
  color: string;
  bg: string;
  rPath: string;
  onClose: () => void;
}

const MenuLink = (props: MenuLinkProps) => {
  const iconsObj: any = {
    '/tech-stack': <Icon as={AiTwotoneThunderbolt} size={18} color={props.color} />,
    '/open-source': <Icon as={BsBook} size={18} color={props.color} />,
    '/achievements': <Icon as={BsCheckCircle} size={18} color={props.color} />,
    '/projects': <Icon as={MdTimeline} size={18} color={props.color} />,
    // '/changelog': <Icon as={CgArrowsExchange} size={18} color={props.color} />,
  };

  return (
    <NextLink href={props.path} passHref>
      <Link onClick={() => props.onClose()}>
        <MenuItem
          color={props.rPath === props.path && props.color}
          bg={props.rPath === props.path && props.bg}
        >
          <HStack>
            {iconsObj[props.path]}
            <Text>{props.name}</Text>
          </HStack>
        </MenuItem>
      </Link>
    </NextLink>
  );
};

export default function NavBar() {
  const linkColor = useLinkColor();
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const menuProps = {
    bg: useColorModeValue('gray.200', 'gray.900'),
    color: useColorModeValue('blue.500', 'blue.200'),
  };

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
              <MotionBox whileHover={{ scale: 1.2 }} shadow="md" rounded="full">
                <NextLink href={'/'} passHref>
                  <Avatar
                    as={Link}
                    size={'sm'}
                    showBorder={true}
                    // borderColor={linkColor}
                    src={'https://avatars2.githubusercontent.com/u/37842853?v=4'}
                  />
                </NextLink>
              </MotionBox>
              <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}
              >
                {webLinks.map((link, index) => (
                  <NavLink
                    key={index}
                    name={link.name}
                    path={link.path}
                    linkColor={linkColor}
                    onClose={onClose}
                  />
                ))}
                <Menu autoSelect={false} isLazy>
                  {({ isOpen, onClose }) => (
                    <>
                      <MenuButton
                        as={Button}
                        variant="ghost"
                        size="sm"
                        px={2}
                        py={1.5}
                        fontSize={'1em'}
                        rounded={'md'}
                        height={'auto '}
                        _focus={{ boxShadow: 'none' }}
                        rightIcon={<BiChevronDown size={18} />}
                      >
                        Links
                      </MenuButton>
                      <MenuList zIndex={5}>
                        {dropdownLinks.map((link, index) => (
                          <MenuLink
                            key={index}
                            path={link.path}
                            name={link.name}
                            onClose={onClose}
                            color={linkColor}
                            bg={menuProps.bg}
                            rPath={router.pathname}
                          />
                        ))}
                      </MenuList>
                    </>
                  )}
                </Menu>
              </HStack>
            </HStack>
            <Flex alignItems={'center'}>
              <Link href={'https://github.com/cr0w1'} target="_blank">
                <Button
                  rounded='xl' 
                  size={'sm'}
                  mr={4}
                >
                  <BsGithub/>
                </Button>
              </Link>
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
            <Box
              pb={4}
              w={['100%', '100%', '80%']}
              maxW={800}
              display={['inherit', 'inherit', 'none']}
            >
              <Stack as={'nav'} spacing={4}>
                {mobileLinks.map((link, index) => (
                  <NavLink
                    key={index}
                    index={index}
                    name={link.name}
                    path={link.path}
                    linkColor={linkColor}
                    onClose={onClose}
                  />
                ))}
              </Stack>
            </Box>
          ) : null}
        </Container>
      </Box>
    </>
  );
}