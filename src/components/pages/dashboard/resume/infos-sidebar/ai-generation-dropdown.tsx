import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";

export const AIGenerationDropdown = () => {
  return (
    <Button className="h-9 text-xs px-2.5 py-1 gap-2">
      <Bot size={20} />
      Gerar com IA
    </Button>
  );
};
