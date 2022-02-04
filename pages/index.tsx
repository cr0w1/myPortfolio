import { Avatar, Box, Container, Flex, Link, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { MotionBox, MotionFlex } from './components/animations/motion'
import NextLink from 'next/link';
import { useLinkColor } from './components/theme/colors';

const ANIMATION_DURATION = 0.5
const ORANGE = '#ff9400'
const emojis = ['👋', '👍', '🖐']

const Home: NextPage = () => {

  const linkColor = useLinkColor()

  return (
    <Container>
      <Flex direction="column" align="center">
        <Flex direction={['column', 'column', 'row']}>
          <MotionBox
            
            opacity="0"
            initial={{
              translateX: -150,
              opacity: 0,
            }}
            animate={{
              translateX: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            }}
            m="auto"
            mb={[16, 16, 'auto']}
          >
            <MotionBox whileHover={{ scale: 1.2 }} rounded="full" shadow="lg">
              <Avatar
                size={'2xl'}
                showBorder={true}
                borderColor={linkColor}
                src={'https://avatars2.githubusercontent.com/u/37842853?v=4'}
              />
            </MotionBox>
          </MotionBox>
          <MotionFlex
            position="relative"
            ml={['auto', 'auto', 16]}
            m={['auto', 'initial']}
            w={['90%', '85%', '80%']}
            maxW="800px"
            opacity="0"
            justify="center"
            direction="column"
            initial={{
              opacity: 0,
              translateX: 150,
            }}
            animate={{
              opacity: 1,
              translateX: 0,
              transition: {
                duration: 0.5,
              },
            }}
          >
            <Box position="relative">
              <Box
                position="absolute"
                width="full"
                fontSize="2xl"
                textAlign="center"
              >
                {emojis.map((item, index) => {
                  return (
                    <MotionBox
                      key={index}
                      position="absolute"
                      right="80%"
                      // animate={
                      //   showEmogi && emojiCounter === index ? 'show' : 'hide'
                      // }
                      variants={{
                        hide: { translateY: -80, opacity: 0 },
                        show: {
                          translateY: [0, -40, -60],
                          opacity: [0, 1, 0],
                        },
                      }}
                      initial="hide"
                    >
                      {item}
                    </MotionBox>
                  )
                })}
              </Box>
              <MotionBox whileHover={{ translateY: -5 }} width="max-content">
                Opa
              </MotionBox>
            </Box>
          </MotionFlex>
        </Flex>

        <MotionBox
          w="100%"
          opacity="0"
          initial={{
            translateY: 80,
          }}
          animate={{
            translateY: 0,
            opacity: 1,
            transition: {
              delay: 0.5 - 0.1,
              duration: 0.5,
            },
          }}
          zIndex={1}
        >
          <Box mt={10}>
            ewrerewr
          </Box>
        </MotionBox>
      </Flex>
    </Container>
  )
}

export default Home
