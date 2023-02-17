import { Button } from '@chakra-ui/react'
import { FC } from 'react'
import { useRouter } from 'next/router'
import 'twin.macro'

export const NavigationBar: FC = () => {
  const router = useRouter()

  return (
    <>
      <div tw="ml-8 flex flex-row justify-between">
        <Button
          onClick={() => {
            router.push('/generate-carbon-token')
          }}
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
          onClick={() => {
            router.push('/lend-carbon-token')
          }}
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
          onClick={() => {
            router.push('/swap-carbon-token')
          }}
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
          onClick={() => {
            router.push('/repay-loan')
          }}
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
          onClick={() => {
            router.push('/marketplace')
          }}
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
          onClick={() => {
            router.push('/admin')
          }}
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
