import { auth } from "@/lib/auth";
import { eq } from "drizzle-orm";
import { cache } from "react";
import { db } from "./drizzle";
import { resumes } from "./schema";
import { ResumeDTO } from "./types";

export const getResumes = cache(async (): Promise<ResumeDTO[]> => {
  const session = await auth();

  const userId = session?.user?.id;

  if (!userId) return [];

  const userResumes = await db.query.resumes.findMany({
    where: eq(resumes.userId, userId),
  });

  return userResumes;
});

export const getResumeById = cache(
  async (id: string): Promise<ResumeDTO | undefined> => {
    const session = await auth();

    const userId = session?.user?.id;

    if (!userId) return undefined;

    const resume = await db.query.resumes.findFirst({
      where: eq(resumes.id, id),
    });

    return resume;
  }
);
