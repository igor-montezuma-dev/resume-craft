import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Palette } from "lucide-react";
import { useCallback, useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";
import colors from "tailwindcss/colors";
import { SectionTitle } from "../../infos-sidebar/section-title";

const keysToIgnore = [
  "current",
  "inherit",
  "currentColor",
  "transparent",
  "black",
  "white",
];

const colorKeys = Object.keys(colors).filter(
  (key) => !keysToIgnore.includes(key)
) as (keyof typeof colors)[];

export const ThemeSection = () => {
  const { control, watch } = useFormContext<ResumeData>();

  const currentColorTheme = watch("structure.colorTheme");

  const handleSetCssVariable = useCallback(() => {
    if (!currentColorTheme) return;

    const colorKey = currentColorTheme as keyof typeof colors;

    document.documentElement.style.setProperty(
      "--resume-primary",
      colors[colorKey][500]
    );
  }, [currentColorTheme]);

  useEffect(() => {
    handleSetCssVariable();
  }, [handleSetCssVariable]);

  return (
    <div>
      <SectionTitle title="Tema" icon={Palette} />
      <Controller
        control={control}
        name="structure.colorTheme"
        render={({ field }) => (
          <div className="grid grid-cols-7 gap-4 mt-4">
            {colorKeys.map((colorKey) => {
              const isSelected = field.value === colorKey;
              return (
                <Button
                  key={colorKey}
                  variant="ghost"
                  className={cn(
                    "size-7 p-1 rounded-full transition-all",
                    isSelected && "ring-2 ring-foreground"
                  )}
                  onClick={() => field.onChange(colorKey)}
                >
                  <div
                    className="size-full rounded-full"
                    style={{ backgroundColor: colors[colorKey][500] }}
                  ></div>
                </Button>
              );
            })}
          </div>
        )}
      />
    </div>
  );
};
