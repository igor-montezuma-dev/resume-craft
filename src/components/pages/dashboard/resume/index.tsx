"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { FormProvider, useForm } from "react-hook-form";
import { InfosSidebar } from "./infos-sidebar";
import { ResumeContent } from "./resume-content";
import { StructureSidebar } from "./structure-sidebar";

export const ResumePage = () => {
  const defaultValues: ResumeData = {
    content: {
      image: {
        url: "",
        visible: true,
      },
      infos: {
        fullName: "",
        email: "",
        headline: "",
        location: "",
        phone: "",
        website: "",
      },
      summary: "",
      certifications: [],
      educations: [],
      experiences: [],
      languages: [],
      projects: [],
      skills: [],
      socialMedias: [
        {
          icon: "",
          name: "Teste 1",
          url: "Teste1",
          username: "Teste1",
        },
        {
          icon: "",
          name: "Teste 2",
          url: "Teste2",
          username: "Teste2",
        },
      ],
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
