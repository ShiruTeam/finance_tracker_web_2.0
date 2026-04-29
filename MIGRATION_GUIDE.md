# Next.js → Vite Migration Guide

## ✅ Completed Setup

Your finance_tracker_web_2.0 project has been successfully migrated from Next.js to Vite. Here's what was done:

### Core Changes
1. **Updated package.json**
   - Removed: `next`, `eslint-config-next`
   - Added: `vite`, `@vitejs/plugin-react`, `react-router-dom`
   - Changed scripts: `dev` → `vite`, `build` → `vite build`, `start` → `preview`

2. **New Project Structure**
   ```
   src/
   ├── main.tsx              # Entry point
   ├── App.tsx               # Router setup
   ├── app/
   │   └── globals.css       # Tailwind + global styles
   ├── pages/
   │   ├── landing/
   │   ├── auth/ (login, register, forgot-password, reset-password)
   │   ├── dashboard/
   │   ├── mainApp/
   │   └── legal/ (privacy, security, terms)
   ├── components/
   │   ├── navBar.tsx
   │   ├── pageLoader.tsx
   │   └── landing/ (various landing components)
   ├── context/
   │   └── authContext.tsx
   ├── hooks/ (ready for your API hooks)
   ├── lib/
   │   └── api/ (client.ts, types.ts)
   ```

3. **Configuration Files Created**
   - `vite.config.ts` - Vite configuration with API proxy
   - `index.html` - HTML entry point
   - `.env.example` - Environment variables template
   - Updated `tsconfig.json` for Vite

4. **Environment Variables** (copy to `.env.local`)
   ```
   VITE_API_URL=http://localhost:3001
   VITE_GOOGLE_CLIENT_ID=your_google_client_id_here
   VITE_DEV_EMAIL=dev@example.com
   VITE_DEV_PASSWORD=devpassword
   ```
   
   Note: All `NEXT_PUBLIC_*` variables are now `VITE_*`

## 🚀 Getting Started

### Development Server
```bash
npm run dev
# Starts at http://localhost:5173
```

### Production Build
```bash
npm run build
# Output: dist/
```

### Preview Production Build
```bash
npm run preview
```

## 📋 Next Steps - Migration Checklist

### 1. **Move Your Components** (Priority: HIGH)
   - [ ] Copy remaining components from `app/components/mainApp/` → `src/components/mainApp/`
   - [ ] Copy hook files from `app/hooks/api/` → `src/hooks/api/`
   - [ ] Copy context files if any → `src/context/`
   - Update all import paths:
     - `@/` still works via tsconfig paths alias
     - Remove Next.js specific imports (`"use client"`, `next/link`, etc.)

### 2. **Update Page Components** (Priority: HIGH)
   - [ ] Fill in actual page content in `src/pages/` (currently stubs)
   - [ ] Update all relative imports from `app/` to `@/`
   - Replace Next.js imports:
     ```typescript
     // ❌ Remove
     import Link from "next/link";
     import { useRouter } from "next/navigation";
     
     // ✅ Use instead
     import { Link, useNavigate } from 'react-router-dom';
     ```

### 3. **Routing Updates** (Priority: HIGH)
   - [ ] Review `src/App.tsx` - update routes as needed
   - [ ] Replace query-param navigation with React Router:
     ```typescript
     // Old Next.js way
     router.push('/?view=portfolio');
     
     // New React Router way
     navigate('/portfolio');
     ```
   - [ ] Update internal links to use `<Link>` from react-router-dom

### 4. **API Integration** (Priority: MEDIUM)
   - [ ] Test API proxy (runs on dev server)
   - [ ] Create .env.local with your API_URL
   - [ ] Verify auth flows with new environment variable names

### 5. **Static Assets** (Priority: MEDIUM)
   - [ ] Copy remaining files from `public/` if not already there
   - [ ] Images, fonts, manifests work the same way

### 6. **Environment Variables** (Priority: MEDIUM)
   - [ ] Create `.env.local` (not committed to git)
   - [ ] Use `import.meta.env.VITE_*` instead of `process.env.NEXT_PUBLIC_*`

