import React from 'react';
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

function MyForm_Old() {
  const [name, setName] = useState("");
  const [ifc_class, setIfc_class] = useState("");
  const [thickness, setThickness] = useState("");
  const [message, setMessage] = useState("");


  //This part of the code is reponsible for redirecting.
  //Lets check how to do it for Next.js and React.js
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      let response = await fetch(
        "http://127.0.0.1:8000/api/products/material/dev/testing?export_results=true",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            ifc_class: ifc_class,
            thickness: thickness,
          }),
        }
      );
     
      if (response.status === 200) {
        setName("");
        setIfc_class("");
        setThickness("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }

    setSubmitted(true);
  };

  //The part to redirect to a new page is here.
  React.useEffect(() => {
    if (submitted){
      router.push("https://www.concular.de");
    }
  },
  [submitted,router]
  );

  return (
      <form className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                         htmlFor="grid-first-name">
                      First Name
                  </label>
                  <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name" type="text" placeholder="Jane"/>
                      <p className="text-red-500 text-xs italic">Please fill out this field.</p>
              </div>
              <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                         htmlFor="grid-last-name">
                      Last Name
                  </label>
                  <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-last-name" type="text" placeholder="Doe"/>
              </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                         htmlFor="grid-password">
                      Password
                  </label>
                  <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-password" type="password" placeholder="******************"/>
                      <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
              </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                         htmlFor="grid-city">
                      City
                  </label>
                  <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-city" type="text" placeholder="Albuquerque"/>
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                         htmlFor="grid-state">
                      State
                  </label>
                  <div className="relative">
                      <select
                          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-state">
                          <option>New Mexico</option>
                          <option>Missouri</option>
                          <option>Texas</option>
                      </select>
                      <div
                          className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                          </svg>
                      </div>
                  </div>
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                         htmlFor="grid-zip">
                      Zip
                  </label>
                  <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-zip" type="text" placeholder="90210"/>
              </div>
          </div>
      </form>
  );
}

export default MyForm_Old;