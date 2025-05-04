#!/bin/bash

# Simple script to open the project in VS Code

echo "🍇 Opening Da Grape Vine Media Website in VS Code 🍇"

# Check if VS Code is installed
if command -v code &> /dev/null; then
    code .
    echo "✅ Project opened in VS Code!"
else
    echo "❌ VS Code not found. Please install VS Code or open the project manually."
    echo "📂 Project location: $(pwd)"
    
    # Try to open the folder with the default file browser
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        open .
        echo "📂 Opened project folder in Finder"
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        # Linux
        if command -v xdg-open &> /dev/null; then
            xdg-open .
            echo "📂 Opened project folder in file browser"
        fi
    elif [[ "$OSTYPE" == "msys" || "$OSTYPE" == "cygwin" ]]; then
        # Windows
        explorer .
        echo "📂 Opened project folder in Explorer"
    fi
fi 