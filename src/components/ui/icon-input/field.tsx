import { Controller, useFormContext } from "react-hook-form";
import { FieldWrapper } from "../field-wrapper";
import { IconInput } from ".";


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
        <FieldWrapper label={label} className={containerClassName}>
          <IconInput {...props} {...field} />
          {fieldState.error && (
            <p className="text-sm text-red-500">{fieldState.error.message}</p>
          )}
        </FieldWrapper>
      )}
    />
  );
};
