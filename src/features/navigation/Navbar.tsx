import Link from "next/link";
import React from "react";
import CatalogueMenuContainer from "./CatalogueMenuContainer";
import {
  BadgePercent,
  Heart,
  MapPin,
  Search,
  ShoppingCart,
  UserRound,
} from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-zinc-200 py-2 px-4 flex items-center gap-4">
      <div className="flex flex-col gap-4">
        <Link
          href="/"
          className="py-2 px-4 bg-red-600 text-white font-extrabold text-sm text-center rounded-full "
        >
          E-Commerce
        </Link>
        <CatalogueMenuContainer />
      </div>
      <div className="flex-1 flex flex-col justify-center gap-4 max-w-[700px] mx-auto">
        <div className="flex items-center gap-4 w-full">
          <div className="flex items-center gap-1">
            <MapPin size={25} />
            <span className="text-sm font-bold text-zinc-800">Almaty</span>
          </div>
          <Link
            href="/stores"
            className="text-sm font-bold text-zinc-900 mx-auto"
          >
            Stores
          </Link>
          <div className="flex items-center gap-1">
            <BadgePercent size={25} className="text-red-600" />
            <span className="text-sm font-bold text-zinc-800">Offers</span>
          </div>
        </div>
        <form className="flex items-center bg-stone-200 py-2 px-4 outline-none border-[1px] border-stone-400 rounded-md gap-2">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent flex-1 outline-none border-none"
          />
          <button className="text-red-600">
            <Search size={25} />
          </button>
        </form>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4 text-sm font-bold text-zinc-800">
          <Link href="/">Shopping Guide</Link>
          <Link href="/">Credit & Installments</Link>
          <div className="flex items-center gap-2">
            <span className="text-xs p-1 border-[1px] border-red-600 rounded-md">
              Rus
            </span>
            <span>Kaz</span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm font-bold">
          <Link
            href="/"
            className="py-1 px-2 hover:bg-zinc-100 rounded-md duration-200 ml-auto"
          >
            <UserRound size={25} />
          </Link>
          <button className="py-1 px-2 hover:bg-zinc-100 rounded-md duration-200">
            <Heart size={25} />
          </button>
          <button className="py-1 px-2 hover:bg-zinc-100 rounded-md duration-200">
            <ShoppingCart size={25} />
          </button>
        </div>
      </div>
    </nav>
  );
}
