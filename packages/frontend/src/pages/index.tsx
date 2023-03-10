import { HomePageTitle } from '@components/home/HomePageTitle'
import { NavigationBar } from '@components/home/NavigationBar'
import { CenterBody } from '@components/layout/CenterBody'
import { ChainInfo } from '@components/web3/ChainInfo'
import { ConnectButton } from '@components/web3/ConnectButton'
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
        <NavigationBar />

        {/* Chain Metadata Information */}
        <ChainInfo />
      </div>

      <CenterBody tw="mt-20 mb-10 px-5"></CenterBody>
    </>
  )
}

export default HomePage
