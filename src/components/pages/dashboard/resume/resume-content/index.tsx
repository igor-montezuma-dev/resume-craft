"use client";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { TransformControls } from "./controls";
import { NavigationHeader } from "./header";
import { ResumeTemplate } from "./templates";
export const ResumeContent = () => {
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
          <NavigationHeader />
          <TransformControls />
          <TransformComponent>
            <ResumeTemplate />
          </TransformComponent>
        </>
      </TransformWrapper>
    </section>
  );
};