### 7. **Delete Old Next.js Files** (Priority: LOW)
   ```bash
   rm -rf app/                    # Old Next.js app directory
   rm -rf .next/                  # Build cache
   rm next-env.d.ts              # Next.js types
   ```

## 🔧 Key Differences from Next.js

| Feature | Next.js | Vite |
|---------|---------|------|
| **Routing** | File-based (auto) | React Router (manual) |
| **API Routes** | Built-in `/api` | Proxy to external server |
| **Env Variables** | `NEXT_PUBLIC_*` → `process.env` | `VITE_*` → `import.meta.env` |
| **Client Components** | `"use client"` directive | No directive needed |
| **Build Output** | `.next/` | `dist/` |
| **Dev Server** | `next dev` | `vite` |

## 📁 File Organization Reference

### Before (Next.js)
```
app/(pages)/auth/login/page.tsx      → /login route
app/components/*/component.tsx        → Imported as @/components
lib/api/client.ts                     → Shared utilities
```

### After (Vite)
```
src/pages/auth/login/page.tsx         → /login route (via router)
src/components/*/component.tsx        → Imported as @/components
src/lib/api/client.ts                 → Shared utilities
```

## 🧪 Testing Your Migration

```bash
# 1. Build test (already passing ✓)
npm run build

# 2. Dev server
npm run dev

# 3. Check routing works
# Visit http://localhost:5173 - should show landing page
# Visit http://localhost:5173/login - should show login page

# 4. Check API proxy
# Ensure VITE_API_URL is set correctly
# API calls to /api/* will be proxied

# 5. Production preview
npm run build && npm run preview
```

## 🔗 API Proxy Configuration

The Vite dev server automatically proxies `/api` requests to your backend:

```typescript
// vite.config.ts already configured:
server: {
  proxy: {
    '/api': {
      target: process.env.VITE_API_URL || 'http://localhost:3001',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''),
    },
  },
}
```

Example: `fetch('/api/auth/login')` → proxied to `http://localhost:3001/auth/login`

## ⚠️ Common Issues & Solutions

### Issue: "Cannot find module '@/...'"
**Solution:** Ensure `tsconfig.json` has paths alias pointing to `./src/*`

### Issue: "Cannot find module 'react-router-dom'"
**Solution:** Already installed, but you may need to restart dev server

### Issue: Environment variables not loading
**Solution:** 
1. Create `.env.local` file in project root
2. Restart dev server
3. Use `import.meta.env.VITE_*` (not `process.env`)

### Issue: CSS not loading
**Solution:** Ensure `src/main.tsx` imports `'./app/globals.css'`

## 📚 Resources

- Vite Docs: https://vitejs.dev/
- React Router Docs: https://reactrouter.com/
- Tailwind CSS: https://tailwindcss.com/ (no config needed, already in globals.css)

## 📝 Migration Summary

| Item | Status | Notes |
|------|--------|-------|
| Package.json | ✅ Done | Removed Next.js, added Vite & React Router |
| Build Config | ✅ Done | vite.config.ts + index.html |
| TypeScript Config | ✅ Done | Updated for ES2020 + Vite |
| Entry Point | ✅ Done | src/main.tsx + src/App.tsx |
| Basic Pages | ✅ Done | Stub pages created, ready for content |
| Styling | ✅ Done | globals.css + Tailwind configured |
| Auth Context | ✅ Done | Migrated to src/context/ |
| API Client | ✅ Done | Env vars updated for Vite |
| Components | ⏳ Pending | Copy from app/ and update imports |
| Routes | ⏳ Pending | May need adjustment based on app logic |
| Testing | ⏳ Pending | Run full test suite with new setup |

## 🎯 Quick Start After Setup

```bash
# Install (already done)
npm install

# Copy remaining components
# Update import paths in all files
# Create .env.local with API URL

# Start dev server
npm run dev

# Build for production
npm run build
```

---

**Happy migrating!** 🚀
