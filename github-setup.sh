#!/bin/bash

# Helper script for setting up GitHub repository

echo "🍇 Da Grape Vine Media - GitHub Setup Guide 🍇"
echo "-------------------------------------------"
echo ""
echo "Follow these steps to connect your project to GitHub:"
echo ""
echo "1. Create a new GitHub repository:"
echo "   - Go to https://github.com/new"
echo "   - Repository name: dgvmedia"
echo "   - Description: Da Grape Vine Media Website"
echo "   - Choose 'Public' or 'Private' based on your preference"
echo "   - Click 'Create repository'"
echo ""
echo "2. Once created, copy the repository URL"
echo "   (It will look like: https://github.com/YourUsername/dgvmedia.git)"
echo ""
echo "3. Run the following commands in your terminal:"
echo ""
echo "   git remote add origin YOUR_REPOSITORY_URL"
echo "   git push -u origin main"
echo ""
echo "Replace YOUR_REPOSITORY_URL with the URL you copied from GitHub."
echo ""
echo "Would you like to enter your GitHub repository URL now? (y/n)"
read -r response

if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]; then
    echo ""
    echo "Enter your GitHub repository URL:"
    read -r repo_url
    
    if [[ -n "$repo_url" ]]; then
        git remote add origin "$repo_url"
        echo "Remote 'origin' added. Pushing to GitHub..."
        git push -u origin main
        
        echo ""
        echo "✅ Your project is now connected to GitHub!"
        echo "   Repository URL: $repo_url"
    else
        echo "No URL provided. You can add it later with:"
        echo "git remote add origin YOUR_REPOSITORY_URL"
        echo "git push -u origin main"
    fi
else
    echo ""
    echo "You can set up GitHub later by running:"
    echo "git remote add origin YOUR_REPOSITORY_URL"
    echo "git push -u origin main"
fi 