import { useEffect, useState } from "react";

const STORAGE_KEY = "recentSearches";

export function useSearchHistory() {
  const [history, setHistory] = useState<string[]>([]);

  // Load history on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setHistory(JSON.parse(stored));
    }
  }, []);

  // Add new search
  const addSearch = (query: string) => {
    if (!query) return;

    const updated = [query, ...history.filter((item) => item !== query)].slice(
      0,
      5,
    );

    setHistory(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  return { history, addSearch };
}
