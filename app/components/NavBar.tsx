import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { auth, signIn, signOut } from '@/auth';

const NavBar = async () => {
  const session = await auth();

  return (
    <div className='bg-dark'>
      <header>
        <nav className='flex justify-between items-center pr-6 h-20'>
          <Link href='/'>
            <Image src='/logo.png' alt='logo' width={70} height={70}></Image>
          </Link>

          <div className='flex gap-8 text-white'>
            {session && session?.user ? (
              // logged in
              <>
                <Link href='/'>
                  <span>Create</span>
                </Link>

                <form
                  action={async () => {
                    'use server';
                    await signOut({ redirectTo: '/' });
                  }}
                >
                  <button type='submit'>Logout</button>
                </form>

                <Link href={`/user/${session?.user?.id}`}>
                  <span>{session?.user?.name}</span>
                </Link>
              </>
            ) : (
              // not logged in
              <form
                action={async () => {
                  'use server';
                  await signIn('github');
                }}
              >
                <button type='submit' className='text-white'>
                  Login
                </button>
              </form>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
