"use client";
import { useFormContext } from "react-hook-form";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { TransformControls } from "./controls";
import { NavigationHeader } from "./header";
import { ResumeTemplate } from "./templates";

type ResumeContentProps = {
  title: string;
};

export const ResumeContent = ({ title }: ResumeContentProps) => {
  const { watch } = useFormContext<ResumeData>();

  const data = watch();

  return (
    <section className="size-full flex items-center justify-center relative bg-muted dark:bg-background overflow-hidden">
      <TransformWrapper
        initialScale={0.5}
        minScale={0.4}
        centerOnInit
        centerZoomedOut
        limitToBounds={false}
      >
        <>
          <NavigationHeader title={title} />
          <TransformControls />
          <TransformComponent>
            <ResumeTemplate data={data} />
          </TransformComponent>
        </>
      </TransformWrapper>
    </section>
  );
};
