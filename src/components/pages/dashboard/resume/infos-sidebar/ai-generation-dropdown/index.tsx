import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  BadgeCent,
  Bot,
  BriefcaseBusiness,
  CirclePercent,
  Languages,
  PencilLine,
} from "lucide-react";
import { useState } from "react";
import { GenerationDialog } from "./generation-dialog";

export const AIGenerationDropdown = () => {
  const [generationMode, setGenerationMode] = useState<AIGenerationMode | null>(
    null
  );
  const actions = [
    {
      label: "Comprar créditos",
      icon: CirclePercent,
      onClick: () => console.log("Comprar créditos"),
    },
    {
      label: "Gerar conteúdo para vaga de emprego",
      icon: BriefcaseBusiness,
      onClick: () => setGenerationMode("JOB_TITLE"),
    },
    {
      label: "Melhorar e corrigir conteúdo existente",
      icon: PencilLine,
      onClick: () => setGenerationMode("FIX_CONTENT"),
    },
    {
      label: "Traduzir conteúdo",
      icon: Languages,
      onClick: () => setGenerationMode("TRANSLATE_CONTENT"),
    },
  ];

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="h-9 text-xs px-2.5 py-1 gap-2">
            <Bot size={20} />
            Gerar com IA
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent sideOffset={10} align="start">
          <DropdownMenuLabel className="flex items-center gap-1 text-muted-foreground text-xs ">
            Você possui{" "}
            <strong className="inline-flex items-center gap-0.5 text-foreground ">
              <BadgeCent size={14} />
              20 créditos
            </strong>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {actions.map((action) => (
            <DropdownMenuItem
              key={action.label}
              className="gap-2"
              onClick={action.onClick}
            >
              <action.icon size={18} className="text-muted-foreground" />
              {action.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      {!!generationMode && (
        <GenerationDialog
          mode={generationMode}
          open={!!generationMode}
          setOpen={(value) => {
            if (!value) setGenerationMode(null);
          }}
        />
      )}
    </>
  );
};
