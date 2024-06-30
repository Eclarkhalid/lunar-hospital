import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Header = () => {
  return <>
  <header className="sticky top-0 z-30 flex justify-end h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        

        <UserButton />

      </header>
  </>
}

export default Header