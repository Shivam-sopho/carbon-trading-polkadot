import { Button } from '@chakra-ui/react'
import { HomePageTitle } from '@components/home/HomePageTitle'
import { HomeTopBar } from '@components/home/HomeTopBar'
import { CenterBody } from '@components/layout/CenterBody'
import { ChainInfo } from '@components/web3/ChainInfo'
import { ConnectButton } from '@components/web3/ConnectButton'
import { GreeterContractInteractions } from '@components/web3/GreeterContractInteractions'
import { useInkathon } from '@scio-labs/use-inkathon'
import type { NextPage } from 'next'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import 'twin.macro'

const HomePage: NextPage = () => {
  // Display `useInkathon` error messages (optional)
  const { error } = useInkathon()
  useEffect(() => {
    if (!error) return
    toast.error(error.message)
  }, [error])

  return (
    <>
      <div tw="flex flex-row justify-between">
        {/* Title */}
        <HomePageTitle />

        {/* Connect Wallet Button */}
        <ConnectButton />
      </div>
      <div tw="mr-8 flex flex-row justify-between">
        {/* Navigation Buttons */}
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
        {/* Chain Metadata Information */}
        <ChainInfo />
      </div>

      <CenterBody tw="mt-20 mb-10 px-5"></CenterBody>
    </>
  )
}

export default HomePage
