import React from 'react'
import { PanoramicBanner } from "@/components";
import { aboutBanner, aboutCar } from "@/assets/images";


const TermsAndConditions = () => {
  return (
    <main className="mt-20">
          <PanoramicBanner bgImg={aboutBanner} title={"Terms and Conditions"} />
          <section>
            <div className="container">
              <div className="text-center py-8">
                <p className="text-cyan-600 font-light text-xl mb-2">
                  Self-Drive Made Simple.
                </p>
                <h2 className="text-3xl font-bold mb-2">
                  Explore Chennai and beyond with Spin Drive.
                </h2>
                <p className="text-md text-zinc-600">
                  Whether for local exploration or outstation travel, we offer
                  hassle-free, affordable and reliable rides for every journey.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-3 items-center h-full">
                <div>
                  <img src={aboutCar} alt="About" />
                </div>
                <div className="bg-slate-100 px-4 md:px-8 py-8 md:py-12 h-full">
                  <p className="mb-2 indent-10">
                    <span className="text-cyan-600 font-semibold text-md">
                      Spin Drive
                    </span>{" "}
                    brings you Chennai’s most budget-friendly self-drive car rentals
                    without compromising quality. Our 20+ vehicle fleet (from
                    compact cars to luxury SUVs) is always clean, well-maintained,
                    and ready to go.
                  </p>
                  <p className="mb-2 indent-10">
                    With seamless bookings, transparent pricing, and 24/7 doorstep
                    service, your travel plans just got smoother. Our promise is the
                    most affordable self-drive car rentals in Chennai—completely
                    transparent pricing and zero hidden charges.
                  </p>
                  <p className="mb-2 indent-10">
                    We prioritize the cleanliness and upkeep of every car in our
                    fleet to ensure your journey is safe and comfortable. Take the
                    wheel and create joyful memories with your loved ones—your
                    perfect getaway starts with a Spin Drive key.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
  )
}

export default TermsAndConditions