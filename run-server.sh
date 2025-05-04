#!/bin/bash

# A simple script to start the server on an available port
echo "🍇 Da Grape Vine Media - Starting Server 🍇"
echo "----------------------------------------"

# Kill any existing Next.js processes
pkill -f "next" || true
sleep 1

# Try multiple ports
for port in 3001 3002 3003 3004 3005; do
  echo "Trying port $port..."
  
  # Start server with the current port
  PORT=$port npm run dev &
  PID=$!
  
  # Wait a moment to see if it starts
  sleep 3
  
  # Check if process is still running
  if kill -0 $PID 2>/dev/null; then
    echo "✅ Server started on port $port"
    echo "Open http://localhost:$port in your browser"
    
    # Wait for the server process to complete
    wait $PID
    exit 0
  else
    echo "❌ Failed to start on port $port"
  fi
done

echo "❌ Could not start server on any port"
exit 1 