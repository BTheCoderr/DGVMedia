#!/bin/bash

# Simple startup script for Da Grape Vine website

echo "🍇 Starting Da Grape Vine Media Website Development Server 🍇"
echo "-----------------------------------------------------"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install Node.js and npm first."
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Start the development server
echo "🚀 Starting development server..."
echo "📱 Open http://localhost:3000 in your browser"
echo "-----------------------------------------------------"
npm run dev 