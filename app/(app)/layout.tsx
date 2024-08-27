import { Providers } from "../Providers";
import { Navbar } from "./components/Navbar";
export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Providers>
        <div className="flex flex-col w-full min-h-screen">
          <Navbar />
          <main className="flex flex-col flex-1 gap-4 md:gap-8 bg-muted/40 p-4 md:p-10 min-h-[calc(100vh_-_theme(spacing.16))]">
            {children}
          </main>
        </div>
      </Providers>
    </main>
  );
}
