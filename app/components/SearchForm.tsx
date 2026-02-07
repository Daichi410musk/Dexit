"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import type { Destination } from "../data";

export default function SearchForm({
  destinations,
}: {
  destinations: Destination[];
}) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const filtered = query
    ? destinations.filter((d) =>
        d.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function handleSelect(d: Destination) {
    setQuery(d.name);
    setOpen(false);
    router.push(`/destination/${d.id}`);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const match = destinations.find((d) => d.name === query);
    if (match) {
      router.push(`/destination/${match.id}`);
    } else if (query.trim()) {
      router.push(`/destination/custom?name=${encodeURIComponent(query)}`);
    }
  }

  return (
    <div ref={ref} className="relative">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-4"
      >
        <label
          htmlFor="destination-name"
          className="block text-sm font-semibold text-gray-800"
        >
          目的地を入力
        </label>
        <p className="text-xs text-gray-500 mt-1">
          候補にない目的地も入力できます
        </p>
        <div className="mt-3 flex items-center gap-2">
          <input
            id="destination-name"
            name="name"
            autoComplete="off"
            placeholder="例: 伊勢丹、都庁、新宿三丁目"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
            }}
            onFocus={() => {
              if (query) setOpen(true);
            }}
            className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
          >
            検索
          </button>
        </div>
      </form>

      {open && filtered.length > 0 && (
        <ul className="absolute left-0 right-0 -mt-3 mx-0 bg-white border border-gray-200 rounded-lg shadow-lg z-20 max-h-60 overflow-y-auto">
          {filtered.map((d) => (
            <li key={d.id}>
              <button
                type="button"
                onClick={() => handleSelect(d)}
                className="w-full text-left px-4 py-2.5 text-sm text-gray-800 hover:bg-blue-50"
              >
                {d.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
