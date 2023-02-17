import Link from 'next/link'
import { FC } from 'react'
import 'twin.macro'

export const HomePageTitle: FC = () => {
  const title = 'Carbon Trading Protocol'
  const desc = 'Full-Stack DApp Boilerplate for Substrate and ink! Smart Contracts'
  const githubHref = 'https://github.com/scio-labs/inkathon'
  const deployHref = 'https://github.com/scio-labs/inkathon#deployment'
  const sponsorHref = 'mailto:hello@scio.xyz'

  return (
    <>
      <div tw="mx-8 flex h-32 flex-col items-center text-center font-mono">
        {/* Title */}
        <h1 tw="mt-8 font-black text-4xl tracking-tight">{title}</h1>
      </div>
    </>
  )
}
