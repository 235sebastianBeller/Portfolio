"use client" // porque usa un use 

import React from 'react'
import {itemsNavbar} from "@/data"
import  Link from 'next/link'
import { usePathname} from 'next/navigation'

export const Navbar = () => {
    const router=usePathname();// para saber en que ruta estamos o pagina
  return (
    <div className='fixed z-40 flex flex-col items-center justify-center w-full mt-2 h-max bottom-2 '>
       <nav>
                <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 background-blur-sm">
                    {itemsNavbar.map((item) => (
                        <div
                            key={item.id}
                            className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary 'bg-secondary' 
                                ${router===item.link && 'bg-secondary'}`// si la ruta es igual a la del item entonces el item del navbar se queda pintado
                            }
                            data-tooltip-target="tooltip-default">
                            <Link href={item.link}>{item.icon} </Link>
                        </div>
                    ))}
                </div>
            </nav>
        </div>
  )
}
