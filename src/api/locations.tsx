const BASE_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

const headers = {
  "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
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
