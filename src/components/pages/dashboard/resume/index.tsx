"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { User } from "next-auth";
import { FormProvider, useForm } from "react-hook-form";
import { InfosSidebar } from "./infos-sidebar";
import { ResumeContent } from "./resume-content";
import { StructureSidebar } from "./structure-sidebar";

type ResumePageProps = {
  title: string;
  initialData: Partial<ResumeData>;
  user?: User;
};

export const ResumePage = ({ title, initialData, user }: ResumePageProps) => {
  const defaultValues: ResumeData = {
    content: {
      summary: "<p></p>",
      image: {
        url: user?.image ?? "",
        visible: true,
      },
      infos: {
        fullName: user?.name ?? "",
        email: user?.email ?? "",
        headline: "",
        location: "",
        phone: "",
        website: "",
      },

      certifications: [],
      educations: [],
      experiences: [],
      languages: [],
      projects: [],
      skills: [],
      socialMedias: [],
    },
    structure: {
      template: "ditto",
      colorTheme: "slate",
      language: "portuguese",
      layout: {
        mainSections: [
          { key: "socialMedias" },
          { key: "summary" },
          { key: "experiences" },
          { key: "educations" },
          { key: "certifications" },
          { key: "projects" },
        ],
        sidebarSections: [{ key: "languages" }, { key: "skills" }],
      },
    },
  };
  const methods = useForm<ResumeData>({
    defaultValues,
  });

  return (
    <FormProvider {...methods}>
      <main className="w-full h-screen overflow-hidden">
        <ResizablePanelGroup direction="horizontal" className="size-full">
          <ResizablePanel minSize={20} maxSize={40} defaultSize={30}>
            <InfosSidebar />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel>
            <ResumeContent />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel minSize={20} maxSize={35} defaultSize={25}>
            <StructureSidebar />
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </FormProvider>
  );
};
