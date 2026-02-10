import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/50 bg-white/70 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="text-2xl font-semibold tracking-tight">Tripwise</div>

        <nav className="hidden items-center gap-10 md:flex">
          <a className="text-sm text-zinc-600 hover:text-zinc-900 transition">
            Explore
          </a>
          <a className="text-sm text-zinc-600 hover:text-zinc-900 transition">
            Trips
          </a>
          <a className="text-sm text-zinc-600 hover:text-zinc-900 transition">
            About
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost">Login</Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </header>
  );
}
