import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Hero() {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [travelers, setTravelers] = useState(1);

  const navigate = useNavigate();

  function handleSearch() {
    if (!destination) return;

    navigate(`/results?q=${destination}`);
  }

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-between gap-12 px-6 py-20 md:flex-row">
        {/* Left Content */}
        <div className="w-full max-w-xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
            Plan your next trip effortlessly
          </h1>

          <p className="mt-6 text-lg text-zinc-600">
            Discover destinations, compare travel plans, and build personalized
            itineraries in minutes.
          </p>

          <div className="mt-10 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row">
              <Input
                placeholder="Where to?"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />

              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />

              <Input
                type="number"
                min={1}
                value={travelers}
                onChange={(e) => setTravelers(Number(e.target.value))}
              />
            </div>

            <Button className="mt-4 w-full" onClick={handleSearch}>
              Plan Trip
            </Button>
          </div>
        </div>

        <div className="relative hidden w-full max-w-xl md:block">
          <div className=" inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-3xl" />

          <div className="relative rounded-3xl border border-zinc-200 bg-white p-6 shadow-xl">
            <div className="flex h-[420px] items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 text-zinc-500">
              Travel Preview
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
