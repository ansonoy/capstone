import React from "react"
import DoublePane from "./components/doublePane"
import Image from "next/image"
import windmill from "@/public/windmill.png"

export default function Home() {
  return (
    <main className={`space-y-5`}>
      <div className={`flex flex-row h-screen items-center justify-center`}>
        <Image
          src={windmill}
          alt="windmill"
          quality={95}
          height={500}
          width={750}
          className="rounded flex"
        />
        <h1 className={`text-5xl sm:text-7xl font-semibold flex flex-col`}>
          <p>Whispering</p> <p>Dutchman</p> <p>Distillery</p>
        </h1>
      </div>
      <div> 

      </div>
      <div className="translate-y-16 space-y-10">
        <div className="place-content-center translate-y-10">
          <h1 className={`flex justify-center text-4xl font-semibold  `}>
            Our Commitment
          </h1>
          <div className={`flex justify-center`}>
            <p className={`max-w-lg`}>
              Our Gins and Vodkas are handcrafted from the finest local ingredients to achieve a blend
              of old world and new world flavours.  Our contemporary Gins are complex enough to please
              the most discerning Gin drinker, while our Vodkas are the perfect match for any cocktail.
              All our Gins and Vodkas are created to stand on their own as an incredible taste
              experience.
            </p>
          </div>
        </div>
        <div>
         <h1 className={`flex justify-center text-4xl font-semibold translate-y-10 h-[5rem]`}>
            The Story
          </h1>
          <div className={`translate-x-16`}>
            <DoublePane
              leftContent={<p  className='max-w-md'>
              Shout it from the roof tops, <br></br> Cochrane has another craft distillery.Located in the industrial building next to the Half
              Hitch Brewing Company on Griffin Road, the Whispering Dutchman Distillery is now open to the public.
              Far Sighted
              What do spectacles and spirits have in common? Bruce Van Leeuwen.
              During a successful career in the eyeglasses business, with a Friday afternoon habit of a decent gin and tonic to finish off the work week,
              Bruce became fascinated by the notion of making his own gin. He set out on a path to learn as much as he could about the craft distillery business.
              He is quick to credit Sue Ransom at Krang Spirits for sharing her expertise and wise counsel, helping him to navigate the choppy waters
              of the regulatory process in Alberta. Bruce believes her groundbreaking work to start her own small-batch distillery made his job ultimately easier.
              Two years later, the toughest obstacle turned out to be how to get his new still into the building. His doorway simply wasn’t wide enough. He ended
              up having to take out the adjoining wall shared with the Half Hitch and bringing it though their much larger doorway, repairing the wall afterward. Where there’s a wall, there’s a way!
            </p>}
              rightContent ={<p  className='max-w-md'>Award Winners <br></br>          
              Head distiller, Mitch Klassen is responsible for the delightful versions of gin and vodka
              that are the hallmarks of Whispering Dutchman. Just nine months into production and they’ve already
              been awarded the Judges Selection at the Alberta Beverage Awards, out of 800 entries. Not too shabby
              for the new kid on the block.
              Drop in for a tasting of the superior grapefruit-infused gin (my personal favourite) or limited edition
              blueberry-mint vodka. And if you’re feeling especially daring, take home a bottle of 50 proof Moonshine and
              find out if it lives up to its name (but avoid driving and the operation of heavy machinery).
              <p className=" translate-x-10 place-content-center">Jane Usher</p></p>}
            />
          </div>
        </div>
      </div>
      <div>
        <div>

        </div>
        <div className="grid min-h-screen items-center translate-y-10">
          <div className="flex justify-center text-4xl font-semibold ">
            <h1>"Taste" Amonials</h1>
          </div>
          <div className="translate-x-16">
            <DoublePane
            leftContent={<div className="max-w-md">A new Distillery with a "welcome to our home"
              atmosphere and wonderfully friend staff. They went absolutely above and
              beyond during our tasting and Bruce was so knowledgeable and kind.
              I totally forgot the grab the other staff members name (a gorgeous blonde thing)
              but she was whip smart and added a wonderful banter to our stay.
              I recommend checking out Whispering Dutchman any time you visit or pass through Cochrane.
              Sloane B
            </div>}
            rightContent={<div className="max-w-md">We came to the distillery for a tour as well as a tasting.
              Bruce and the rest of the staff were so knowledgable and welcoming.
              There is a lemon lavender gin which is beyond explaination.
              The cocktail they offered was incredible. 10/10 customer service,
              10/10 overall experience and an most of all 10/10 liquor.
              The triple distilled vodka is the smoothest, best vodka I've ever tasted.
              You will not be disappointed by supporting this small business.
              Makaela P
            </div>}
          />
          </div>
          <div className="translate-x-16">
            <DoublePane
            leftContent={<div className="max-w-md">“Great local business
              with great personality and staff! “
              Ian
            </div>}
          rightContent={<div className="max-w-md">“The winter is one of the few gins I prefer to drink straight! What a great gin :) “
          Camille B</div>}
            />
          </div>
          <div className="translate-x-16">
            <DoublePane
            leftContent={<div className="max-w-md">“So glad we stopped in today - the tastings
              for their Grapefruit Gin & Blueberry Mint Vodka were delicious!! Gorgeous
              bottles and very nice staff. The vodka is very smooth, and I love the
              blueberry mint just over ice.”
              Katelynn H
            </div>}
            rightContent={<div className="max-w-md">“Great products, Fair Price.
              Always good to support local business especially when their
              quality is above the bigname brands. Would definitely recommend!”
              Connor S
            </div>}
            />
          </div>                 
        </div>
        <div>

        </div>
      </div>

      <div>
        <h1 className={`flex justify-center text-4xl font-semibold `}>
          Location
        </h1>
        <div className="flex flex-col items-center justify-center w-full h-[30rem]">
          <iframe
            className="flex flex-col items-center justify-center w-5/6 h-5/6 rounded-2xl"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ8Tdr8ZVBcVMRowmzju707Q8&key=AIzaSyBYEeWyX2jqtqpSe1AGEUwal1f8dS00zjw"
          ></iframe>
        </div>
      </div>
    </main>
  )
}
