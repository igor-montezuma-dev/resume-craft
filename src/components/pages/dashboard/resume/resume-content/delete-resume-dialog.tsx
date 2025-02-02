"use client";

import { Button } from "@/components/ui/button";
import { BaseDialogProps, Dialog } from "@/components/ui/dialog";
import { deleteResume } from "@/db/actions";
import { useMutation } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export const DeleteResumeDialog = (props: BaseDialogProps) => {
  const [open, setOpen] = useState(false);

  const params = useParams();
  const router = useRouter();

  const resumeId = params.id as string;

  const { mutate: handleDeleteResume, isPending } = useMutation({
    mutationFn: deleteResume,
    onSuccess: () => {
      toast.success("Currículo deletado com sucesso.");
      setOpen(false);
      router.push("/dashboard/resumes");
    },
  });

  const onDelete = async () => {
    handleDeleteResume(resumeId);
  };

  return (
    <Dialog
      {...props}
      open={open}
      setOpen={setOpen}
      title="Deletar currículo"
      description="Tem certeza que deseja deletar este currículo? Essa ação não pode ser desfeita."
      content={
        <div className="flex ml-auto gap-2">
          <Button onClick={() => setOpen(false)}>Cancelar</Button>
          <Button variant="destructive" onClick={onDelete} disabled={isPending}>
            Deletar
          </Button>
        </div>
      }
    />
  );
};
