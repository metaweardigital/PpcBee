import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Icon from '../components/images/Icon.png';

import FirstLight from '../components/images/First_light.png';
import SecondLight from '../components/images/Second_light.png';
import ThirdLight from '../components/images/Third_light.png';
import FourthLight from '../components/images/Fourth_light.png';
import FifthLight from '../components/images/Fifth_light.png';

function ScrollSectionLight() {
  return (
    <section className='w-full mx-auto px-8 py-64'>
      <div className='flex justify-center pb-32 text-light space-x-4'>
        <p>
          <Link className='px-8 py-4 rounded-lg bg-blue-600' href={'/light'}>
            Light
          </Link>
        </p>
        <p>
          <Link
            className='px-8 py-4 rounded-lg bg-zinc-800 hover:bg-blue-600 transition-all duration-300 active:bg-blue-800'
            href={'/dark'}
          >
            Dark
          </Link>
        </p>
      </div>

      <div className='w-full max-w-6xl mx-auto my-32 bg-white rounded-xl'>
        <div className='grid grid-cols-1 sm:grid-cols-4 gap-8 p-10 justify-between items-center'>
          <div>Trusted by over 300k users worldwide</div>
          <div>
            <div className='text-4xl font-bold'>4.9</div>
            <div className='text-sm opacity-50'>3.000+ Ratings</div>
          </div>
          <div>
            <div className='text-4xl font-bold'>8m+</div>
            <div className='text-sm opacity-50'>Worldwide users</div>
          </div>
          <div>
            <div className='text-4xl font-bold'>320+</div>
            <div className='text-sm opacity-50'>Products sold</div>
          </div>
        </div>
      </div>

      <div className='text-center top-0 left-0 right-0'>
        <h1 className='text-4xl lg:text-6xl font-bold pb-4'>
          One platform to rule them all
        </h1>
        <p className='w-full max-w-2xl mx-auto text-lg'>
          From one single platform, you can{' '}
          <span className='font-bold'>
            manage your campaigns on Google, Facebook, and Microsoft
          </span>
          .
        </p>
      </div>

      <div className='w-full max-w-6xl mx-auto my-32'>
        <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-16'>
          <div className='place-self-center'>
            <Image
              src={FirstLight}
              width={600}
              unoptimized={true}
              className='rounded-8xl shadow-2xl shadow-blue-500/10'
              alt={''}
            />
          </div>

          <div className='space-y-6 pt-8'>
            <Image
              src={Icon}
              width={64}
              height={64}
              unoptimized={true}
              alt={''}
            />
            <div className='space-y-3'>
              <h3 className='text-2xl font-bold'>
                Duplicate your ads and campaigns
              </h3>
              <p className='text-md font-light opacity-90 leading-relaxed'>
                Easily duplicate your ads and campaigns between each system and
                compare its performance. Managing cross-channel campaigns has
                never been this easy before.
              </p>
            </div>
            <button className='px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-white hover:text-dark transition-all duration-300'>
              Learn more
            </button>
          </div>
        </div>
      </div>

      <div className='w-full max-w-6xl mx-auto my-32'>
        <div className='grid grid-cols-2 lg:grid-cols-4 justify-between gap-16'>
          <div>
            <div>
              <Image src={SecondLight} unoptimized={true} alt={''} />
            </div>
            <div className='space-y-4 pt-8'>
              <h3 className='text-md font-bold'>Import and optimise data</h3>
              <p className='text-sm font-light opacity-90 leading-relaxed'>
                Once the data has been imported, you can use the features to
                optimize and manage your advertising campaigns.
              </p>
            </div>
          </div>
          <div>
            <div>
              <Image src={ThirdLight} unoptimized={true} alt={''} />
            </div>
            <div className='space-y-4 pt-8'>
              <h3 className='text-md font-bold'>Data Enrichment</h3>
              <p className='text-sm font-light opacity-90 leading-relaxed'>
                Add additional data to an existing dataset to make it more
                complete, accurate, and valuable.
              </p>
            </div>
          </div>
          <div>
            <div>
              <Image src={FourthLight} unoptimized={true} alt={''} />
            </div>
            <div className='space-y-4 pt-8'>
              <h3 className='text-md font-bold'>Improve your images</h3>
              <p className='text-sm font-light opacity-90 leading-relaxed'>
                Tool to optimize your images for use in your advertising
                campaigns. Use our Image Editor to make your product pictures
                stand out.
              </p>
            </div>
          </div>
          <div>
            <div>
              <Image src={FifthLight} unoptimized={true} alt={''} />
            </div>
            <div className='space-y-4 pt-8'>
              <h3 className='text-md font-bold'>Feed exports</h3>
              <p className='text-sm font-light opacity-90 leading-relaxed'>
                Export data such as keywords, product information, or
                performance metrics, and use this data to optimize and improve
                advertising campaigns.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full max-w-6xl mx-auto my-32 bg-white text-light rounded-xl'>
        <div className='grid grid-cols-1 sm:grid-cols-4 gap-8 p-10 justify-between items-center'></div>
      </div>
    </section>
  );
}

export default ScrollSectionLight;
