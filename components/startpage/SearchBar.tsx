"use client";

import { useState } from "react";
import clsx from "clsx";
import { FaGoogle, FaYoutube, FaGithub } from "react-icons/fa";
import { SiNixos } from "react-icons/si";
import type { IconType } from "react-icons/lib";

const engines = [
  {
    key: "google",
    label: "Google",
    icon: FaGoogle,
    url: "https://www.google.com/search?q=",
  },
  {
    key: "youtube",
    label: "YouTube",
    icon: FaYoutube,
    url: "https://www.youtube.com/results?search_query=",
  },
  {
    key: "github",
    label: "GitHub",
    icon: FaGithub,
    url: "https://github.com/search?q=",
  },
  {
    key: "nixpkgs",
    label: "MyNixOS",
    icon: SiNixos,
    url: "https://mynixos.com/search?q=",
  },
] as const;

type EngineKey = (typeof engines)[number]["key"];

export default function SearchBar() {
  const [currentEngine, setCurrentEngine] =
    useState<EngineKey>("google");
  const [value, setValue] = useState("");

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key !== "Enter") return;

    const query = value.trim();
    if (!query) return;

    const engine = engines.find(
      (eng) => eng.key === currentEngine
    );

    if (engine) {
      window.open(
        engine.url + encodeURIComponent(query),
        "_blank"
      );
    }
  };

  return (
    <div className="w-full">
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          className="
            w-full px-4 py-3 rounded-xl
            bg-[#1E1E1E]/55
            border border-[#424242]/40
            text-paradise-fg
            backdrop-blur-lg backdrop-saturate-150
            font-sans
            outline-none
            transition-all duration-300 ease-out
            hover:border-paradise-400/40
            focus:border-paradise-400
            focus:bg-[#1E1E1E]/70
            focus:shadow-[0_0_0_1px_rgba(141,163,185,0.3),0_0_24px_rgba(141,163,185,0.15)]
          "
        />

        <span
          className={clsx(
            "absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none transition-opacity duration-300",
            value.length > 0 ? "opacity-0" : "opacity-100"
          )}
        >
          🔎 &nbsp; Where to buy pipebombs near me?
        </span>
      </div>

      <div className="flex justify-center gap-2 mt-3">
        {engines.map((engine) => {
          const Icon: IconType = engine.icon;
          const isActive = currentEngine === engine.key;

          return (
            <button
              key={engine.key}
              onClick={() =>
                setCurrentEngine(engine.key)
              }
              className={clsx(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm border transition-all duration-300 cursor-pointer",
                isActive
                  ? "bg-paradise-300 text-paradise-bg border-paradise-300 font-medium"
                  : "bg-[#1E1E1E]/55 border-[#424242]/50 text-neutral-300 hover:border-paradise-100/30 hover:text-paradise-200 backdrop-blur-lg backdrop-saturate-150"
              )}
            >
              <Icon className="text-xs" />
              {engine.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}