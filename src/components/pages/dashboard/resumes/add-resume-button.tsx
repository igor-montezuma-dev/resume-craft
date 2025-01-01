import { PlusIcon } from "lucide-react";
import { ResumeCardButton } from "./resume-card";

export const AddResumeButton = () => {
  return (
    <ResumeCardButton
      title="Criar novo currículo"
      description="Comece do zero"
      icon={<PlusIcon size={50} />}
    />
  );
};
