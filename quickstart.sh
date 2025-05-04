#!/bin/bash

# Comprehensive quick start script for Da Grape Vine Media
echo "🍇🍇🍇 Da Grape Vine Media - QuickStart 🍇🍇🍇"
echo "=============================================="

# Stop any existing processes
echo "Stopping any existing processes..."
pkill -f "next" || true
pkill -f "node.*3000" || true
pkill -f "node.*3001" || true
pkill -f "node.*3002" || true
pkill -f "node.*3003" || true
sleep 2

# Choose a port - start with 3001 to avoid common conflicts
PORT=3001

echo "Starting development server on port $PORT..."
echo "✨ This will open in your browser automatically ✨"
echo "----------------------------------------------"

# Start the server on the chosen port
PORT=$PORT npm run dev & 
SERVER_PID=$!

# Wait for server to start
sleep 5

# Open in the browser
if [ "$(uname)" == "Darwin" ]; then  # macOS
    open "http://localhost:$PORT"
elif [ "$(expr substr $(uname -s) 1 5)" == "Linux" ]; then  # Linux
    xdg-open "http://localhost:$PORT"
elif [ "$(expr substr $(uname -s) 1 10)" == "MINGW32_NT" ] || [ "$(expr substr $(uname -s) 1 10)" == "MINGW64_NT" ]; then  # Windows
    start "http://localhost:$PORT"
fi

# Keep script running to keep the server running
echo ""
echo "✅ Server running on http://localhost:$PORT"
echo "Press Ctrl+C to stop the server"

# Wait for server process
wait $SERVER_PID 