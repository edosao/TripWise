import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchAttractions } from "@/api/attractions";
import type { Attraction } from "@/types/attraction";
import AttractionCard from "@/components/cards/attractions/AttractionCard";

export default function Results() {
  const [params] = useSearchParams();
  const destination = params.get("q") || "";

  const [attractions, setAttractions] = useState<Attraction[]>([]);
  const [loadingAttractions, setLoadingAttractions] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!destination) return;

    async function loadAttractions() {
      setLoadingAttractions(true);
      setError(null);

      try {
        const data = await fetchAttractions(destination);
        setAttractions(data);
      } catch {
        setError("Failed to load attractions");
      } finally {
        setLoadingAttractions(false);
      }
    }

    loadAttractions();
  }, [destination]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="text-3xl font-bold">Attractions in "{destination}"</h2>

      {loadingAttractions && (
        <div className="grid grid-cols-3 gap-4 mt-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-40 bg-gray-300 animate-pulse rounded" />
          ))}
        </div>
      )}

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {!loadingAttractions && !error && (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 mt-6">
          {attractions.map((a) => (
            <AttractionCard key={a.id} attraction={a} />
          ))}
        </div>
      )}
    </div>
  );
}
