import React from 'react'

import BatmanBegin from '../../assets/batmanbegins.jpg'
import Dune from '../../assets/dune.jpg'
import Sing from '../../assets/sing2.jpg'
import SpiderMan from '../../assets/spiderman.jpg'
import TheDarknightRises from '../../assets/theDarkNightRises.jpg'
import TheDarkNight from '../../assets/theDarkNight.jpg'

import { BiTime } from 'react-icons/bi'

const movieDatas = [
    {
		src: BatmanBegin,
		title: 'Batman Begins',
		main: 'Christian Bale',
		runtime: '120m'
	},

	{ 
        src: Dune,
        title: 'Dune',
        main: 'Timothée Chalamet', 
        runtime: '120m' 
    },

	{ src: Sing, 
        title: 'Sing 2', 
        main: 'Matthew McConaughey', 
        runtime: '120m' 
    },

	{
		src: SpiderMan,
		title: 'Spider-Man: No Way Home',
		main: 'Tom Holland',
		runtime: '120m'
	},

	{
		src: TheDarknightRises,
		title: 'The Dark Knight Rises',
		main: 'Christian Bale',
		runtime: '120m'
	},

	{
		src: TheDarkNight,
		title: 'The Dark Knight',
		main: 'Christian Bale',
		runtime: '120m'
	}
]
export const Trending = () => {
  return (
    <>
        <h4 className='mt-4 border-b border-primary pb-2'>Trending</h4>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-10 mb-12 pt-10'>
            {movieDatas.map((movie, index) => {
                const {src, title, main, runtime} = movie;

                return (    
                    <div key = {index} className="card">

                        <img className = 'w-full' src={src} alt="avatar" />

                        <div className="p-2 text-white">
                            <h4>{title}</h4>
                            <p>{main}</p>
                        </div>

                        <div className="badge">
                            <BiTime />
                            <p>
                                {runtime}
                            </p>
                        </div>
                    </div>
                )

            })}
        </div>

        <div className='flex justify-center'>
            <button className='btn hover:scale-125 transition ease-out'>Learn more</button>

        </div>
    </>
  )
}
