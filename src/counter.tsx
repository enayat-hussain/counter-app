import React, { useState } from 'react';
import { Button, useToast, Box, Flex, Text, Icon } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  const toast = useToast();

  const increment = () => {
    setCount(prevCount => prevCount + 1);

    toast({
      position: 'top-right',
      render: () => (
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          padding="12px 20px"
          gap="8px"
          background="radial-gradient(53.57% 282.15% at 2.14% 50%, rgba(116, 200, 152, 0.15) 0%, rgba(116, 200, 152, 0.03) 100%), #46474F"
          boxShadow="0px 0px 0px 1px rgba(40, 41, 50, 0.04), 0px 2px 2px -1px rgba(40, 41, 50, 0.04), 0px 4px 4px -2px rgba(40, 41, 50, 0.04), 0px 8px 8px -4px rgba(40, 41, 50, 0.06), 0px 16px 32px rgba(40, 41, 50, 0.06)"
          borderRadius="8px"
          border="1px solid"
          color="#FFFFFF"
          sx={{
            borderImageSource: 'linear-gradient(0deg, #6F7076, #6F7076), radial-gradient(53.57% 282.15% at 2.14% 50%, rgba(116, 200, 152, 0.65) 0%, rgba(116, 200, 152, 0.1) 100%)',
          }}
        >
          {/* Custom Circle with Check Icon */}
          <Flex
            width="22px"
            height="22px"
            borderRadius="50%"
            backgroundColor="transparent"
            border="2px solid #74C898"
            alignItems="center"
            justifyContent="center"
          >
            <Icon as={CheckIcon} color="#74C898" boxSize={2}  />
          </Flex>

          <Flex direction="column">
            <Text fontWeight="500" fontSize="14px" fontStyle="normal" lineHeight="16px">
              Incremented
            </Text>
            <Text fontSize="14px">Counter is now {count + 1}</Text>
          </Flex>
        </Box>
      ),
    });
  };

  return (
    <div>
      <Button colorScheme="teal" onClick={increment}>
        +1
      </Button>
      <p>Counter Value: {count}</p>
    </div>
  );
};

export default Counter;
