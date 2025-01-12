import React from 'react'

function Navbar() {
    return (
        <nav className='bg-slate-700 flex justify-between items-center px-28 h-14 '>
            <div className="logo text-white font-bold">
                &lt;
                <span className='text-green-500 font-bold tracking-widest'>Pass</span>
                KIPPER
                <span className='text-green-500'>/&gt;</span>
            </div>
            <ul className='flex gap-10'>
                <li className='hover:font-bold text-white'>Home</li>
                <li className='hover:font-bold text-white'>Contact</li>
                <li className='hover:font-bold text-white'>About</li>
            </ul>

        </nav>
    )
}

export default Navbar