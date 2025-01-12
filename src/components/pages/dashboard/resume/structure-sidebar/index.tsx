import { Separator } from "@/components/ui/separator";
import { TemplatesListSection } from "./sections/templates-list";

export const StructureSidebar = () => {
  return (
    <aside className="size-full p-6 overflow-y-auto">
      <TemplatesListSection />
      <Separator className="my-5" />
    </aside>
  );
};
