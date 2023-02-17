import { Button } from '@chakra-ui/react'
import { FC } from 'react'
import 'twin.macro'

export const NavigationBar: FC = () => {
  return (
    <>
      <div tw="ml-8 flex flex-row justify-between">
        <Button
          onClick={() => {}}
          isLoading={false}
          size="md"
          py={6}
          fontWeight="bold"
          rounded="2xl"
          colorScheme="purple"
          mt={8}
          mr={8}
        >
          Generate Carbon Token
        </Button>
        <Button
          onClick={() => {}}
          isLoading={false}
          size="md"
          py={6}
          fontWeight="bold"
          rounded="2xl"
          colorScheme="purple"
          mt={8}
          mr={8}
        >
          Lend Carbon Token
        </Button>
        <Button
          onClick={() => {}}
          isLoading={false}
          size="md"
          py={6}
          fontWeight="bold"
          rounded="2xl"
          colorScheme="purple"
          mt={8}
          mr={8}
        >
          Swap Carbon Token
        </Button>

        <Button
          onClick={() => {}}
          isLoading={false}
          size="md"
          py={6}
          fontWeight="bold"
          rounded="2xl"
          colorScheme="purple"
          mt={8}
          mr={8}
        >
          Repay Loan
        </Button>

        <Button
          onClick={() => {}}
          isLoading={false}
          size="md"
          py={6}
          fontWeight="bold"
          rounded="2xl"
          colorScheme="purple"
          mt={8}
          mr={8}
        >
          Marketplace
        </Button>

        <Button
          onClick={() => {}}
          isLoading={false}
          size="md"
          py={6}
          fontWeight="bold"
          rounded="2xl"
          colorScheme="purple"
          mt={8}
          mr={8}
        >
          Admin Portal
        </Button>
      </div>
    </>
  )
}
