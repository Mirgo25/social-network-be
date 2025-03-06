#!/bin/bash
if [ -z "$1" ]; then
  echo "Enter migration name"
  exit 1
fi

NAME=$1

rm -rf ./dist
npm run typeorm -- -d ./src/typeorm.config.ts migration:generate ./src/database/migrations/$NAME
