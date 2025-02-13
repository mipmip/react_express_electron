# Milestones

## M1 Proof of Vital Requirements

- [x] Run Web and Desktop in compiled app 1.0.7
- [x] Run old React code base
- [x] combine with new server
- [x] get static routing working

- crippled main-process-bridge
- removed require.electron for net object (template browser)
- removed electron stuff in App.js

to run old react code base:

```
cd frontend
SKIP_PREFLIGHT_CHECK=true NODE_OPTIONS=--openssl-legacy-provider npm run dev
```

open url: http://localhost:4001/sites

## M2 Backend service via http

- [x] port api to be used as http server

## M3 Mount sites

- [x] mount sites and get forms working

## Long list of small and large todo's

- [ ] background jobs not working
- [ ] collections not working
- [ ] top iconbar actions not working
- [ ] electron progress popup not correctly visible
- [ ] templates gallery not working
- [ ] ugly red warning at electron startup
- [ ] pipeline build failing
- [ ] log Window not working
- [ ] menu-> File->select sites not working
- [ ] repo should be renamed
