import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiOutlineArrowDown,
} from "react-icons/ai";
import Image from "next/image";
import spaceman from "../public/spaceman.gif";

import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import web7 from "../public/web7.png";
import web8 from "../public/web8.png";
import web9 from "../public/web9.png";
import web10 from "../public/web10.png";
import { useState } from "react";
import FileSaver from "file-saver";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const saveFile = () => {
    FileSaver.saveAs("/elonsdevcv.pdf", "elonsdev-cv.pdf");
  };
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>ElonsDev | Web3 Developer</title>
        <meta
          name='description'
          content='Web3 Developer | I make cool stuff.. ...gib job plz'
        />
        <link rel='icon' href='/favicon.ico' />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://elons.dev' />
        <meta property='og:title' content='ElonsDev | Web3 Developer' />
        <meta
          property='og:description'
          content='Web3 Developer | I make cool stuff.. ...gib job plz'
        />
        <meta property='og:image' content='https://elons.dev/socialbg.png' />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://elons.dev' />
        <meta property='twitter:title' content='ElonsDev | Web3 Developer' />
        <meta
          property='twitter:description'
          content='Web3 Developer | I make cool stuff.. ...gib job plz'
        />
        <meta
          property='twitter:image'
          content='https://elons.dev/socialbg.png'
        ></meta>
      </Head>

      <main className='bg-space bg-contain bg-no-repeat bg-slate-50 px-10 md:px-20 lg:px-40 font-PressStart2P dark:bg-gray-900'>
        {/* FIRST PAGE SECTION */}
        <section className=' min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='hidden  md:block text-sm lg:text-xl  dark:text-white'>
              @elonsdev
            </h1>
            <ul className='flex items-center dark:text-white'>
              <li>
                <a href='https://twitter.com/elonsdev'>
                  <AiFillTwitterCircle className='text-2xl cursor-pointer' />
                </a>
              </li>
              <li>
                <a href='https://github.com/elonsdev'>
                  <AiFillGithub className='text-2xl mx-5 cursor-pointer' />
                </a>
              </li>
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className='cursor-pointer text-xl'
                />
              </li>

              <li>
                <a
                  className='bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8 cursor-pointer'
                  onClick={saveFile}
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className='relative mx-auto w-20 h-20 lg:w-40 lg:h-40 lg:mt-20 '>
            <Image src={spaceman} layout='fill' onbjectFit='cover' />
          </div>
          <div className='text-center p-10'>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>
              Web3 Developer
            </h3>
            <p className='text-md py-5 leading-8 text-gray-80 md:text-xl max-w-xl mx-auto dark:text-white'>
              I make cool stuff... <br />
              <br />
              ...gib job plz
            </p>
          </div>

          <div className='text-5xl flex justify-center py-3 dark:text-white'>
            <AiOutlineArrowDown />
          </div>
        </section>

        <section className='lg:flex'>
          <div className='basis-1/2'>
            <h3 className=' text-xl py-1 dark:text-white'>Skills</h3>
            <p className='text-sm py-5 leading-8 text-gray-80 dark:text-white'>
              <li>HTML, MARKDOWN, JSON</li>
              <li>CSS, SCSS, SASS, TAILWIND</li>
              <li>JS, TYPESCRIPT, REACT, NEXT, NODE</li>
              <li>SOLIDITY</li>
            </p>
          </div>

          <div className='basis-1/2'>
            <h3 className='text-xl py-1 dark:text-white'>Courses</h3>
            <p className='text-sm py-5 leading-8 text-gray-80 dark:text-white'>
              <li>UDACITY | FE Developer Nano Degree</li>
              <li>
                CODECADEMY | JS Fundementals, Intermediate JS, Learn TS, Learn
                Node
              </li>
              <li>IVAN ON TECH | Smart Contracts & Dapps</li>
            </p>
          </div>
        </section>

        {/* PORTFOLIO SECTION */}

        <section>
          <div>
            <h3 className='text-xl py-1 dark:text-white'>Portfolio</h3>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image
                src={web9}
                className='rounded-lg object-cover'
                width={"100%"}
                height={"100%"}
                layout='responsive'
              />
              <h4 className='dark:text-white py-5'>GetMe.???? </h4>
              <p className='text-sm dark:text-white'>
                A web3 tipping dapp that uses Next, Firebase, Moralis, Wagmi,
                Chainlink, RainbowKit, and Tailwindcss.
              </p>
              <a
                className='text-sm text-blue-600 dark:text-blue-200'
                href='https://getme.pizza'
              >
                getme.pizza
              </a>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image
                src={web10}
                className='rounded-lg object-cover'
                width={"100%"}
                height={"100%"}
                layout='responsive'
              />
              <h4 className='dark:text-white py-5'>Web3Imgur</h4>
              <p className='text-sm dark:text-white'>
                A simple Imgur clone to drag and drop images to IPFS and get
                social sharing links.
              </p>
              <a
                className='text-sm text-blue-600 dark:text-blue-200'
                href='https://web3imgur.vercel.app/'
              >
                https://web3imgur.vercel.app/
              </a>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image
                src={web7}
                className='rounded-lg object-cover'
                width={"100%"}
                height={"100%"}
                layout='responsive'
              />
              <h4 className='dark:text-white py-5'>Battle Derps</h4>
              <p className='text-sm dark:text-white'>
                A multiplayer NFT game using React & web3.js for the front end
                minter and unity with moralis SDK for the game.
              </p>
              <a
                className='text-sm text-blue-600 dark:text-blue-200'
                href='https://battlederps.com'
              >
                battlederps.com
              </a>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image
                src={web8}
                className='rounded-lg object-cover'
                width={"100%"}
                height={"100%"}
                layout='responsive'
              />
              <h4 className='dark:text-white py-5'>Gatherverse</h4>
              <p className='text-sm dark:text-white'>
                Virtual hackathon office space using Typescript, Phaser,
                Filecoin & Moralis SDK. Top 15 in Moralis x Filecoin Hackathon
              </p>
              <a
                className='text-sm text-blue-600 dark:text-blue-200'
                href='https://gatherweb3.netlify.app'
              >
                gatherweb3.netlify.app
              </a>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image
                src={web6}
                className='rounded-lg object-cover'
                width={"100%"}
                height={"100%"}
                layout='responsive'
              />
              <h4 className='dark:text-white py-5'>muu.wtf</h4>
              <p className='text-sm dark:text-white'>
                An experimental ENS subdomain wrapper that allows users to claim
                a .muu.eth subdomain NFT using solidity, react, web3.js,
                dicebear API.
              </p>
              <a
                className='text-sm text-blue-600 dark:text-blue-200'
                href='https://muu.wtf'
              >
                muu.wtf
              </a>
            </div>
            <div className='basis-1/4 flex-1'>
              <Image
                src={web5}
                className='rounded-lg object-cover'
                width={"100%"}
                height={"100%"}
                layout='responsive'
              />
              <h4 className='dark:text-white py-5'>0xNeko</h4>
              <p className='text-sm dark:text-white'>
                Experimental Interactive NFT that runs HTML & JS as an NFT
                instead of an image.
              </p>
              <a
                className='text-sm text-blue-600 dark:text-blue-200'
                href='https://0xneko.xyz'
              >
                0xNeko
              </a>
            </div>
            <div className='basis-1/4 flex-1'>
              <Image
                src={web4}
                className='rounded-lg object-cover'
                width={"100%"}
                height={"100%"}
                layout='responsive'
              />
              <h4 className='dark:text-white py-5'>SafeFactory</h4>
              <p className='text-sm dark:text-white'>
                Safemoon token launcher using EIP-1167 and the dapp using only
                JS.
              </p>
              <a
                className='text-sm text-blue-600 dark:text-blue-200'
                href='https://github.com/elonsdev/safefactory'
              >
                Safe Factory
              </a>
            </div>
          </div>
        </section>
        <section>
          <nav className='py-10 flex justify-between'>
            <h1 className=' hidden  md:block text-xl  dark:text-white'>...</h1>
            <ul className='flex items-center dark:text-white'>
              <li>
                <a href='https://twitter.com/elonsdev'>
                  <AiFillTwitterCircle className='text-2xl cursor-pointer' />
                </a>
              </li>
              <li>
                <a href='https://github.com/elonsdev'>
                  <AiFillGithub className='text-2xl mx-5 cursor-pointer' />
                </a>
              </li>
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className='cursor-pointer text-xl'
                />
              </li>

              <li>
                <a
                  className='bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8 cursor-pointer'
                  onClick={saveFile}
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </main>
    </div>
  );
}
