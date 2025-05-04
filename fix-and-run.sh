#!/bin/bash

# Da Grape Vine Media - Complete Fix and Run Script
echo "🍇🍇🍇 Da Grape Vine Media - Ultimate Fixer 🍇🍇🍇"
echo "================================================="

# Stop all existing processes
echo "Stopping all processes..."
pkill -f "next" || true
pkill -f "node" || true
sleep 2

# Clean build cache
echo "Cleaning build cache..."
rm -rf .next
rm -rf node_modules/.cache

# Re-install if necessary
if [ ! -d "node_modules" ] || [ "$1" == "--reinstall" ]; then
  echo "Installing dependencies..."
  npm install
fi

# Fix port availability
PORT=3001

# Clear screen for cleaner output
clear

echo "🍇🍇🍇 Da Grape Vine Media 🍇🍇🍇"
echo "Starting on http://localhost:$PORT"
echo "--------------------------------"

# Start with development build
PORT=$PORT npm run dev &
DEV_PID=$!

# Wait for server to start
sleep 5

# Open in browser
if [ "$(uname)" == "Darwin" ]; then  # macOS
    open "http://localhost:$PORT"
elif [ "$(expr substr $(uname -s) 1 5)" == "Linux" ]; then  # Linux
    xdg-open "http://localhost:$PORT"
elif [ "$(expr substr $(uname -s) 1 10)" == "MINGW32_NT" ] || [ "$(expr substr $(uname -s) 1 10)" == "MINGW64_NT" ]; then  # Windows
    start "http://localhost:$PORT"
fi

# Instructions
echo ""
echo "✅ Server running with your landing page on http://localhost:$PORT"
echo ""
echo "💡 If you still see errors or the default Next.js page:"
echo "   1. Wait 10 seconds for the page to fully load"
echo "   2. Refresh the browser"
echo "   3. If still not working, press Ctrl+C and run './fix-and-run.sh --reinstall'"
echo ""
echo "Press Ctrl+C to stop the server"

# Wait for the process
wait $DEV_PID 