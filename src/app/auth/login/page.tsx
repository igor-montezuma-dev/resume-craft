import Logo from "@/assets/logo.svg";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import { Chrome, Github } from "lucide-react";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="grid grid-cols-[1.5fr,1fr] h-screen">
      <aside>
        <Image
          width={1000}
          height={800}
          src="/images/auth-bg.webp"
          alt="Imagem de uim escritório."
          className="size-full object-cover"
          quality={100}
        />
      </aside>
      <form className="flex flex-col p-10 justify-center">
        <div className="flex items-center justify-between mb-10">
          <Logo className="max-w-[90px]" />
          <ThemeToggle />
        </div>

        <h1 className="text-2xl font-title font-bold">Acesse sua conta</h1>
        <p className="text-sm text-muted-foreground">
          Caso não possua conta, ela será criada automaticamente.
        </p>
        <div className="flex flex-col gap-4 mt-6">
          <Button
            variant="outline"
            className="w-full gap-2"
            type="submit"
            name="provider"
            value="github"
          >
            <Github size={20} />
            Acessar com GitHub
          </Button>
          <Button
            className="w-full gap-2"
            type="submit"
            name="provider"
            value="google"
          >
            <Chrome size={20} />
            Acessar com Google
          </Button>
        </div>
      </form>
    </div>
  );
}
