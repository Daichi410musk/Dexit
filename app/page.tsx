import Link from "next/link";
import { routes } from "./routes/data";

export default function Home() {
  return (
    <main className="px-6 py-4">
      <h1 className="text-center text-xl font-bold">JR新宿駅　乗換案内</h1>
      <ul>
        {routes.map((route) => (
          <li key={route.id}>
            <Link href={`/routes/${route.id}`}>{route.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
