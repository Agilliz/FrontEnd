import React from 'react'

const Input = (props) => {
  return (
    <>
        <div class={props.size || "relative w-full z-0 mb-5 group"}>
          <input value={props.value || ''} onChange={props.onChange} type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-agilzorange focus:outline-none focus:ring-0 focus:border-agilzorange peer" placeholder="" required />
          <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-agilzblue peer-focus:dark:text-agilzblue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{props.label}</label>
        </div>
    </>
    
    
  )
}

export default Input