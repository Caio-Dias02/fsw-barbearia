import Header from "./components/header";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { SearchIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {

  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">
          Olá, Caio
        </h2>
        <p>Domingo, 12 de Janeiro</p>

        <div className="flex items-center gap-2 mt-6">
          <Input placeholder="Buscar serviço" />
          <Button size="icon">
            <SearchIcon />
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image src="/banner-01.png" alt="Banner" fill className="rounded-xl object-cover" />
        </div>
      </div>
    </div>
  );
}