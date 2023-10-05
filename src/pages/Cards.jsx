/* eslint-disable react-hooks/exhaustive-deps */
import { SideNavBar } from '../components/layouts/SideNavBar';
import { TopBar } from '../components/TopBar';
import { SearchBar } from '../components/SearchBar';
import { WhoToFollow } from '../components/cards/WhoToFollow';
import {
  Box,
  Container,
  Grid,
  GridItem,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';

import { MobileMenu } from '../components/layouts/MobileMenu';
import { CreatePostModal } from '../components/CreatePostModal';
import { SearchShop } from '../components/SearchShop';

export const Cards = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen1, onOpen1, onClose1 } = useDisclosure();
  return (
    <Container maxWidth="100vw" padding={0}>
      <TopBar />

      <Grid
        templateColumns={['0.9fr', '0.9fr', '0.9fr', '1fr 3fr 1.5fr']}
        gap="1"
        justifyContent="center"
        marginTop="5rem"
      >
        <Box
          as={GridItem}
          position="sticky"
          top="86px"
          left="10px"
          height="max-content"
          display={['none', 'none', 'none', 'block']}
        >
          <SideNavBar />
        </Box>
        <Box>
          <SearchShop />
          <Flex justifyContent="center" w="98%">
            <Card maxW="sm">
              <CardBody>
                <Image
                  src="https://www.vidal.ru/upload/products/28069-no-spa-24.jpg"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Living room Sofa</Heading>

                  <Text color="blue.600" fontSize="2xl">
                    $450
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue" onClick={onOpen}>
                    description
                  </Button>
                  <Modal
                    closeOnOverlayClick={false}
                    isOpen={isOpen}
                    onClose={onClose}
                  >
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Create your account</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody pb={6}>
                        {/* <Lorem count={2} /> */}
                        <Text>
                          Описание лекарственного препарата Но-шпа® (No-spa®)
                          Основано на официальной инструкции по применению
                          препарата, утверждено компанией-производителем и
                          подготовлено для электронного издания справочника
                          Видаль 2023 года, дата обновления: 2022.12.28
                        </Text>
                      </ModalBody>

                      <ModalFooter>
                        <Button colorScheme="blue" mr={3}>
                          buy
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                  {/* <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button> */}
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src="https://www.vidal.ru/upload/products/21819-paracetamol-supp-altaivit.jpg"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Living room Sofa</Heading>

                  <Text color="blue.600" fontSize="2xl">
                    $450
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue" onClick={onOpen1}>
                    description
                  </Button>
                  <Modal
                    closeOnOverlayClick={false}
                    isOpen={isOpen1}
                    onClose={onClose1}
                  >
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Create your account</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody pb={6}>
                        {/* <Lorem count={2} /> */}
                        <Text>
                          Описание лекарственного препарата Но-шпа® (No-spa®)
                          Основано на официальной инструкции по применению
                          препарата, утверждено компанией-производителем и
                          подготовлено для электронного издания справочника
                          Видаль 2023 года, дата обновления: 2022.12.28
                        </Text>
                      </ModalBody>

                      <ModalFooter>
                        <Button colorScheme="blue" mr={3}>
                          buy
                        </Button>
                        <Button onClick={onClose1}>Cancel</Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                  {/* <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button> */}
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src="https://www.vidal.ru/upload/products/28069-no-spa-24.jpg"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Living room Sofa</Heading>

                  <Text color="blue.600" fontSize="2xl">
                    $450
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    description
                  </Button>
                  {/* <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button> */}
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src="https://www.vidal.ru/upload/products/21819-paracetamol-supp-altaivit.jpg"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Living room Sofa</Heading>

                  <Text color="blue.600" fontSize="2xl">
                    $450
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    description
                  </Button>
                  {/* <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button> */}
                </ButtonGroup>
              </CardFooter>
            </Card>
          </Flex>
          <Flex justifyContent="center" w="98%">
            <Card maxW="sm">
              <CardBody>
                <Image
                  src="https://www.vidal.ru/upload/products/28069-no-spa-24.jpg"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Living room Sofa</Heading>

                  <Text color="blue.600" fontSize="2xl">
                    $450
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    description
                  </Button>
                  {/* <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button> */}
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src="https://www.vidal.ru/upload/products/21819-paracetamol-supp-altaivit.jpg"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Living room Sofa</Heading>

                  <Text color="blue.600" fontSize="2xl">
                    $450
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    description
                  </Button>
                  {/* <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button> */}
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src="https://www.vidal.ru/upload/products/21791-ascorbic-acid-altaivit.jpg"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Living room Sofa</Heading>

                  <Text color="blue.600" fontSize="2xl">
                    $450
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    description
                  </Button>
                  {/* <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button> */}
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src="https://www.vidal.ru/upload/products/22530-analgin-erevanhff.jpg"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Living room Sofa</Heading>

                  <Text color="blue.600" fontSize="2xl">
                    $450
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    description
                  </Button>
                  {/* <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button> */}
                </ButtonGroup>
              </CardFooter>
            </Card>
          </Flex>
          <Flex justifyContent="center" w="98%">
            <Card maxW="sm">
              <CardBody>
                <Image
                  src="https://www.vidal.ru/upload/products/28069-no-spa-24.jpg"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Living room Sofa</Heading>

                  <Text color="blue.600" fontSize="2xl">
                    $450
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    description
                  </Button>
                  {/* <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button> */}
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src="https://www.vidal.ru/upload/products/21819-paracetamol-supp-altaivit.jpg"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Living room Sofa</Heading>

                  <Text color="blue.600" fontSize="2xl">
                    $450
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    description
                  </Button>
                  {/* <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button> */}
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src="https://www.vidal.ru/upload/products/28069-no-spa-24.jpg"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Living room Sofa</Heading>

                  <Text color="blue.600" fontSize="2xl">
                    $450
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    description
                  </Button>
                  {/* <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button> */}
                </ButtonGroup>
              </CardFooter>
            </Card>

            <Card maxW="sm">
              <CardBody>
                <Image
                  src="https://www.vidal.ru/upload/products/21577-activated-charcoal-ubf-uralbiofarm.jpg"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Living room Sofa</Heading>

                  <Text color="blue.600" fontSize="2xl">
                    $450
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    description
                  </Button>
                  {/* <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button> */}
                </ButtonGroup>
              </CardFooter>
            </Card>
          </Flex>
          <Flex justifyContent="center" w="98%">
            <Card maxW="sm">
              <CardBody>
                <Image
                  src="https://www.vidal.ru/upload/products/28069-no-spa-24.jpg"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Living room Sofa</Heading>

                  <Text color="blue.600" fontSize="2xl">
                    $450
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    description
                  </Button>
                  {/* <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button> */}
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src="https://www.vidal.ru/upload/products/21819-paracetamol-supp-altaivit.jpg"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Living room Sofa</Heading>

                  <Text color="blue.600" fontSize="2xl">
                    $450
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    description
                  </Button>
                  {/* <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button> */}
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src="https://www.vidal.ru/upload/products/21791-ascorbic-acid-altaivit.jpg"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Living room Sofa</Heading>

                  <Text color="blue.600" fontSize="2xl">
                    $450
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    description
                  </Button>
                  {/* <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button> */}
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src="https://www.vidal.ru/upload/products/22530-analgin-erevanhff.jpg"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Living room Sofa</Heading>

                  <Text color="blue.600" fontSize="2xl">
                    $450
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    description
                  </Button>
                  {/* <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button> */}
                </ButtonGroup>
              </CardFooter>
            </Card>
          </Flex>
          <Flex justifyContent="center" w="98%">
            <Card maxW="sm">
              <CardBody>
                <Image
                  src="https://www.vidal.ru/upload/products/28069-no-spa-24.jpg"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Living room Sofa</Heading>

                  <Text color="blue.600" fontSize="2xl">
                    $450
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    description
                  </Button>
                  {/* <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button> */}
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src="https://www.vidal.ru/upload/products/21819-paracetamol-supp-altaivit.jpg"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Living room Sofa</Heading>

                  <Text color="blue.600" fontSize="2xl">
                    $450
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    description
                  </Button>
                  {/* <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button> */}
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src="https://www.vidal.ru/upload/products/28069-no-spa-24.jpg"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Living room Sofa</Heading>

                  <Text color="blue.600" fontSize="2xl">
                    $450
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    description
                  </Button>
                  {/* <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button> */}
                </ButtonGroup>
              </CardFooter>
            </Card>

            <Card maxW="sm">
              <CardBody>
                <Image
                  src="https://www.vidal.ru/upload/products/21577-activated-charcoal-ubf-uralbiofarm.jpg"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Living room Sofa</Heading>

                  <Text color="blue.600" fontSize="2xl">
                    $450
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    description
                  </Button>
                  {/* <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button> */}
                </ButtonGroup>
              </CardFooter>
            </Card>
          </Flex>
          <Flex justifyContent="center" w="98%">
            <Card maxW="sm">
              <CardBody>
                <Image
                  src="https://www.vidal.ru/upload/products/28069-no-spa-24.jpg"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Living room Sofa</Heading>

                  <Text color="blue.600" fontSize="2xl">
                    $450
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    description
                  </Button>
                  {/* <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button> */}
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src="https://www.vidal.ru/upload/products/21819-paracetamol-supp-altaivit.jpg"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Living room Sofa</Heading>

                  <Text color="blue.600" fontSize="2xl">
                    $450
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    description
                  </Button>
                  {/* <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button> */}
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src="https://www.vidal.ru/upload/products/21791-ascorbic-acid-altaivit.jpg"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Living room Sofa</Heading>

                  <Text color="blue.600" fontSize="2xl">
                    $450
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    description
                  </Button>
                  {/* <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button> */}
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src="https://www.vidal.ru/upload/products/22530-analgin-erevanhff.jpg"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Living room Sofa</Heading>

                  <Text color="blue.600" fontSize="2xl">
                    $450
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    description
                  </Button>
                  {/* <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button> */}
                </ButtonGroup>
              </CardFooter>
            </Card>
          </Flex>
          <Flex justifyContent="center" w="98%">
            <Card maxW="sm">
              <CardBody>
                <Image
                  src="https://www.vidal.ru/upload/products/28069-no-spa-24.jpg"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Living room Sofa</Heading>

                  <Text color="blue.600" fontSize="2xl">
                    $450
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    description
                  </Button>
                  {/* <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button> */}
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src="https://www.vidal.ru/upload/products/21819-paracetamol-supp-altaivit.jpg"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Living room Sofa</Heading>

                  <Text color="blue.600" fontSize="2xl">
                    $450
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    description
                  </Button>
                  {/* <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button> */}
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src="https://www.vidal.ru/upload/products/28069-no-spa-24.jpg"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Living room Sofa</Heading>

                  <Text color="blue.600" fontSize="2xl">
                    $450
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    description
                  </Button>
                  {/* <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button> */}
                </ButtonGroup>
              </CardFooter>
            </Card>

            <Card maxW="sm">
              <CardBody>
                <Image
                  src="https://www.vidal.ru/upload/products/21577-activated-charcoal-ubf-uralbiofarm.jpg"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Living room Sofa</Heading>

                  <Text color="blue.600" fontSize="2xl">
                    $450
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    description
                  </Button>
                  {/* <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button> */}
                </ButtonGroup>
              </CardFooter>
            </Card>
          </Flex>
        </Box>

        <Box
          as={GridItem}
          position="sticky"
          top="86px"
          right="10px"
          height="max-content"
          display={['none', 'none', 'none', 'block']}
        >
          <SearchBar />
          <WhoToFollow />
        </Box>
        <Box display={['block', 'block', 'none']}>
          <CreatePostModal />
        </Box>
        <MobileMenu />
      </Grid>
    </Container>
  );
};
