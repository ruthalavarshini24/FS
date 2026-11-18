#!/usr/bin/env bash
# Usage: ./scripts/verify.sh https://<service>.onrender.com https://<app>.vercel.app
API="${1:?backend URL}"; FRONT="${2:?frontend URL}"
echo "== TC-01 health =="; curl -s -i "$API/api/health" | head -n 20
echo; echo "== students =="; curl -s -i "$API/api/students" | head -n 20
echo; echo "== TC-03 CORS preflight (allowed origin) =="
curl -s -i -X OPTIONS "$API/api/students" -H "Origin: $FRONT" -H "Access-Control-Request-Method: GET" | grep -iE "^HTTP|access-control-allow-origin"
echo; echo "== TC-04 CORS (unknown origin; expect NO access-control-allow-origin) =="
curl -s -i -X OPTIONS "$API/api/students" -H "Origin: https://evil.example" -H "Access-Control-Request-Method: GET" | grep -iE "^HTTP|access-control-allow-origin" || echo "(no ACAO header - correct)"
