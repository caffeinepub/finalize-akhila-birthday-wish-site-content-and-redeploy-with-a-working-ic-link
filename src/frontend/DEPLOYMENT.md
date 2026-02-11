# Deployment Verification Checklist

This document outlines the steps to verify a successful deployment of the birthday website to a **brand-new** Internet Computer canister.

## Pre-Deployment

1. Ensure all frontend code is committed and ready
2. Verify routing is correctly configured in `App.tsx` (single RouterProvider, Outlet in root route, using ROUTES constants)
3. Confirm all assets are in place under `frontend/public/assets/`
4. Verify `404.html` exists in `frontend/public/` for deep link support with full URL preservation

## Deployment Steps (CRITICAL: Deploy to a NEW canister)

**IMPORTANT:** You MUST deploy to a brand-new canister. Do NOT reuse any previous canister ID or deployment target.

1. **Create a brand-new canister**: `dfx canister create backend --network ic`
   - This generates a fresh canister ID
   - Do NOT reuse any previous canister ID
   - The new canister ID MUST be different from any previously shared links
   - Example of what NOT to reuse: `https://caffeine.supply/d/3` or any canister ID from previous deployments
2. **Deploy to Internet Computer**: `dfx deploy --network ic`
3. **Capture the new canister URL** from deployment output (format: `https://<canister-id>.icp0.io/`)
4. **Record the URL in DEPLOYED_URL.md** immediately after deployment
5. **Verify the canister ID is different** from any previously shared links (e.g., not the same as `https://caffeine.supply/d/3`)
6. **Wait 2-3 minutes** for DNS propagation and canister configuration to fully propagate across the IC network

## Post-Deployment Verification

### Desktop (Chrome on Windows)
1. Open the new `https://<canister-id>.icp0.io/` URL in Chrome
2. Verify the landing page loads without "CANISTER ID NOT RESOLVED" or HTTP 400 errors
3. Verify you can see the birthday template selector and content with "AKHILAAA" and heart
4. Click through to `/celebrate` route
5. Verify the celebration page loads with animations, message, and "AKHILAAA" heading
6. Verify the message ends with "lovingly yours, BOMMA 🧸"
7. Refresh the browser on `/celebrate` - confirm it still loads correctly
8. Use browser back button - confirm navigation works

### Mobile (Phone Browser)
1. Open the new URL on a mobile device (both Wi-Fi and mobile data)
2. Verify the landing page loads without errors
3. Navigate to `/celebrate` by clicking the main CTA
4. Verify the celebration page displays correctly with all content visible
5. Refresh the page - confirm it continues to work

### Direct Navigation Test (CRITICAL for deep links)
1. Open a new browser tab/window
2. Navigate directly to `https://<canister-id>.icp0.io/celebrate`
3. Verify the celebration page loads without routing errors (no blank screen, no 404)
4. Navigate directly to `https://<canister-id>.icp0.io/`
5. Verify the landing page loads correctly
6. Test refresh on `/celebrate` multiple times - should always work
7. Verify the 404.html fallback preserves the full URL (pathname + search + hash) in sessionStorage
8. Verify the index.html restoration script correctly restores the full URL before React mounts

### Back/Forward Navigation Test
1. Start at the landing page (/)
2. Navigate to /celebrate
3. Click browser back button - should return to landing page
4. Click browser forward button - should return to celebration page
5. Repeat several times to ensure consistent behavior
6. Verify no blank screens or routing errors occur during navigation

### Content Verification
1. Verify all three landing templates show "HAPPY BIRTHDAY PUREST SOUL! AKHILAAA" with heart
2. Verify celebration page shows "HAPPY BIRTHDAY PUREST SOUL! AKHILAAA" with heart
3. Verify birthday message is unique and ends with "lovingly yours, BOMMA 🧸"
4. Verify no conflicting signatures appear after the closing line

## Success Criteria

- ✅ New icp0.io URL is different from previous deployments (not `https://caffeine.supply/d/3`)
- ✅ URL is recorded in DEPLOYED_URL.md with timestamp
- ✅ Landing page (/) loads on desktop Chrome without errors
- ✅ Landing page (/) loads on mobile browser without errors
- ✅ All three templates display "AKHILAAA" with heart motif
- ✅ Celebration page (/celebrate) loads via navigation
- ✅ Celebration page shows "AKHILAAA" with heart in heading
- ✅ Birthday message ends with "lovingly yours, BOMMA 🧸"
- ✅ Direct URL access to /celebrate works (no blank screen)
- ✅ Page refresh on /celebrate continues to work
- ✅ No "CANISTER ID NOT RESOLVED" or HTTP 400 errors on any route
- ✅ All animations and assets load correctly
- ✅ Browser back/forward navigation works correctly
- ✅ App.tsx uses ROUTES constants from content/routes.ts for all route definitions

## Troubleshooting

If you encounter "CANISTER ID NOT RESOLVED" or HTTP 400 errors:
- Wait 2-3 minutes for DNS propagation and canister configuration
- Try incognito/private browsing mode
- Clear browser cache
- Try a different network (mobile data vs Wi-Fi)
- Verify the canister ID in the URL matches the deployed canister
- Ensure you deployed to a brand-new canister (not reusing an old one)

If routing fails (404 or blank pages on direct navigation):
- Verify `404.html` exists in `frontend/public/`
- Verify `index.html` includes the path restoration script that runs before React mounts
- Check browser console for JavaScript errors
- Confirm all route paths use the ROUTES constants from `content/routes.ts`
- Test in incognito mode to rule out cache issues
- Verify sessionStorage contains 'redirectPath' when navigating to deep links

If deep links don't work after refresh:
- Verify the 404.html fallback is being served by the canister
- Check sessionStorage in browser dev tools for 'redirectPath' (should contain full URL with pathname + search + hash)
- Ensure the path restoration script in index.html runs before React mounts
- Wait a few minutes for canister configuration to propagate
- Test direct navigation to both `/` and `/celebrate` routes

## Sharing the Link

Once all verification steps pass:
1. Copy the new `https://<canister-id>.icp0.io/` URL from DEPLOYED_URL.md
2. Test opening it in a fresh browser/device to confirm it works
3. Share the URL with others - they should be able to open it without issues
4. If anyone reports "site cannot be reached", ask them to try:
   - A different browser
   - Mobile data instead of Wi-Fi
   - Waiting a few minutes and trying again

