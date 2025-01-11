import { useDebounce } from "@/hooks/use-debounce";
import { Input } from "../input";

type IconInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export const IconInput = ({ value, onChange, placeholder }: IconInputProps) => {
  const debouncedValue = useDebounce(value);

  return (
    <div className="flex items-center gap-2">
      <div className="size-8 min-w-8 p-1.5 rounded-full bg-white">
        {!!debouncedValue && (
          <img
            src={`https://cdn.simpleicons.org/${debouncedValue}`}
            className="size-full object-contain"
          />
        )}
      </div>
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};
