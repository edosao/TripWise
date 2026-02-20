const BASE_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const headers = {
  "X-RapidAPI-Key": "221088674amsh70c6ca6ac7965e2p1d8febjsn060f0bc2bc4a",
  "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
};

export async function searchCities(query: string) {
  if (!query) return [];

  const res = await fetch(`${BASE_URL}/cities?namePrefix=${query}&limit=10`, {
    headers,
  });

  if (!res.ok) {
    throw new Error("Failed to fetch cities");
  }

  const data = await res.json();
  return data.data;
}
