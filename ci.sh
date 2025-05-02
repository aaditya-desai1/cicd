#!/bin/bash
set -e

echo "🔧 Installing dependencies..."
npm install

echo "🧪 Running tests..."
npm test

echo "✅ All tests passed!"
