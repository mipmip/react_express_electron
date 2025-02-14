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

- [x] top iconbar actions not working
- [ ] log Window not working

- [ ] background jobs not working
- [ ] collections not working
- [ ] electron progress popup not correctly visible
- [ ] templates gallery not working
- [ ] ugly red warning at electron startup
- [ ] pipeline build failing
- [ ] menu-> File->select sites not working
- [ ] repo should be renamed

## Webserver alternative/extra functions

- [ ] in main screen log window
- [ ] login screen
- [ ] disable stuff like preferences

## Cleanups/Refactors

- [ ] package.json remove unused 
- [ ] package.json upgrade old npms
- [ ] backend remove unused js files
- [ ] backend/electron upgrade to TS
- [ ] frontend upgrade to TS
- [ ] frontend upgrade to latest React
- [ ] move frontend files up
- [ ] move backend files up
