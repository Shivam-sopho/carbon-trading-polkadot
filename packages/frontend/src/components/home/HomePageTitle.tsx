import Image from 'next/image'
import Link from 'next/link'
import githubCircleIcon from 'public/brand/inkathon-logo.png'
import githubIcon from 'public/icons/github-button.svg'
import sponsorIcon from 'public/icons/sponsor-button.svg'
import vercelIcon from 'public/icons/vercel-button.svg'
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
        <Link
          href={githubHref}
          target="_blank"
          className="group"
          tw="flex cursor-pointer flex-col items-center"
        >
          {/* Title */}
          <h1 tw="mt-8 font-black text-4xl tracking-tight">{title}</h1>
        </Link>
        <div tw="my-14 w-14 bg-gray-800 h-[2px]" />
      </div>
    </>
  )
}
