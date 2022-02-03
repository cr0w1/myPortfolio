import { Avatar, Box, Container, Link, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import NavBar from './components/nav_bar/nav_bar'

const Home: NextPage = () => {
  return (
    <>
      <Container  maxW='container.md'>
        <Box p={20} display={{ md: 'flex' }}>
          <Box flexShrink={0}>
            <Avatar
              size='2xl' 
              style={{ border: '2px solid #2AB14B'}}
              src={
                'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
              }
            />
          </Box>
          <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
            <Text
              fontWeight='bold'
              textTransform='uppercase'
              fontSize='sm'
              letterSpacing='wide'
              color='teal.600' 
            >
              Marketing
            </Text>
            <Link
              mt={1}
              display='block'
              fontSize='lg'
              lineHeight='normal'
              fontWeight='semibold'
              href='#'
            >
              Finding customers for your new business
            </Link>
            <Text mt={2} color='gray.500'>
              Getting a new business off the ground is a lot of hard work. Here are five
              ideas you can use to find your first customers.
            </Text>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default Home
