import { BaseDialogProps, Dialog } from "@/components/ui/dialog";
import { GenerateFromJobTitle } from "./job-title";
import { GenerateToFixContent } from "./fix-content";

type GenerationDialogProps = BaseDialogProps & {
  mode: AIGenerationMode;
  setOpen: (open: boolean) => void;
};

export const GenerationDialog = ({ mode, ...props }: GenerationDialogProps) => {
  const onClose = () => {
    props.setOpen(false);
  };
  const configPerMode: Record<AIGenerationMode, JSX.Element> = {
    JOB_TITLE: <GenerateFromJobTitle onClose={onClose} />,
    FIX_CONTENT: <GenerateToFixContent onClose={onClose} />,
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
