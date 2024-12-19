import React from 'react'
import  Link from 'next/link'
import { socialNetworks } from "@/data";


export const Header = () => {
  return (
    <header className="absolute z-40 inline-block w-full top-3 md:top-5">
<div className="container justify-between max-w-10xl mx-auto md:flex">
    <Link href="/">
    <h1 className="my-3 text-4xl font-bold text-center md:text-left">
            Sebastian
            <span className="text-colortxt">.Beller</span>
        </h1>
    </Link>
    <div className="flex items-center justify-center gap-7">
                        {socialNetworks.map(({ logo, src, id }) => (
                            <Link
                                key={id}
                                href={src}
                                target="_blank"
                                className="transition-all duration-300 hover:text-secondary"
                            >
                                {logo}
                            </Link>
                        ))}
                    </div>
</div>


    </header>
  )
}
