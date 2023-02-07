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
import 'twin.macro'

const GenerateCarbonTokenPage: NextPage = () => {
  const { api, account, isConnected, signer } = useInkathon()
  const { contract } = useRegisteredContract(ContractIds.carbonToken)
  const [fetchIsLoading, setFetchIsLoading] = useState<boolean>()
  const [totalSupply, setTotalSupply] = useState<string>()
  const [updateIsLoading, setUpdateIsLoading] = useState<boolean>()

  const fetchTotalSupply = async () => {
    if (!contract || !api) return
    setFetchIsLoading(true)
    try {
      const result = await contractQuery(api, '', contract, 'total_supply')
      const _totalSupply = unwrapResultOrError<string>(result)
      setTotalSupply(_totalSupply)
    } catch (e) {
      console.error(e)
      toast.error('Error while fetching greeting. Try again…')
    } finally {
      setFetchIsLoading(false)
    }
  }
  useEffect(() => {
    fetchTotalSupply()
  }, [contract])

  return (
    <>
      <div>
        <h1 tw="mt-8 ml-8 font-black font-mono text-4xl tracking-tight">
          Generate Carbon Token Page
        </h1>
        <h2>Total supply is {totalSupply} </h2>
      </div>
    </>
  )
}

export default GenerateCarbonTokenPage
