export const meta = () => ([
    {title : 'Hire-Scan | AUTH' },
    {name : 'description', content : 'Log into your account'},
])

import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router';
import { usePuterStore } from '~/lib/puter'

function auth() {

  const { isLoading , auth} = usePuterStore();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const next = params.get('next') ?? '/';
  const navigate = useNavigate();
  useEffect(()=> {
    if(auth.isAuthenticated) navigate(next)
  }, [auth.isAuthenticated, next, navigate]
)
  return (
    <main className='bg-[url("resume-scorer/public/images/bg-auth.svg")] bg-cover min-h-screen flex items-center justify-center'>
        <div className="gradient-border rounded-2xl shadow-lg ">
          <section className='flex flex-col gap-8 bg-white rounded-2xl p-10'>
            <div className="flex flex-col items-center gap-4 text-center">
              <h1>WELCOME !</h1>
              <h2>Log in to your account to continue.</h2>
            </div>
            <div className="">
              {isLoading ? (
                <button className='auth-button animate-pulse'>
                  <p>Signing You In</p>
                </button>
              ) : (
              <>
              {auth.isAuthenticated ? (
                <button className='auth-button' onClick={auth.signOut}>LOG OUT</button>
              ) : 
              (

                <button className='auth-button' onClick={auth.signIn}>LOG IN</button>
              )
              }

              </>
            )}
            </div>
          </section>
        </div>
    </main>
  )
}

export default auth
