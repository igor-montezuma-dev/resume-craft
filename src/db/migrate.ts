import { neon } from "@neondatabase/serverless";
import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { migrate } from "drizzle-orm/neon-http/migrator";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

const main = async () => {
  try {
    await db.execute(`DROP TABLE IF EXISTS "account"`);
    await db.execute(`DROP TABLE IF EXISTS "session"`);
    await db.execute(`DROP TABLE IF EXISTS "authenticator"`);
    await db.execute(`DROP TABLE IF EXISTS "user"`);
    await db.execute(`DROP TABLE IF EXISTS "verificationToken"`);
    await db.execute(`DROP TABLE IF EXISTS "resumes"`);

    await migrate(db, { migrationsFolder: "./src/drizzle" });
    console.log("Migration completed");
  } catch (error) {
    console.error("Error during migration:", error);
    process.exit(1);
  }
};

main();