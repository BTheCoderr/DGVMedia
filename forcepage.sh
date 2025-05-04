#!/bin/bash

# Force the app to load the actual page instead of Next.js default
echo "🍇🍇 Da Grape Vine Media - Force Loading Page 🍇🍇"
echo "==============================================="

# Stop any existing processes
echo "Stopping any existing processes..."
pkill -f "next" || true
pkill -f "node.*3000" || true
pkill -f "node.*3001" || true
pkill -f "node.*3002" || true
pkill -f "node.*3003" || true
sleep 2

# Remove the .next folder to force a clean build
echo "Removing cached files..."
rm -rf .next

# Choose a port
PORT=3001

# Start the server using the actual page.tsx file
echo "Starting server on port $PORT with your landing page..."
PORT=$PORT FORCEPAGE=true npm run dev &
SERVER_PID=$!

# Wait for server to start
sleep 5

# Open browser to your specific page
if [ "$(uname)" == "Darwin" ]; then  # macOS
    open "http://localhost:$PORT"
elif [ "$(expr substr $(uname -s) 1 5)" == "Linux" ]; then  # Linux
    xdg-open "http://localhost:$PORT"
elif [ "$(expr substr $(uname -s) 1 10)" == "MINGW32_NT" ] || [ "$(expr substr $(uname -s) 1 10)" == "MINGW64_NT" ]; then  # Windows
    start "http://localhost:$PORT"
fi

echo ""
echo "✅ Server running with your actual page on http://localhost:$PORT"
echo "Press Ctrl+C to stop the server"

# Wait for server process
wait $SERVER_PID 