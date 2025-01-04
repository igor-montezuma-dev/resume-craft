import { ComponentProps } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from ".";
import { FieldWrapper } from "../field-wrapper";

type InputFieldProps = ComponentProps<typeof Input> & {
  label: string;
  name: string;
};

export const InputField = ({
  label,
  name,
  required,
  ...props
}: InputFieldProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name="name"
      rules={{
        required: required && "Campo obrigatório",
      }}
      render={({ field, fieldState }) => (
        <FieldWrapper Label={label}>
          <Input {...field} {...props} placeholder={label} />
          {fieldState.error && (
            <p className="text-red-500 text-sm">{fieldState.error.message}</p>
          )}
        </FieldWrapper>
      )}
    />
  );
};
