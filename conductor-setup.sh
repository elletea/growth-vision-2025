#!/bin/bash
set -e

echo "🔧 Setting up workspace..."

# Check for Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Error: Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check for npm
if ! command -v npm &> /dev/null; then
    echo "❌ Error: npm is not installed. Please install npm first."
    exit 1
fi

echo "✓ Node.js $(node --version) found"
echo "✓ npm $(npm --version) found"

# Install dependencies
echo "📦 Installing dependencies..."
if ! npm install; then
    echo "❌ Error: Failed to install dependencies"
    exit 1
fi

# Copy environment files if they exist in the root
if [ -n "$CONDUCTOR_ROOT_PATH" ] && [ -f "$CONDUCTOR_ROOT_PATH/.env" ]; then
    echo "📋 Copying .env file..."
    cp "$CONDUCTOR_ROOT_PATH/.env" .env
elif [ -n "$CONDUCTOR_ROOT_PATH" ] && [ -f "$CONDUCTOR_ROOT_PATH/.env.local" ]; then
    echo "📋 Copying .env.local file..."
    cp "$CONDUCTOR_ROOT_PATH/.env.local" .env.local
fi

echo "✅ Setup complete! You can now run the dev server."
