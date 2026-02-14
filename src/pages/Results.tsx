import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchCities } from "@/api/locations";

export default function Results() {
  const [params] = useSearchParams();
  const query = params.get("q") || "";

  const [cities, setCities] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const data = await searchCities(query);
        setCities(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    if (query) load();
  }, [query]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="text-3xl font-bold">Results for "{query}"</h2>

      {loading && <p className="mt-4">Loading...</p>}

      <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {cities.map((city) => (
          <div
            key={city.id}
            className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm"
          >
            <h3 className="font-semibold">
              {city.city}, {city.country}
            </h3>
            <p className="text-sm text-zinc-500">
              Population: {city.population?.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
