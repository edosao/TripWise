import type { Attraction } from "@/types/attraction";

interface Props {
  attraction: Attraction;
}

export default function AttractionCard({ attraction }: Props) {
  return (
    <div className="p-4 border rounded-lg">
      <h3 className="font-semibold">{attraction.name}</h3>
      <p>{attraction.description}</p>
    </div>
  );
}
