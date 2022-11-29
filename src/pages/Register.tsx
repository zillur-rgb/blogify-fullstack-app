import { ChevronLeftIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import signUp from '../images/signUp.jpg';

const Register = () => {
  return (
    <HStack maxH={'100vh'} overflow="hidden" spacing={0} pos="relative">
      <Box
        pos={'absolute'}
        top="10"
        left={10}
        bg={'#fff'}
        borderRadius="50px"
        w={'70px'}
        h="70px"
        display={'flex'}
        alignItems={'center'}
        justifyContent="center"
        cursor={'pointer'}
        _hover={{
          opacity: '.8',
        }}
      >
        <Icon as={ChevronLeftIcon} fontSize={48} color="#000" />
      </Box>
      <Image src={signUp} w={'50%'} />
      <Box as={'form'} w="50%" mt={10}>
        <Flex w="100%">
          <Text py={12} mx="auto" fontSize={32} fontWeight="bold">
            Sign Up to Experience more of this robust blog site.
          </Text>
        </Flex>
        <VStack spacing={4}>
          <Input
            placeholder="Name"
            bg={'gray.100'}
            border={0}
            color={'gray.500'}
            _placeholder={{
              color: 'gray.500',
            }}
            w="50%"
          />
          <Input
            placeholder="email@example.io"
            bg={'gray.100'}
            border={0}
            color={'gray.500'}
            _placeholder={{
              color: 'gray.500',
            }}
            type="email"
            w="50%"
          />
          <Input
            placeholder="Password"
            bg={'gray.100'}
            border={0}
            color={'gray.500'}
            _placeholder={{
              color: 'gray.500',
            }}
            w="50%"
            type={'password'}
          />
          <Button
            fontFamily={'heading'}
            mt={8}
            mx="auto"
            w={'50%'}
            bg="brand.100"
            color={'white'}
            _hover={{
              bg: 'brand.300',
              boxShadow: 'xl',
            }}
          >
            Submit
          </Button>
        </VStack>
      </Box>
    </HStack>
  );
};

export default Register;
