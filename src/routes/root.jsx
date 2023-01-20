import * as React from 'react'

// 1. import `ChakraProvider` component
import { Box, Button, ButtonGroup, Card, CardBody, CardHeader, Center, ChakraProvider, Container, Flex, Heading, Spacer } from '@chakra-ui/react'
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'

export default function Root() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Box w="100%" p="2" mb={2} boxShadow="lg" borderBottomRadius="lg">
        <Flex>
          <Box>
            <Heading>Funduluka</Heading>
          </Box>
          <Spacer />
          <Box>
            <Heading>Shangala</Heading>
          </Box>
        </Flex>
      </Box>
      <Container>
        <Card>
          <CardBody>
            <ButtonGroup>
              <Button leftIcon={<PhoneIcon />}>+260 974 836436</Button>
              <Button leftIcon={<EmailIcon />}>fshangala@gmail.com</Button>
            </ButtonGroup>
          </CardBody>
        </Card>
      </Container>
      <Box>
        footer
      </Box>
    </ChakraProvider>
  )
}