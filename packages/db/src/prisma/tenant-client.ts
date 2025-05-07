import { PrismaClient } from "../../generated";

const clients: Record<string, PrismaClient> = {};

export function getPrismaClientForTenant(tenantId: string) {
  if (clients[tenantId]) return clients[tenantId];

  const client = new PrismaClient({
    datasources: {
      db: {
        url: `${process.env.DATABASE_URL}?schema=${tenantId}`,
      },
    },
  });

  clients[tenantId] = client;
  return client;
}
