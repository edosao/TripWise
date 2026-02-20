// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { useRef } from "react";
// import { headers } from "@/api/locations";

// export default function Hero() {
//   const [destination, setDestination] = useState("");
//   const [date, setDate] = useState("");
//   const [travelers, setTravelers] = useState(1);
//   const [suggestions, setSuggestions] = useState<string[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const navigate = useNavigate();

//   const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setDestination(value);

//     if (debounceRef.current) clearTimeout(debounceRef.current);

//     debounceRef.current = setTimeout(() => {
//       fetchCities(value);
//     }, 300); // wait 300ms before fetching
//   };

//   function handleSearch() {
//     if (!destination) return;

//     navigate(`/results?q=${destination}`);
//   }

//   const fetchCities = async (query: string) => {
//     if (!query) return;

//     setLoading(true);
//     setError(null);

//     try {
//       const res = await fetch(
//         `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${query}&limit=5`,
//         { headers },
//       );
//       const data = await res.json();
//       setSuggestions(data.data.map((city: any) => city.name));
//     } catch (err) {
//       setError("Failed to fetch cities");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="relative overflow-hidden">
//       <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-between gap-12 px-6 py-20 md:flex-row">
//         {/* Left Content */}
//         <div className="w-full max-w-xl">
//           <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
//             Plan your next trip effortlessly
//           </h1>

//           <p className="mt-6 text-lg text-zinc-600">
//             Discover destinations, compare travel plans, and build personalized
//             itineraries in minutes.
//           </p>

//           <div className="mt-10 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
//             <div className="flex flex-col gap-4 sm:flex-row">
//               <Input
//                 placeholder="Where to?"
//                 value={destination}
//                 onChange={(e) => setDestination(e.target.value)}
//               />

//               <Input
//                 type="date"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//               />

//               <Input
//                 type="number"
//                 min={1}
//                 value={travelers}
//                 onChange={(e) => setTravelers(Number(e.target.value))}
//               />
//             </div>

//             <Button className="mt-4 w-full" onClick={handleSearch}>
//               Plan Trip
//             </Button>
//           </div>
//           {destination && suggestions.length > 0 && (
//             <ul className="autocomplete-dropdown">
//               {suggestions.map((city) => (
//                 <li
//                   key={city}
//                   onClick={() => setDestination(city)}
//                   className="cursor-pointer hover:bg-gray-200 p-1"
//                 >
//                   {city}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         <div className="relative hidden w-full max-w-xl md:block">
//           <div className=" inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-3xl" />

//           <div className="relative rounded-3xl border border-zinc-200 bg-white p-6 shadow-xl">
//             <div className="flex h-[420px] items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 text-zinc-500">
//               Travel Preview
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default function Results() {
//   const [params] = useSearchParams();
//   const query = params.get("q") || "";

//   const [searchParams] = useSearchParams();
//   const destination = searchParams.get("q");

//   const [cities, setCities] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [attractions, setAttractions] = useState<any[]>([]);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     async function load() {
//       setLoading(true);
//       try {
//         const data = await searchCities(query);
//         setCities(data);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     }

//     if (query) load();
//   }, [query]);

//   useEffect(() => {
//     if (!destination) return;

//     const fetchAttractions = async () => {
//       setLoading(true);
//       try {
//         const res = await fetch(`API_URL/attractions?city=${destination}`, {
//           headers,
//         });
//         const data = await res.json();
//         setAttractions(data.data);
//       } catch (err) {
//         setError("Failed to fetch attractions");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAttractions();
//   }, [destination]);

//   return (
//     <div className="mx-auto max-w-7xl px-6 py-20">
//       <h2 className="text-3xl font-bold">Results for "{query}"</h2>

//       {/* {loading && <p className="mt-4">Loading...</p>} */}

//       {loading ? (
//         <div className="grid grid-cols-3 gap-4">
//           {[...Array(6)].map((_, i) => (
//             <div
//               key={i}
//               className="bg-gray-300 h-40 animate-pulse rounded"
//             ></div>
//           ))}
//         </div>
//       ) : (
//         <div>
//           <h3 className="text-xl font-semibold mt-6">
//             Attractions in {destination}
//           </h3>
//           <div className="mt-4">
//             {attractions.map((attraction) => (
//               <div
//                 key={attraction.id}
//                 className="border-b border-zinc-200 py-2"
//               >
//                 <h4 className="font-medium">{attraction.name}</h4>
//                 <p className="text-sm text-zinc-500">
//                   {attraction.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
//         {cities.map((city) => (
//           <div
//             key={city.id}
//             className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm"
//           >
//             <h3 className="font-semibold">
//               {city.city}, {city.country}
//             </h3>
//             <p className="text-sm text-zinc-500">
//               Population: {city.population?.toLocaleString()}
//             </p>
//           </div>
//         ))}
//       </div> */}
//     </div>
//   );
// }

// const BASE_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
// export const headers = {
//   "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
//   "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
// };

// export async function searchCities(query: string) {
//   if (!query) return [];

//   const res = await fetch(`${BASE_URL}/cities?namePrefix=${query}&limit=10`, {
//     headers,
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch cities");
//   }

//   const data = await res.json();
//   return data.data;
// }

// import { Outlet } from "react-router-dom";
// import Navbar from "./Navbar";

// export default function Layout() {
//   return (
//     <>
//       <Navbar />
//       <Outlet />
//     </>
//   );
// }

// import Hero from "@/components/Landing/Hero";
// export default function Home() {
//   return <Hero />;
// }

// import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
// import Results from "@/pages/Results";
// import Navbar from "../components/layouts/Navbar";
// import Home from "../pages/Home";
// import Hero from "../components/Landing/Hero";
// import Layout from "@/components/layouts/layout";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />, //
//     children: [
//       {
//         index: true,
//         element: <Home />, //
//       },
//       {
//         path: "results",
//         element: <Results />,
//       },
//     ],
//   },
// ]);
