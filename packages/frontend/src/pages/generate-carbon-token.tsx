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

  return (
    <>
      <div>
        <h1 tw="mt-8 ml-8 font-black font-mono text-4xl tracking-tight">Generate Carbon Tokens</h1>

        <PublicTransportHistory />
      </div>
    </>
  )
}

export default GenerateCarbonTokenPage
