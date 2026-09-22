#!/bin/sh
set -e

echo "генерим призма клиент..."
npx prisma generate

echo "применяем миграции..."
npx prisma migrate deploy

echo "стартуем..."
exec "$@"