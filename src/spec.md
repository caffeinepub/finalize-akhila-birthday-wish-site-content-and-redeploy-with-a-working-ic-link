# Specification

## Summary
**Goal:** Republish the app to a brand-new Internet Computer canister and provide a fresh working shareable public URL, ensuring SPA routing and deep links work for both `/` and `/celebrate`.

**Planned changes:**
- Deploy/publish the app to a new canister (do not reuse any previous deployment).
- Produce and share a new public URL that is different from https://caffeine.supply/d/3.
- Verify SPA routing/deep-link behavior for `/` and `/celebrate` per `frontend/DEPLOYMENT.md` (direct navigation, refresh on `/celebrate`, back/forward navigation, and 404 fallback restoration).

**User-visible outcome:** The user receives a new, working public URL (different from https://caffeine.supply/d/3) that loads correctly on both `/` and `/celebrate`, including when deep-linking or refreshing.
