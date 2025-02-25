"use client";

import { X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function CardSearchParams() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const cat = searchParams.get("cat") ?? "";

  const removeCategory = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("cat");
    router.push(`?${params.toString()}`);
  };

  if (!cat) return null;

  return (
    <div className="text-sm text-blue-600 font-bold py-2 px-4 bg-zinc-100 rounded-lg w-fit flex items-center gap-1">
      <p>{cat}</p>
      <button onClick={removeCategory}>
        <X size={16} />
      </button>
    </div>
  );
}
