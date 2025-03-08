import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <nav className="text-2xl bg-slate-600/30 backdrop-blur-lg rounded-full px-3">
        <h1 >Hi, Welcome to DevEssentials by @lemaufo</h1>
      </nav>
    </div>
  );
}
