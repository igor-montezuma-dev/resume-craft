import { Button } from "@/components/ui/button";

import { ApiService } from "@/services/api";
import { useMutation } from "@tanstack/react-query";
import { mergician } from "mergician";
import { Controller, useForm, useFormContext } from "react-hook-form";
import { toast } from "sonner";
import { languagesOptions } from "../../../structure-sidebar/sections/languages";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FormData = {
  language: ResumeLanguages;
};

type GenerateTranslationProps = {
  onClose: () => void;
};
export const GenerateTranslation = ({ onClose }: GenerateTranslationProps) => {
  const {
    control,
    handleSubmit,
    getValues: getFormValue,
  } = useForm<FormData>();
  const { setValue, getValues } = useFormContext<ResumeData>();

  const { mutate: handleGenerate, isPending } = useMutation({
    mutationFn: ApiService.translate,
    onSuccess: (data) => {
      const content = getValues("content");

      const generation = JSON.parse(data.data);

      const mergedContent = mergician(content, generation) as ResumeContentData;

      const language = getFormValue("language");

      setValue("content", mergedContent);
      setValue("structure.language", language);

      toast.success("Conteúdo gerado com sucesso!");

      onClose();
    },
  });

  const onSubmit = async (formData: FormData) => {
    const content = getValues("content");

    const selectedLanguage = languagesOptions.find(
      (item) => item.value === formData.language
    );

    handleGenerate({
      content,
      language: selectedLanguage?.label!,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <p>
        Esta funcionalidade traduz o conteúdo atual para o idioma selecionado
        abaixo.
      </p>
      <p>Isso pode levar alguns segundos, aguarde o resultado.</p>
      <Controller
        control={control}
        name="language"
        rules={{ required: "Selecione um idioma" }}
        render={({ field }) => (
          <Select value={field.value} onValueChange={field.onChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selecionar idioma" />
            </SelectTrigger>
            <SelectContent>
              {languagesOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
      <Button className="w-max ml-auto" type="submit" disabled={isPending}>
        Gerar conteúdo
      </Button>
    </form>
  );
};
