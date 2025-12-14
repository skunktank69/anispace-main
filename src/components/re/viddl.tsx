"use client";

import { useState } from "react";
import { ChevronDown, Download } from "lucide-react";

interface DownloadDropdownProps {
  downloads: any[];
}

export function DownloadDropdown({ downloads }: DownloadDropdownProps) {
  const [open, setOpen] = useState(false);

  if (downloads.length === 0) return null;

  return (
    <div className="relative w-50 max-w-sm text-foreground">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-between w-full px-3 py-2 rounded-md border transition text-sm  bg-background"
      >
        <span className="flex items-center gap-2">
          <Download size={16} />
          Download
        </span>
        <ChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute z-20 mt-2 w-full rounded-md border shadow-lg  bg-background">
          <div className="flex flex-col divide-y">
            {downloads.map((d) => (
              <a
                key={d.download}
                href={d.download}
                target="_blank"
                rel="noreferrer"
                className="flex justify-between items-center px-3 py-2 text-sm hover:bg-sidebar transition"
              >
                <span>
                  {d.quality.indexOf("eng") < 0
                    ? `${d.quality.match(/\d+p/)?.[0] || "unknown"} sub`
                    : `${d.quality.match(/\d+p/)?.[0] || "unknown"} dub`}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
