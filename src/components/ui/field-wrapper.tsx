import { ReactNode } from "react";

type FieldWrapperProps = {
  Label: string;
  children: ReactNode;
};

export const FieldWrapper = ({ Label, children }: FieldWrapperProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Label>{Label}</Label>
      {children}
    </div>
  );
};
