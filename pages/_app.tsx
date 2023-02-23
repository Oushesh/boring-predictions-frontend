import Link from 'next/link';
import Image from 'next/image';

import { Inter } from '@next/font/google';
import styles from '../styles/page.module.css';
const inter = Inter({ subsets: ['latin'] });

import '../styles/globals.css';
import '../styles/buttons.css';
import MyNavbar from '../components/navbar';
import React from "react";
import MyForm from '../components/form';
import MyForm_Old from '../components/form_todebug';

export default function MyPage()
{
  return (
      <html className="bg-gray">
      <main className={styles.main}>
        <div className="bg-gray">
          <MyNavbar />
        </div>

         <div>
           <MyForm/>
        </div>

          <div>
            <div className="flex items-center justify-center w-full">
                  <label htmlFor="dropzone-file"
                        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor"
                          viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" strokeLinejoin={"round"} stroke-width="2"
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                          className="font-semibold">Click to upload</span> or drag and drop</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">csv, parquet or xml</p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden"/>
                    </label>
                </div>
          </div>

     

        <div className="p-4 text-center bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
                Download the app to check your footprint
              </h5>
              <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                <a
                  href="/appstore"
                  className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                >
                  <svg
                    className="mr-3 w-7 h-7"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="apple"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path
                      fill="currentColor"
                      d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                    ></path>
                  </svg>
                  <div className="text-left">
                    <div className="mb-1 text-xs">
                        Download on the
                    </div>
                    <div className="-mt-1 font-sans text-sm font-semibold">
                      <a
                        href="https://www.apple.com/store"
                        className={styles.card}
                        target={'_blank'}
                        rel={'noopener noreferrer'}
                      />
                      App Store
                    </div>
                  </div>
                </a>
                <a
                  href="/test"
                  className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                >
                  <svg
                    className="mr-3 w-7 h-7"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="google-play"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                    ></path>
                  </svg>
                  <div className="text-left">
                    <div className="mb-1 text-xs">Get in on</div>
                    <div className="-mt-1 font-sans text-sm font-semibold">
                      <a
                          href = "/test"
                        className={styles.card}
                        target={'_blank'}
                        rel={'noopener noreferrer'}
                      />
                      Google Play
                    </div>
                  </div>
                </a>
              </div>
          </div>
      </main>
    </html>
  );
}

//Move the Download there: