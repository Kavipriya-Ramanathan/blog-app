#!/bin/bash
set -e

echo "Installing dependencies..."
cd server
npm install

cd ../client
npm install
cd ..

echo "Building frontend..."
cd client
npm run build
cd ..

echo "Starting server..."
cd server
npm start
