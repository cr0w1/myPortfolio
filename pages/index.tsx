import { Avatar, Box, Container, Flex, Link, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { MotionBox, MotionFlex } from './components/animations/motion'
import NextLink from 'next/link';
import { useLinkColor } from './components/theme/colors';
import Header from './components/shared/header';
import { useEffect, useState } from 'react';

const ANIMATION_DURATION = 0.5
const ORANGE = '#ff9400'
const emojis = ['👋', '👍', '🖐']

const Home: NextPage = () => {

  const linkColor = useLinkColor()
  const [showEmogi, setShowEmoji] = useState(false)
  const [emojiCounter, setEmojiCounter] = useState(-1)

  useEffect(() => {
    const interval = setInterval(() => {
      if (emojiCounter >= 3) setEmojiCounter(0)
    }, 500)
    return () => clearInterval(interval)
  }, [emojiCounter])

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
                duration: ANIMATION_DURATION,
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
                duration: ANIMATION_DURATION,
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
                      animate={
                        showEmogi && emojiCounter === index ? 'show' : 'hide'
                      }
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
                <Header
                  underlineColor={ORANGE}
                  emoji="👋"
                  mt={0}
                  cursor="pointer"
                  width="max-content"
                  onClick={() => {
                    setEmojiCounter((prevCounter) => prevCounter + 1)
                    setShowEmoji(true)
                  }}
                >
                  Olá!
                </Header>
              </MotionBox>
            </Box>
            <Box as="h2" fontSize="2xl" fontWeight="400" textAlign="left">
              Meu nome é{' '}
              <Box as="strong" fontWeight="600">
                Clebson
              </Box>{' '}
                e eu sou um{' '}
              <Box as="span" whiteSpace="nowrap">
                desenvolvedor Full Stack e 
              </Box>{' '}
              <Box as="span" whiteSpace="nowrap">
                um amante de código aberto.
              </Box>
            </Box>
            <Box as="h2" fontSize="2xl" fontWeight="400" mt={5} textAlign="left">
              Este é o meu jardim digital, onde escrevo sobre as coisas que
              trabalhando e compartilhar o que aprendi. 😊 
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
              delay: ANIMATION_DURATION - 0.1,
              duration: ANIMATION_DURATION,
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
