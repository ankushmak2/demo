import React from 'react'
import '../index.css';
//import './App.css';
//import './style.css';

export const Login = () => {
  return (
    <div>    <div className='flexs'>
    <div className='new'>
    <div class="min-h-full  flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
<div class="max-w-md w-full 
 space-y-8">
  <div>
    <img class="mx-auto h-12 w-auto" src="download.jfif" alt="Workflow"/>
    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Log in to your account</h2>
    {/* <p class="mt-2 text-center text-sm text-gray-600">
      Or
      <a href="#" class="font-medium text-indigo-600 nhover:text-indigo-500"> start your 14-day free trial </a>
    </p> */}
  </div>
  <form class="mt-8 space-y-6" action="#" method="POST">
    <input type="hidden" name="remember" value="true"/>
    <div class="rounded-md shadow-sm -space-y-px">
      <div class="pb-4 ...">
        <label for="email-address" class="sr-only pb-8 ...	 ">Email address</label>
        <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"/>
      </div>
      <div class ="pb-4...">
        <label for="password" class="sr-only">Password</label>
        <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"/>
      </div>
    </div>

    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
        <label for="remember-me" class="ml-2 block text-sm text-gray-900"> Remember me </label>
      </div>

      <div class="text-sm">
        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
      </div>
    </div>

    <div className='butt'>
     
     <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-06 px-40 rounded-full">
 Register
</button>
   </div>
  </form>
</div>

</div>
</div>
  </div></div>
  )
}
