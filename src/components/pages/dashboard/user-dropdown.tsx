import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, SquareUser } from "lucide-react";
import Link from "next/link";

export const UserDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="w-full gap-2 justify-start px-2" variant="ghost">
          <Avatar className="size-7 block">
            <AvatarImage src="https://github.com/igor-montezuma-dev.png" />
            <AvatarFallback>Igor</AvatarFallback>
          </Avatar>
          <p>Igor Montezuma</p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        className="w-[var(--radix-dropdown-menu-trigger-width)]"
      >
        <DropdownMenuSeparator />
        <Link passHref href="/dashboard/account">
          <DropdownMenuItem className="gap-2">
            <SquareUser size={16} />
            Configurações de conta
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem className=" gap-2 text-red-500">
          <LogOut size={16} />
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
