# Milestones

## M1 Proof of Vital Requirements

- [x] Run Web and Desktop in compiled app 1.0.7
- [x] Run old React code base
- [ ] combine with new server
- [ ] build together as app

- crippled main-process-bridge
- removed require.electron for net object (template browser)
- removed electron stuff in App.js

to run old react code base:

```
cd frontend
SKIP_PREFLIGHT_CHECK=true NODE_OPTIONS=--openssl-legacy-provider npm run dev
```

open url: http://localhost:4001/sites


