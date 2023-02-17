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
      <div tw="mr-8t flex flex-row justify-end">
        {/* Chain Metadata Information */}
        <ChainInfo />
      </div>

      <CenterBody tw="mt-20 mb-10 px-5">
        <div tw="mt-10 flex w-full flex-wrap items-start justify-center gap-4">
          {/* Greeter Read/Write Contract Interactions */}
          <GreeterContractInteractions />
        </div>
      </CenterBody>
    </>
  )
}

export default HomePage
