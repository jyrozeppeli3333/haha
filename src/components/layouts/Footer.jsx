import {
  Container,
  Text,
  Stack,
  // ButtonGroup,
  // IconButton,
} from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Container
      as="footer"
      role="contentinfo"
      marginTop={['7rem', '1rem', '1rem']}
    >
      <Stack
        spacing={{
          base: '2',
          md: '5',
        }}
      >
        <Stack justify="space-between" direction="column" align="center">
          <Text fontSize="2xl" fontWeight="bold" color="subtle" display="none">
            {`ich bin Aktan`}
          </Text>
          
          
        </Stack>
      </Stack>
    </Container>
  );
};
