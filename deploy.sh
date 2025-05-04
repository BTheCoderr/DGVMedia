#!/bin/bash

# Script to prepare the project for deployment

echo "🍇 Da Grape Vine Media - Deployment Preparation 🍇"
echo "----------------------------------------------"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install Node.js and npm first."
    exit 1
fi

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the project
echo "🏗️ Building project for production..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "Your site is ready for deployment! You can deploy it to:"
    echo ""
    echo "1. Vercel (Recommended for Next.js):"
    echo "   - Install Vercel CLI: npm i -g vercel"
    echo "   - Deploy: vercel"
    echo ""
    echo "2. Netlify:"
    echo "   - Install Netlify CLI: npm i -g netlify-cli"
    echo "   - Deploy: netlify deploy"
    echo ""
    echo "3. GitHub Pages:"
    echo "   - You'll need to add a GitHub workflow file"
    echo ""
    echo "4. Other hosting providers:"
    echo "   - Upload the contents of the 'out' directory"
    echo ""
else
    echo "❌ Build failed. Please fix the errors and try again."
fi 