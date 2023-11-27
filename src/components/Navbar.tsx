import React from 'react'
import Image from 'next/image'

function Navbar() {
  return (
    <div className= "container pt-6"> 
        <div className="flex justify-between item-center">
            <Image src="/logo.png" width={50} height={50} alt="logo" />
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Food</li>
                <li>Dish</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar