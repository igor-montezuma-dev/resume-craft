import { Controller, useFormContext } from "react-hook-form";
import { IconInput } from ".";
import { FieldWrapper } from "../field-wrapper";

type IconFieldProps = {
  label: string;
  name: string;
  containerClassName?: string;
  required?: boolean;
};

export const IconField = ({
  label,
  name,
  required,
  containerClassName,

  ...props
}: IconFieldProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: required && "Campo obrigatório",
      }}
      render={({ field, fieldState }) => (
        <FieldWrapper
          label={label}
          className={containerClassName}
          error={fieldState?.error}
        >
          <IconInput {...props} {...field} />
        </FieldWrapper>
      )}
    />
  );
};
