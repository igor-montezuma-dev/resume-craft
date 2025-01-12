import { cn } from "@/lib/utils";
import { LayoutTemplate } from "lucide-react";
import Image from "next/image";
import { Controller, useFormContext } from "react-hook-form";
import { SectionTitle } from "../../infos-sidebar/section-title";

const allTemplates: ResumeTemplates[] = ["ditto", "eevee", "jynx", "onix"];

export const TemplatesListSection = () => {
  const { control } = useFormContext<ResumeData>();

  return (
    <div>
      <SectionTitle title="Modelos" icon={LayoutTemplate} />
      <Controller
        control={control}
        name="structure.template"
        render={({ field }) => (
          <div className="w-full grid grid-cols-2 gap-4 mt-4">
            {allTemplates.map((template) => {
              const isSelected = field.value === template;
              return (
                <button
                  type="button"
                  key={`template-${template}`}
                  className={cn(
                    "w-full aspect-auto relative rounded border-2 border-muted overflow-hidden hover:brightness-125 transition-all",
                    isSelected && "border-muted-foreground"
                  )}
                  onClick={() => field.onChange(template)}
                >
                  <Image
                    className="size-full object-cover "
                    width={150}
                    height={130}
                    src={`/images/templates/${template}.webp`}
                    alt={template}
                  />
                  <div
                    className={cn(
                      "size-full flex flex-col items-center justify-end p-2 absolute text-sm font-bold font-title",
                      "capitalize bg-gradient-to-t from-background inset-0"
                    )}
                  >
                    {template}
                  </div>
                </button>
              );
            })}
          </div>
        )}
      />
    </div>
  );
};
