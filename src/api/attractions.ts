import type { Attraction } from "@/types/attraction";

export async function fetchAttractions(city: string): Promise<Attraction[]> {
  // simulate network delay
  await new Promise((res) => setTimeout(res, 1200));

  return [
    {
      id: "1",
      name: `${city} National Museum`,
      description: "A famous museum showcasing culture and history.",
    },
    {
      id: "2",
      name: `${city} City Park`,
      description: "Beautiful park perfect for relaxing and sightseeing.",
    },
    {
      id: "3",
      name: `${city} Old Town`,
      description: "Historic district with amazing architecture.",
    },
  ];
}
