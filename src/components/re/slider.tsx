"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Play,
  Info,
  ChevronLeft,
  ChevronRight,
  PlayCircle,
} from "lucide-react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Slide {
  id: string;
  title: string;
  description: string;
  image: string;
  dominantColors: {
    gradient: string;
  };
}
export enum tp {
  "anime",
  "manga",
}

export function Slider({ slides, types }: { slides: Slide[]; types: tp }) {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [current, setCurrent] = React.useState(0);
  const type = types == 0 ? "manga" : "anime";

  React.useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  React.useEffect(() => {
    if (!api) return;
    const id = setInterval(() => api.scrollNext(), 7000);
    return () => clearInterval(id);
  }, [api]);

  console.log(slides[1]);
  return (
    <div className="relative w-full overflow-hidden bg-background m-0 p-0">
      <Carousel opts={{ loop: true }} setApi={setApi}>
        <CarouselContent>
          {slides.map((s, i) => (
            <CarouselItem key={s.id}>
              <div className="relative aspect-4/3 md:aspect-21/11 lg:aspect-21/8 xl:aspect-21/5 w-full">
                {/* Image */}
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  priority={i === 0}
                  className="object-cover"
                />

                {/* Color overlay */}
                <div
                  className="absolute inset-0 opacity-50 "
                  style={{
                    background: s.dominantColors.gradient,
                    textShadow:
                      "0 2px 8px rgba(0,0,0,0.8), 0 6px 20px rgba(0,0,0,0.6)",
                  }}
                />

                {/* Readability gradient */}
                <div className="absolute inset-0 bg-linear-to-r from-background via-background/20 to-transparent" />
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-background/20 to-background" />

                {/* Bottom fade */}
                <div className="absolute inset-0 bg-linear-to-b from-background via-background/10 to-transparent" />
                <div className="absolute inset-0 bg-linear-to-t from-background via-background/70 to-transparent" />

                {/* Content */}
                {i === current && (
                  <div className="absolute bottom-[2%] left-4 right-4 md:left-10 md:right-10">
                    <div className="flex items-end justify-between gap-6 pl-0">
                      {/* LEFT: Text */}
                      <div className="max-w-7xl items-start flex flex-col lg:px-[29px]">
                        <h1
                          className={`text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight`}
                          style={{ color: s.dominantColors.gradient }}
                        >
                          {s.title
                            ?.replace(/<[^>]*>|^\s*[-*]\s*|\s*\n\s*/gm, " ")
                            .trim()}
                        </h1>

                        <center
                          className="px-auto mt-3 text-[10px] max-w-[50%] text-base  text-foreground/60 lg:text-xs font-semibold hidden lg:block"
                          style={
                            {
                              // textShadow: "0 1px 6px rgba(0,0,0,0.8)",
                            }
                          }
                        >
                          {s.description
                            ?.replace(/<[^>]*>|^\s*[-*]\s*|\s*\n\s*/gm, " ")
                            .trim()}
                        </center>
                      </div>

                      {/* RIGHT: Actions */}
                      <div className="hidden md:flex items-center gap-3 shrink-0 mb-[2%]">
                        <Link href={`/${type}/${s.id}`}>
                          <button className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-foreground text-background font-semibold hover:bg-foreground/60 transition inset-0 ">
                            <PlayCircle stroke={"var(--background)"} />
                            Watch Now
                          </button>
                        </Link>
                      </div>
                    </div>

                    {/* Mobile actions (stacked below text) */}
                    <div className="mt-4 flex gap-3 md:hidden">
                      <Link href={`/${type}/${s.id}`} className="flex-1">
                        <button className="w-full py-3 rounded-lg bg-foreground text-background font-semibold">
                          <PlayCircle stroke={"var(--background)"} />
                          Watch Now
                        </button>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Nav buttons */}
      <div className="absolute right-4 top-4 z-10 flex gap-2">
        <Button
          size="icon"
          variant="secondary"
          className="bg-black/60 text-white hover:bg-black/80"
          onClick={() => api?.scrollPrev()}
        >
          <ChevronLeft size={18} />
        </Button>
        <Button
          size="icon"
          variant="secondary"
          className="bg-black/60 text-white hover:bg-black/80"
          onClick={() => api?.scrollNext()}
        >
          <ChevronRight size={18} />
        </Button>
      </div>
    </div>
  );
}
