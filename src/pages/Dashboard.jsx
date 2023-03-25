import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import { Box, Card, CardBody, CardFooter, CardHeader, Container, Flex, Heading, HStack, SimpleGrid, Text, Button, Divider } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

export default function Dashboard() {
  const tasks = useLoaderData();
  // const boxStyles = {
  //   p: '10px',
  //   bg: 'purple.400',
  //   color: 'white',
  //   m: '10px',
  //   textAlign: 'center',
  //   filter: 'blur(2px)',
  //   ':hover': {
  //     color: 'black',
  //     bg:'blue.300'
  //   }
  // }

  return (
    <SimpleGrid p="10px" columns={4} spacing={10} minChildWidth="250px">
      {/* <Box bg="white" h="200px" border="1px solid">
        <Text color={{ base: "red", md: "blue", lg: "yellow" }}> Hello</Text>
      </Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>

      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>

      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box> */}

      {tasks &&
        tasks.map((task) => (
          <Card key={task.id} borderTop='8px' borderColor='purple.200' bg= 'white'>
            <CardHeader>
              <Flex gap={5}>
                <Box w='50px' h='50px'>
                  <Text>AV</Text>
                </Box>
                <Box>
                  <Heading as= 'h3' size='sm'>{task.title}</Heading>
                  <Text>by {task.author}</Text>
                </Box>
              </Flex>
            </CardHeader>
            <CardBody>
              <Text color="gray.500">{task.description}</Text>
            </CardBody>
            <Divider borderColor='gray.200' />

            <CardFooter>
              <HStack>
                <Button variant='ghost' leftIcon={<ViewIcon />}>Watch</Button>
                <Button  variant='ghost' leftIcon={<EditIcon />}>Comment</Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
    // <Container maxWidth='4xl' py = '20px'>
    // <Heading>Chakra UI Components</Heading>

    //   <Text ml='30px'>
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum delectus hic eius reprehenderit cum magni culpa dignissimos, assumenda, atque
    //   </Text>

    //   <Text ml='30px' color = 'blue.500' fontWeight='bold'>
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum delectus hic eius reprehenderit cum magni culpa dignissimos, assumenda, atque
    //   </Text>

    //   <Box my='30px' p='20px' bg='orange'>
    //     <Text color = 'white' >This is a box</Text>
    //   </Box>

    //   <Box sx = {boxStyles}>
    //     Hello, Mustafa
    //   </Box>

    //   </Container>
  );
}

export const taskLoader = async () => {
  const res = await fetch("http://localhost:3000/tasks");
  return res.json();
};
