import { alephzeroTestnet, SubstrateDeployment } from '@scio-labs/use-inkathon'

export enum ContractIds {
  greeter = 'greeter',
  pair = 'pair',
  carbonToken = 'carbonToken',
}

export const getDeployments = async (): Promise<SubstrateDeployment[]> => {
  return [
    {
      contractId: ContractIds.greeter,
      networkId: alephzeroTestnet.network,
      abi: await import(`@inkathon/contracts/deployments/greeter/metadata.json`),
      address: (await import(`@inkathon/contracts/deployments/greeter/alephzero-testnet.json`))
        .address,
    },
    {
      contractId: ContractIds.pair,
      networkId: alephzeroTestnet.network,
      abi: await import(`@inkathon/contracts/deployments/pair/metadata.json`),
      address: (await import(`@inkathon/contracts/deployments/pair/alephzero-testnet.json`))
        .address,
    },
    {
      contractId: ContractIds.carbonToken,
      networkId: alephzeroTestnet.network,
      abi: await import(`@inkathon/contracts/deployments/shares/metadata.json`),
      address: (await import(`@inkathon/contracts/deployments/shares/shibuya-testnet.json`))
        .address,
    },
    // TODO Add deployment for development chain
    // {
    //   contractId: ContractIds.greeter,
    //   networkId: development.network,
    //   abi: await import(`@inkathon/contracts/deployments/greeter/metadata.json`),
    //   address: (await import(`@inkathon/contracts/deployments/greeter/development.json`)).address,
    // },
  ]
}
