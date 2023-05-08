import { Box, HStack, IconButton, Link, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { SiGithub } from 'react-icons/si';
import { Container } from '../Container';

export function Footer() {
  return (
    <Box as="footer" bg="gray.800" color="white" borderTopWidth={2}>
      <Container py={4}>
        <Stack spacing={4}>
          <Text fontSize="sm" color="gray.500">
            Tellaprompt © 2023
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
