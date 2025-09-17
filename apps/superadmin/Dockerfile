FROM node:18-alpine

WORKDIR /app

COPY ../../package.json ../../pnpm-lock.yaml ./ 
COPY ../../packages ./packages
COPY . .

RUN npm install -g pnpm && pnpm install
RUN pnpm build

EXPOSE 3000
CMD ["pnpm", "start"]
