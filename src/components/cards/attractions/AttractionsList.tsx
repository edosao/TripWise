import AttractionCard from "./AttractionCard";
import type { Attraction } from "@/types/attraction";

interface Props {
  data: Attraction[];
}

export default function AttractionsList({ data }: Props) {
  return (
    <div className="flex flex-wrap gap-4">
      {data.map((item) => (
        <AttractionCard key={item.id} attraction={item} />
      ))}
    </div>
  );
}
