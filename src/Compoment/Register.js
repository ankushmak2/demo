import React from 'react'

export const Register = () => {
  return (
    <div>
        <div className='flexs'>
    <div className='new'>
    <div class="min-h-full  flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
<div class="max-w-md w-full 
 space-y-8">
  <div>
    <img class="mx-auto h-12 w-auto" src="download.jfif" alt="Workflow"/>
    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
    {/* <p class="mt-2 text-center text-sm text-gray-600">
      Or
      <a href="#" class="font-medium text-indigo-600 nhover:text-indigo-500"> start your 14-day free trial </a>
    </p> */}
  </div>
  <form class="mt-8 space-y-6">
    <input type="hidden" name="remember" value="true"/>
    <div class="rounded-md shadow-sm -space-y-px">
      <div class="pb-4 ...">
        <label for="First-Name" class="sr-only pb-8 ...	 ">First Name</label>
        <input id="First-Name"name="First-Name" type="First-Name" autocomplete="First-Name" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="First Name"/>
      </div>
      <div class="pb-4 ..."  >
        <label for="Last-Name" class="sr-only">Last Name</label>
        <input id="Last-Name" name="Last-Name" type="Last-Name" autocomplete="Last-Name" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Last Name"/>
      </div>
         <div class="pb-4 ...">
        <label for="email-address" class="sr-only pb-8 ...	 ">Email address</label>
        <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"/>
      </div>
      
      <div class="pb-4 ...">
        <label for="Contact" class="sr-only">Contact</label>
        <input id="Contact" name="Contact" type="tel" autocomplete="Contact" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Contact"/>
      </div>
      <div class="pb-4 ...">
        <label for="Password" class="sr-only">Password</label>
        <input id="Password" name="Password" type="Password" autocomplete="Password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"/>
      </div>
      
      <div class="pb-4 ...">
        <label for="address" class="sr-only pb-8 ...	 "> address</label>
        <input id="address" name="address" type="address" autocomplete="address" required class="appearance-none rounded-none h-16	 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder=" Address"/>
      </div>
      <div >
      <select className="drop" name="selectList" id="selectList">
   <option value="option 1">Auditor</option>
   <option value="option 2">Option 2</option>
</select>
</div>
    </div>

    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
        <label for="remember-me" class="ml-2 block text-sm text-gray-900"> Remember me </label>
      </div>

      <div class="text-sm">
        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Log In? </a>
      </div>
    </div>

    <div className='butt'>
     
      <button onClick={() =>{
          window.alert("register")
      }} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-06 px-40 rounded-full">
  Register
</button>
    </div>
  </form>
</div>

</div>
</div>
  </div>
    </div>
  )
}
