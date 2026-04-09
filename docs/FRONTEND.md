# Frontend

## What it is

Mile's frontend is a single-page investment platform built with Next.js 16 and React 19. It handles everything from authentication to real-time portfolio analytics, with a focus on performance and a clean, data-dense UI.

---

## Tech Stack

| | |
|---|---|
| **Next.js 16** | App Router, SSR, Turbopack |
| **React 19** | UI with latest concurrent features |
| **TypeScript** | End-to-end type safety |
| **Tailwind CSS 4** | Utility-first styling system |
| **lightweight-charts** | High-performance financial charting |
| **Three.js** | 3D animations on the landing page |
| **Google OAuth** | Sign-in via `@react-oauth/google` |

---

## Architecture

The app is split into three distinct layers:

**Landing** — public marketing page with 3D hero animation and feature showcase.

**Auth** — standalone login, register, and password reset flows with Google OAuth support.

**Main App** — protected shell that loads once after authentication. Navigation is handled via `?view=` query params, keeping the layout persistent while swapping views without full page reloads.

```
/ → Landing
/auth/login → Auth flow
/mainApp?view=dashboard → Main app
/mainApp?view=positions
/mainApp?view=transactions
/mainApp?view=analytics-performance
/mainApp?view=analytics-benchmarks
/mainApp?view=tax-report
/mainApp?view=returns-history
/mainApp?view=settings
```

---

## State Management

No Redux or Zustand — kept intentionally lightweight with **React Context + custom hooks**:

- **`AuthContext`** — manages the session token, user data, and auth state. Persisted to `localStorage` so sessions survive page reloads.
- **`PortfolioContext`** — tracks the active portfolio selection across all views, synced with URL params.
- **Domain hooks** — each feature area (`usePortfolios`, `usePositions`, `useTransactions`, etc.) owns its own data fetching, loading, and error state.

---

## API Layer

All backend communication goes through a single typed client at `lib/api/client.ts`. It wraps native `fetch` with Bearer token auth, standardized error handling, and full TypeScript types for every response.

```ts
const portfolios = await apiClient.listPortfolios(token);
const positions  = await apiClient.listPositions(token, portfolioId);
```

This keeps data-fetching logic out of components and makes the backend contract explicit throughout the codebase.

---

## Environment Variables

```
NEXT_PUBLIC_API_BASE_URL       Backend REST API
NEXT_PUBLIC_GOOGLE_CLIENT_ID   Google OAuth
```
