import { Flex, Box, Heading , Text, Button, Spacer, HStack} from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex as='nav' p='10px' alignItems='center' >
      <Heading as= 'h1'> Dojo Task</Heading>
      <Spacer />
      <HStack spacing='20px'>

      <Box bg='gray.200' p ='10px'>M</Box>
      <Text>Mustafaraziq30@gmail.com</Text>
      <Button colorScheme='purple'>Logout</Button>
      </HStack>
    </Flex>
    // <Flex bg='gray.200' justify='space-between' wrap = 'wrap' gap = '2'>
    //   <Box w='150px' h='50px' bg= 'red' >1</Box>
    //   <Box w='150px' h='50px' bg= 'blue'>2</Box>
    //   <Box w='150px' h='50px' bg= 'green' flexGrow='1'>3</Box>
    //   <Box w='150px' h='50px' bg= 'yellow' flexGrow='2' >4</Box>
    // </Flex>
  )
}
