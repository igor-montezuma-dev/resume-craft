import { Button } from "@/components/ui/button";

import { ApiService } from "@/services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { mergician } from "mergician";
import { useForm, useFormContext } from "react-hook-form";
import { toast } from "sonner";

type GenerateToFixContentProps = {
  onClose: () => void;
};
export const GenerateToFixContent = ({
  onClose,
}: GenerateToFixContentProps) => {
  const { handleSubmit } = useForm();
  const { getValues, setValue } = useFormContext<ResumeData>();

  const queryClient = useQueryClient();

  const { mutate: handleGenerate, isPending } = useMutation({
    mutationFn: ApiService.fixContent,
    onSuccess: (data) => {
      const content = getValues("content");

      const generation = JSON.parse(data.data);

      const mergedContent = mergician(content, generation) as ResumeContentData;
      setValue("content", mergedContent);

      toast.success("Conteúdo gerado com sucesso!");

      onClose();
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onSubmit = async () => {
    const content = getValues("content");

    handleGenerate(content);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <p>
        Esta funcionalidade aprimorá o conteúdo atual do currículo e também
        corrige possíveis erros gramativacais.
        <strong>Lembre-se de preencher o conteúdo antes da geração.</strong>
      </p>

      <p>Isso pode levar alguns segundos, aguarde o resultado.</p>
      <Button className="w-max ml-auto" type="submit" disabled={isPending}>
        Gerar conteúdo
      </Button>
    </form>
  );
};
