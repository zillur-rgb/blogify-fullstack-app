import { ChevronLeftIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  Stack,
  VStack,
  Text,
  Flex,
  Icon,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import loginImage from '../images/loginImage.jpg';

const Login = () => {
  return (
    <HStack maxH={'100vh'} overflow="hidden" spacing={0}>
      <Link to="/">
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
      </Link>
      <Image src={loginImage} w={'50%'} />
      <Box as={'form'} w="50%" mt={10}>
        <Flex w="100%">
          <Text py={12} mx="auto" fontSize={32} fontWeight="bold">
            Sign Up to Experience more of this robust blog site.
          </Text>
        </Flex>
        <VStack spacing={4}>
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

export default Login;
