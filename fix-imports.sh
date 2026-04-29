#!/bin/bash

echo "🔧 Fixing import paths..."

# Replace @/app/ with @/ (since we've moved everything to src/)
find src -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i '' 's|@/app/|@/|g' {} \;

# Also replace relative imports like ../../ that point to old app structure
# This is trickier, so we'll note it for manual review

# Fix any remaining router references that should be navigate
find src -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i '' 's|\[isHydrated, isAuthenticated, router\]|[isHydrated, isAuthenticated, navigate]|g' {} \;
find src -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i '' 's|\[.*router\]|[isHydrated, isAuthenticated, navigate]|g' {} \;

echo "✅ Import paths fixed!"

