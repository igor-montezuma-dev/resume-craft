import { BaseDialogProps, Dialog } from "@/components/ui/dialog";
import { GenerateFromJobTitle } from "./job-title";

type GenerationDialogProps = BaseDialogProps & {
  mode: AIGenerationMode;
};

export const GenerationDialog = ({ mode, ...props }: GenerationDialogProps) => {
  const configPerMode: Record<AIGenerationMode, JSX.Element> = {
    JOB_TITLE: <GenerateFromJobTitle />,
    FIX_CONTENT: <div>Melhorar e corrigir conteúdo existente</div>,
    TRANSLATE_CONTENT: <div>Traduzir conteúdo</div>,
  };

  const content = configPerMode[mode];

  return (
    <Dialog
      {...props}
      title="Gerar com IA"
      description="O conteúdo gerado irá sobrescrever o conteúdo atual. Cada solicitação custa 1 crédito."
      content={content}
    />
  );
};
