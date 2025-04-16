import React from "react";
import { LuFuel, LuUsers } from "react-icons/lu";
import { RiSteering2Fill } from "react-icons/ri";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
  // const message = `Hi, I'm interested in renting the ${car?.brand} ${car?.model}. Can you provide more details?`;
  // const phoneNumber = "919566863602";
  // const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  //   message
  // )}`;
  return (
    <>
      <div
        key={car?.id}
        className="bg-white rounded-xl shadow-sm overflow-hidden p-5"
      >
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg">{car?.model}</h3>
            <p className="text-gray-500 text-sm">{car?.brand}</p>
          </div>
        </div>

        <div className="my-6 flex justify-center">
        <Link to={`/car-details/${car?.id}`}>
          <img
            src={car?.thumbnail || "/placeholder.svg"}
            alt={car?.name}
            className="h-32 object-contain"
          />
            </Link>
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-1">
            <LuFuel className="text-md text-cyan-600" />
            <span className="text-sm text-zinc-500">{car?.fuelCapacity}</span>
          </div>
          <div className="flex items-center gap-1">
            <RiSteering2Fill className="text-md text-cyan-600" />
            <span className="text-sm text-zinc-500">{car?.transmission}</span>
          </div>
          <div className="flex items-center gap-1">
            <LuUsers className="text-md text-cyan-600" />
            <span className="text-sm text-zinc-500">{car?.seater} Seater</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          {/* <div>
            <span className="font-bold text-zinc-700 text-md">₹{car?.price?.toFixed(2)}</span>
            <span className="text-zinc-500 text-sm">/day</span>
          </div> */}
          <Link to={`/car-details/${car?.id}`}>
            <Button
              variant="secondary"
              className={"text-cyan-600 cursor-pointer shadow-sm"}
            >
              Explore
            </Button>
          </Link>
          <a
            href="tel:+916380442901"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white px-4 py-2 rounded-lg font-semibold text-sm cursor-pointer bg-cyan-600 transition-colors hover:bg-cyan-700"
          >
            Call Now
          </a>
        </div>
      </div>
    </>
  );
};

export default CarCard;
