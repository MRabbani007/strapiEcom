"use client";

import { Button } from "@/components/ui/button";
import { getStrapiMedia } from "@/lib/utils";
import { ChevronRight, LayoutGrid, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

// const subCategories = [
//   { id: "101", catId: "2", label: "Laptops" },
//   { id: "102", catId: "2", label: "Laptops" },
//   { id: "103", catId: "2", label: "Apple Macbook" },
//   { id: "104", catId: "2", label: "Bags" },
//   { id: "105", catId: "2", label: "Back Packs" },
//   { id: "106", catId: "2", label: "Dock Stations for Laptops" },
// ];

// const categories = [
//   { id: "1", label: "Telephones & Accessories", children: [] },
//   { id: "2", label: "Laptops & Computers", children: subCategories },
//   { id: "3", label: "Gaming", children: [] },
//   { id: "4", label: "TVs, Audio & Music", children: [] },
//   { id: "5", label: "Home Appliances", children: [] },
//   { id: "6", label: "Photography & Drones", children: [] },
//   { id: "7", label: "Kitchen Appliances", children: [] },
// ];

export default function CatalogueMenu({
  departments,
}: {
  departments: Department[];
}) {
  const [showMenu, setShowMenu] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleClose = () => {
    setExpandedId(null);
    setShowMenu(false);
  };

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!ref?.current?.contains(event.target as Node | null)) {
        setExpandedId(null);
        // setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        setExpandedId(null);
        setShowMenu(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <Button
        onClick={() => setShowMenu((curr) => !curr)}
        className="flex items-center gap-1"
        variant="ghost"
      >
        <LayoutGrid size={30} className="text-red-600" />
        <span>Product Catalogue</span>
      </Button>
      <div
        className={
          (showMenu ? "" : " -translate-x-full") +
          " fixed top-0 left-0 bottom-0 w-[300px] shadow-md shadow-zinc-200 bg-zinc-100 duration-200 z-20"
        }
      >
        <div className="flex items-center gap-4 p-4">
          <Link
            href="/"
            onClick={handleClose}
            className="py-2 px-4 bg-red-600 text-white font-extrabold text-sm text-center rounded-full "
          >
            E-Commerce
          </Link>
          <Button
            onClick={() => setShowMenu(false)}
            variant="ghost"
            className="ml-auto"
          >
            <X size={20} />
          </Button>
        </div>
        <div ref={ref} className="flex flex-col">
          {Array.isArray(departments) &&
            departments.map((department) => (
              <div className="relative" key={department?.label}>
                <div
                  key={department.id}
                  className="py-2 px-4 hover:bg-zinc-20 hover:text-orange-500 duration-200 flex items-center gap-2 justify-between"
                  onClick={() => setExpandedId(department.id)}
                >
                  <p>{department?.label}</p>
                  <ChevronRight size={20} />
                </div>
                <div
                  className={
                    (expandedId === department?.id
                      ? ""
                      : " invisible opacity-0 translate-x-4 ") +
                    " fixed top-10 left-[300px] bottom-10 p-4 flex flex-col items-start justify-start max-h-[70vh] right-0 flex-wrap bg-white shadow-md shadow-zinc-600 text-sm duration-200"
                  }
                >
                  {Array.isArray(department?.categories) &&
                    (department?.categories.length === 0 ? (
                      <p className="text-lg font-bold">{department?.label}</p>
                    ) : (
                      [...department?.categories]
                        .sort((a, b) =>
                          (a?.sortIndex ?? 0) > (b?.sortIndex ?? 0) ? 1 : -1
                        )
                        ?.map((category) => (
                          <div
                            key={category?.label}
                            onClick={() => console.log(category)}
                            className="flex items-start gap-0"
                          >
                            {category?.icon && (
                              <img
                                src={getStrapiMedia(category?.icon?.url) ?? ""}
                                className="w-10 h-10"
                              />
                            )}
                            <div className="flex flex-col">
                              <p
                                // href={`?cat=${category.label}`}
                                className="text-lg py-2 px-4 hover:bg-zinc-20 hover:text-orange-5 duration-200 whitespace-nowrap font-bold"
                              >
                                {category.label}
                              </p>
                              {Array.isArray(category?.sub_categories) &&
                                [...category?.sub_categories]
                                  .sort((a, b) =>
                                    (a?.sortIndex ?? 0) > (b?.sortIndex ?? 0)
                                      ? 1
                                      : -1
                                  )
                                  ?.map((subCategory, idx) => (
                                    <Link
                                      key={idx}
                                      href={`?cat=${subCategory.label}`}
                                      onClick={handleClose}
                                      className="py-1 px-4 hover:bg-zinc-20 hover:text-orange-500 duration-200 whitespace-nowrap"
                                    >
                                      {subCategory.label}
                                    </Link>
                                  ))}
                            </div>
                          </div>
                        ))
                    ))}
                </div>
              </div>
            ))}
        </div>
        <div className="flex-1"></div>
      </div>
      <div
        className={
          (showMenu ? "" : "scale-0 invisible opacity-0") +
          " fixed inset-0 z-10 bg-zinc-900/50"
        }
        onClick={() => {
          setShowMenu(false);
          setExpandedId(null);
        }}
      ></div>
    </div>
  );
}
