FROM node:24-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npx prisma generate
EXPOSE 3000
CMD ["npm", "run", "start"]