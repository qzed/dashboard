FROM node:alpine as base

# ---- install dependencies ----------------------------------------------------

FROM base as deps
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile

# ---- build source ------------------------------------------------------------

FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN yarn build

# ---- build image -------------------------------------------------------------

FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN mkdir ./.next
RUN chown node:node ./.next

COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static

USER node

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD [ "node", "server.js" ]
