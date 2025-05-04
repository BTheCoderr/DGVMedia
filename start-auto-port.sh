#!/bin/bash

# Script to start the Next.js development server on an available port

echo "🍇 Da Grape Vine Media - Automatic Port Selection 🍇"
echo "-----------------------------------------------------"

# Kill any existing Next.js processes
echo "Checking for existing Next.js processes..."
pkill -f "next" || true

# Function to check if a port is available
is_port_available() {
    # Try to create a socket on the port
    if nc -z localhost $1 > /dev/null 2>&1; then
        return 1 # Port is in use
    else
        return 0 # Port is available
    fi
}

# Start with port 3000 and find the first available port
PORT=3000
MAX_PORT=3010

while [ $PORT -le $MAX_PORT ]; do
    if is_port_available $PORT; then
        echo "✅ Found available port: $PORT"
        break
    else
        echo "❌ Port $PORT is already in use, trying next port..."
        PORT=$((PORT + 1))
    fi
done

if [ $PORT -gt $MAX_PORT ]; then
    echo "❌ No available port found between 3000 and $MAX_PORT. Please free up a port and try again."
    exit 1
fi

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Start the Next.js development server on the available port
echo "🚀 Starting development server on port $PORT..."
echo "📱 Open http://localhost:$PORT in your browser"
echo "-----------------------------------------------------"
PORT=$PORT npm run dev 