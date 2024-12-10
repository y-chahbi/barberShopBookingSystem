import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='Navbar bg-transparent'>
        <ul className='flex flex-row p-4 text-black justify-end'>
            <li className='mx-1'><Link href={""}>About</Link></li>
            <li className='mx-1'><Link href={""}>Our Team</Link></li>
            <li className='mx-1'><Link href={""}>Statistics</Link></li>
            <li className='mx-1'><Link href={""}>Book Now</Link></li>
            <li className='mx-1'><Link href={""}>Login</Link></li>
            <li className='mx-1'><Link href={""}>Register</Link></li>
            <li className='mx-1'><Link href={""}>Logout</Link></li>
        </ul>
    </div>
  )
}

export default Navbar;