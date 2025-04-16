import { chennaiBanner } from "@/assets/images";
import { CarCard, ResponsiveBanner } from "@/components";
import { cars } from "@/data/cars.js";
import React, { useState } from "react";

const AllCars = () => {
  const [filters, setFilters] = useState({
    seater: "",
    transmission: "",
    model: "",
    brand: "",
  });

  const filteredCars = cars.filter((car) => {
    const matchseater = filters.seater
      ? car.seater === parseInt(filters.seater)
      : true;
    const matchTransmission = filters.transmission
      ? car.transmission.toLowerCase() === filters.transmission
      : true;
    const matchModel = filters.model ? car.model === filters.model : true;

    return matchseater && matchTransmission && matchModel;
  });
  return (
    <main className="mt-20">
      <ResponsiveBanner imgUrl={chennaiBanner} />
      <section>
        <div className="container">
          <div className="text-center py-8">
            <p className="text-cyan-600 font-light text-xl mb-2">
              Unbeatable Deals on Wheels.
            </p>
            <h2 className="text-3xl font-bold mb-2">
              Affordable & Reliable Car Rentals for Every Trip.
            </h2>
            <p className="text-md text-zinc-600">
              Pick from our wide selection of maintained self-drive cars at
              unbeatable rates. Ideal for short city trips or extended
              getaways—reserve your ride in just a few clicks.
            </p>
          </div>
        </div>
      </section>
      <section className="py-4">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4 px-4 my-4">
            {/* Seater Filter */}
            <div className="w-full sm:w-auto">
              <label className="block text-sm text-zinc-600 font-medium mb-1">
                Seater
              </label>
              <select
                value={filters.seater}
                onChange={(e) =>
                  setFilters({ ...filters, seater: e.target.value })
                }
                className="w-full sm:w-48 border border-zinc-300 rounded-xl px-3 py-2 text-sm focus:outline-none "
              >
                <option value="">All</option>
                <option value="5">5 Seater</option>
                <option value="7">7 Seater</option>
              </select>
            </div>

            {/* Transmission Filter */}
            <div className="w-full sm:w-auto">
              <label className="block text-sm text-zinc-600 font-medium mb-1">
                Transmission
              </label>
              <select
                value={filters.transmission}
                onChange={(e) =>
                  setFilters({ ...filters, transmission: e.target.value })
                }
                className="w-full sm:w-48 border border-zinc-300 rounded-xl px-3 py-2 text-sm focus:outline-none "
              >
                <option value="">All</option>
                <option value="manual">Manual</option>
                <option value="automatic">Automatic</option>
              </select>
            </div>

            {/* Model Filter */}
            {/* <div className="w-full sm:w-auto">
              <label className="block text-sm text-zinc-600 font-medium mb-1">
                Model
              </label>
              <select
                value={filters.model}
                onChange={(e) =>
                  setFilters({ ...filters, model: e.target.value })
                }
                className="w-full sm:w-48 border border-zinc-300 rounded-xl px-3 py-2 text-sm focus:outline-none "
              >
                <option value="">All</option>
                {Array.from(new Set(cars.map((car) => car.model))).map(
                  (model) => (
                    <option key={model} value={model}>
                      {model}
                    </option>
                  )
                )}
              </select>
            </div> */}

            {/* Brand Filter */}
            <div className="w-full sm:w-auto">
              <label className="block text-sm text-zinc-600 font-medium mb-1">
                Brand
              </label>
              <select
                value={filters.brand}
                onChange={(e) =>
                  setFilters({ ...filters, brand: e.target.value })
                }
                className="w-full sm:w-48 border border-zinc-300 rounded-xl px-3 py-2 text-sm focus:outline-none "
              >
                <option value="">All</option>
                {Array.from(new Set(cars.map((car) => car.brand))).map(
                  (brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  )
                )}
              </select>
            </div>
            {/* Model Filter */}
            <div className="w-full sm:w-auto">
              <label className="block text-sm text-zinc-600 font-medium mb-1">
                Model
              </label>
              <select
                value={filters.model}
                onChange={(e) =>
                  setFilters({ ...filters, model: e.target.value })
                }
                className="w-full sm:w-48 border border-zinc-300 rounded-xl px-3 py-2 text-sm focus:outline-none "
              >
                <option value="">All</option>
                {Array.from(
                  new Set(
                    cars
                      .filter((car) =>
                        filters.brand ? car.brand === filters.brand : true
                      )
                      .map((car) => car.model)
                  )
                ).map((model) => (
                  <option key={model} value={model}>
                    {model}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 bg-slate-50">
        <div className="container">
          {filteredCars.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:px-2 lg:px-4">
                {filteredCars.map((car) => (
                  <>
                    <CarCard car={car} />
                  </>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="py-4 text-center">
                <h2 className="text-2xl font-bold">No Cars Found!</h2>
              </div>
            </>
          )}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:px-2 lg:px-4">
            {filteredCars.map((car) => (
              <>
                <CarCard car={car} />
              </>
            ))}
          </div> */}
        </div>
      </section>
    </main>
  );
};

export default AllCars;
