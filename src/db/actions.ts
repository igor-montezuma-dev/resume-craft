"use server";

import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { db } from "./drizzle";
import { resumes } from "./schema";

export const createResume = async(title: string) => {
    const session = await auth();

    const userId = session?.user?.id;

    if (!userId) {
        throw new Error("Usuário não encontrado.");
    }

    const newResume = await db
    .insert(resumes)
    .values({ title, userId })
    .returning();

    revalidatePath("/dashboard/resumes");

    return newResume[0];
};
