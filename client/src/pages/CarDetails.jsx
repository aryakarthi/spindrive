import React from "react";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import { useParams } from "react-router-dom";
import { cars } from "@/data/cars";
import { TbManualGearbox } from "react-icons/tb";
import { LuFuel, LuUsers, LuCircleCheckBig } from "react-icons/lu";
import { BsWhatsapp } from "react-icons/bs";
import { PhoneCall } from "lucide-react";

const CarDetails = () => {
  const { cid } = useParams();
  console.log(cid);
  const currentCar = cars.find((car) => car.id === Number(cid));
  console.log(currentCar);

  return (
    <main className="mt-20">
      <section className="py-4">
        <div className="container">
          <div className="grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-12 py-6">
            <div className="col-span-1 md:col-span-6 lg:col-span-8">
              <Gallery
                options={{
                  bgOpacity: 0.85,
                  padding: { top: 20, bottom: 20, left: 0, right: 0 },
                }}
              >
                {currentCar?.images?.length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-2 rounded-lg">
                    {currentCar?.images?.map((img, index) => {
                      if (index === 0) {
                        return (
                          <Item
                            key={img.id}
                            original={img.src}
                            thumbnail={img.src}
                            width={img.width}
                            height={img.height}
                            caption={img.alt}
                          >
                            {({ ref, open }) => (
                              <div
                                ref={ref}
                                onClick={open}
                                className={`col-span-2 md:row-span-2 md:col-span-2 aspect-[4/3] overflow-hidden rounded-lg cursor-pointer shadow-md`}
                              >
                                <img
                                  src={img.src}
                                  alt={img.alt}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            )}
                          </Item>
                        );
                      }
                      return (
                        <Item
                          key={img.id}
                          original={img.src}
                          thumbnail={img.src}
                          width={img.width}
                          height={img.height}
                          caption={img.alt}
                        >
                          {({ ref, open }) => (
                            <div
                              ref={ref}
                              onClick={open}
                              className={`aspect-[4/3] overflow-hidden rounded-lg cursor-pointer shadow-md`}
                            >
                              <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                        </Item>
                      );
                    })}
                  </div>
                ) : (
                  <div className="h-full bg-slate-100 flex items-center justify-center rounded-md">
                    <h3 className="text-2xl font-bold">
                      No images to preview!
                    </h3>
                  </div>
                )}
              </Gallery>
            </div>
            <div className="col-span-1 md:col-span-6 lg:col-span-4 px-2 md:px-4 lg:px-6 py-8 bg-slate-50 rounded-md text-center shadow-md">
              {/* <h3 className="text-xl font-bold mb-2 text-cyan-600">
                {currentCar.brand} {currentCar.model}
              </h3> */}
              <h4 className="text-xl font-semibold mb-2">
                Pick Your Perfect Car.
              </h4>
              <p className="text-sm mb-4">
                Choose your ideal vehicle quickly, and we will bring it to you
                wherever and whenever you prefer.
              </p>

              {/* Call Now Button */}
              <div>
                <a
                  href="tel:+916380442901"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white px-7 py-2 rounded-lg font-semibold text-md cursor-pointer bg-cyan-600 transition-colors hover:bg-cyan-700"
                >
                  <PhoneCall size={18} />
                  Call Now
                </a>
              </div>

              <div className="flex w-full justify-center">
                <div className="relative inline-flex items-center justify-center text-zinc-500 text-sm before:w-15 before:h-px before:bg-zinc-300 before:mr-2 after:w-15 after:h-px after:bg-zinc-300 after:ml-2">
                  or
                </div>
              </div>

              <div>
                <a
                  // href="https://wa.me/919566863602?text=Hi%20there!%20I%20need%20help."

                  href={`https://wa.me/916380442901?text=${encodeURIComponent(
                    `Hi, I'm interested in renting the ${currentCar?.brand} ${currentCar?.model}. Can you provide more details?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white px-6 py-2 rounded-lg font-semibold text-md cursor-pointer bg-green-600 transition-colors hover:bg-green-700"
                >
                  {/* WhatsApp SVG icon */}
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 32 32"
                    width="18"
                    height="18"
                  >
                    <path d="M16 .396C7.164.396.004 7.555.004 16.392c0 2.899.762 5.735 2.207 8.238L.004 32l7.558-2.18a16.01 16.01 0 008.438 2.397c8.837 0 15.996-7.16 15.996-15.997C31.996 7.555 24.837.396 16 .396zm0 29.601a13.3 13.3 0 01-6.786-1.865l-.486-.29-4.489 1.296 1.37-4.367-.315-.504a13.36 13.36 0 01-2.07-7.086c0-7.37 5.996-13.366 13.366-13.366 3.571 0 6.925 1.39 9.448 3.913a13.292 13.292 0 013.918 9.452c0 7.37-5.996 13.367-13.366 13.367zm7.291-9.883c-.399-.2-2.36-1.167-2.727-1.296-.367-.133-.635-.2-.903.2-.267.4-1.034 1.296-1.267 1.563-.233.267-.467.3-.866.1-.399-.2-1.685-.62-3.209-1.976-1.185-1.053-1.983-2.36-2.214-2.76-.233-.4-.024-.617.176-.817.18-.18.4-.467.6-.7.2-.233.267-.4.4-.667.133-.267.067-.5-.033-.7-.1-.2-.903-2.18-1.237-2.987-.324-.78-.654-.675-.903-.675l-.767-.01c-.233 0-.6.085-.916.4-.316.317-1.2 1.17-1.2 2.844 0 1.674 1.229 3.29 1.4 3.52.167.233 2.421 3.696 5.867 5.18.82.353 1.46.564 1.96.723.823.262 1.57.225 2.16.137.659-.098 2.36-.963 2.694-1.89.333-.927.333-1.723.233-1.89-.1-.167-.366-.267-.766-.467z" />
                  </svg> */}
                  <BsWhatsapp className="text-lg" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-8">
        <div className="container">
          {currentCar ? (
            <div>
              <div className="py-4 border-y border-zinc-100">
                <h2 className="text-2xl font-bold mb-2">
                  {currentCar.brand} {currentCar.model}
                </h2>
                <div className="flex gap-4">
                  <p className="flex items-center gap-1">
                    <LuFuel className="text-md text-cyan-600" />
                    <span>{currentCar.fuelCapacity}</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <TbManualGearbox className="text-md text-cyan-600" />
                    <span>{currentCar.transmission}</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <LuUsers className="text-md text-cyan-600" />
                    <span>{currentCar.seater} Seats</span>
                  </p>
                </div>
              </div>
              <div className="py-4">
                <h3 className="text-lg font-bold mb-2">Features</h3>
                <div className="p-4 border border-zinc-100 rounded-md">
                  <ul className="list-none grid grid-cols-1 md:grid-cols-12">
                    {currentCar.features.map((feature, index) => (
                      <li
                        key={index}
                        className="col-span-1 md:col-span-4 lg:col-span-3 mb-2"
                      >
                        <span className="flex items-center gap-1">
                          <LuCircleCheckBig className="text-md text-cyan-600" />
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-40 bg-slate-100 flex items-center justify-center rounded-md">
              <h3 className="text-2xl font-bold">No details to view!</h3>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default CarDetails;
