import type { NextPage } from 'next'
import { ContractIds } from '@deployments/deployments'
import {
  contractQuery,
  contractTx,
  unwrapResultOrError,
  useInkathon,
  useRegisteredContract,
} from '@scio-labs/use-inkathon'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import PublicTransportHistory from '@components/home/PublicTransportHistory'
import 'twin.macro'

const GenerateCarbonTokenPage: NextPage = () => {
  const { api, account, isConnected, signer } = useInkathon()
  const { contract } = useRegisteredContract(ContractIds.carbonToken)
  const [fetchIsLoading, setFetchIsLoading] = useState<boolean>()
  const [totalSupply, setTotalSupply] = useState<string>()
  const [updateIsLoading, setUpdateIsLoading] = useState<boolean>()

  // const fetchTotalSupply = async () => {
  //   if (!account || !contract || !signer || !api) {
  //     console.log(account)
  //     console.log(contract)
  //     console.log(signer)
  //     console.log(api)
  //     toast.error('Wallet not connected. Try again…')
  //     return
  //   }
  //   setFetchIsLoading(true)
  //   try {
  //     await contractTx(
  //       api,
  //       account.address,
  //       contract,
  //       'mint',
  //       {},
  //       [349, account.address],
  //       (result) => {
  //         if (result?.status?.isInBlock) {
  //           console.log('Tokens generated')
  //         }
  //       },
  //     )
  //   } catch (e) {
  //     console.error(e)
  //     toast.error('Error while fetching greeting. Try again…')
  //   } finally {
  //     setFetchIsLoading(false)
  //   }
  // }
  // useEffect(() => {
  //   fetchTotalSupply()
  // }, [contract])

  return (
    <>
      <div>
        <h1 tw="mt-8 ml-8 font-black font-mono text-4xl tracking-tight">
          Generate Carbon Token Page
        </h1>

        <PublicTransportHistory />
      </div>
    </>
  )
}

export default GenerateCarbonTokenPage
