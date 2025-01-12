import { Separator } from "@/components/ui/separator";
import { LayoutSection } from "./sections/layout";
import { TemplatesListSection } from "./sections/templates-list";
import { ThemeSection } from "./sections/theme";

export const StructureSidebar = () => {
  return (
    <aside className="w-full h-full p-6 overflow-y-auto">
      <TemplatesListSection />
      <Separator className="my-5" />
      <LayoutSection />
      <Separator className="my-5" />
      <ThemeSection />
    </aside>
  );
};
