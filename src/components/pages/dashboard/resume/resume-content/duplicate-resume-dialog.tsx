"use client";

import { Button } from "@/components/ui/button";
import { BaseDialogProps, Dialog } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { duplicateResume } from "@/db/actions";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

type FormData = {
  title: string;
};

export const DuplicateResumeDialog = (props: BaseDialogProps) => {
  const [open, setOpen] = useState(false);

  const params = useParams();
  const router = useRouter();

  const methods = useForm<FormData>();

  const resumeId = params.id as string;

  const onsubmit = async (data: FormData) => {
    try {
      const newResume = await duplicateResume(resumeId, data.title);
      toast.success("Currículo duplicado com sucesso.");
      router.push(`/dashboard/resumes/${newResume.id}`);
    } catch (error) {
      console.error(error);
      toast.error("Erro ao duplicar currículo, tente novamente mais tarde.");
    }
  };

  return (
    <Dialog
      {...props}
      open={open}
      setOpen={setOpen}
      title="Duplicar currículo"
      description="Será criado um novo currículo com o mesmo conteudo do atual. Insira o novo título para prosseguir."
      content={
        <form
          className="flex flex-col"
          onSubmit={methods.handleSubmit(onsubmit)}
        >
          <Controller
            control={methods.control}
            name="title"
            rules={{ required: "Campo obrigatório" }}
            render={({ field }) => (
              <Input placeholder="Novo título" {...field} />
            )}
          />
          <div className="flex gap-4 mt-4 ml-auto">
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button type="submit">Duplicar</Button>
          </div>
        </form>
      }
    />
  );
};
