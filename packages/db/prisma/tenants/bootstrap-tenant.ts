import { execSync } from "child_process";
import { Client } from "pg";

const POSTGRES_URL = process.env.DATABASE_URL as string;

export const createTenant = async (tenantId: string) => {
  const schemaName = tenantId.toLowerCase().replace(/[^a-z0-9_]/g, "_");

  // Crear el schema usando PG nativo
  const db = new Client({ connectionString: POSTGRES_URL });
  await db.connect();
  await db.query(`CREATE SCHEMA IF NOT EXISTS "${schemaName}";`);
  await db.end();

  // Correr migraciones en ese schema
  console.log(`▶ Migrando schema ${schemaName}...`);
  execSync(`prisma migrate deploy --schema=packages/db/prisma/schema.prisma`, {
    env: {
      ...process.env,
      DATABASE_URL: `${POSTGRES_URL}?schema=${schemaName}`,
    },
    stdio: "inherit",
  });

  console.log(`✅ Schema '${schemaName}' inicializado`);
};
