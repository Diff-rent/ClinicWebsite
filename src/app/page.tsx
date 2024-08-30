import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <h1 className="font-black text-5xl bg-blue-500 p-4 rounded text-white mb-4">
        Easymed
      </h1>
      <img src="/assets/logo.png" alt="" className="w-full max-w-64 rounded" />
    </main>
  );
}
