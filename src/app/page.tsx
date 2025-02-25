import CardSearchParams from "@/features/store/CardSearchParams";
import { Suspense } from "react";

// type Props = {
//   searchParams: {
//     cat?: string;
//     subCat?: string;
//     p?: number;
//   };
// };

export default async function Home() {
  return (
    <main className="flex-1 flex flex-col p-4">
      <Suspense fallback={<p>Loading...</p>}>
        <CardSearchParams />
      </Suspense>
      <div className="flex-1 flex flex-col items-center justify-center">
        Hello World
      </div>
    </main>
  );
}
