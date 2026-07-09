#!/usr/bin/env bash
# Stage, commit (if needed), and push to the currently active branch.
# Usage:
#   ./scripts/git-push.sh "feat: describe what actually changed"  # required when there are changes

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

BRANCH="$(git branch --show-current)"
if [[ -z "$BRANCH" ]]; then
  echo "Error: not on any branch (detached HEAD?)." >&2
  exit 1
fi

echo "→ Branch: $BRANCH"

# Stage tracked changes + new source/docs files; skip junk
git add -A \
  -- . \
  ':!.DS_Store' \
  ':!**/.DS_Store' \
  ':!node_modules' \
  ':!node_modules/**' \
  ':!node_modules/.vite' \
  ':!node_modules/.vite/**' \
  2>/dev/null || git add -u

# Also pick up new files outside ignored paths
for path in src index.html package.json package-lock.json design.md AGENTS.md agent.md README.md scripts .cursor; do
  [[ -e "$path" ]] && git add "$path" 2>/dev/null || true
done

# Unstage anything that slipped through
git reset -q HEAD -- node_modules .DS_Store '**/.DS_Store' node_modules/.vite 2>/dev/null || true

STAGED="$(git diff --cached --name-only)"

if [[ -n "$STAGED" ]]; then
  if [[ -z "${1:-}" ]]; then
    echo "Error: commit message required — must describe what changed." >&2
    echo "" >&2
    echo "Staged changes:" >&2
    git diff --cached --stat >&2
    echo "" >&2
    echo "Usage: ./scripts/git-push.sh \"docs: add design system guidelines\"" >&2
    exit 1
  fi

  MSG="$1"
  echo "→ Commit: $MSG"
  git commit -m "$MSG"
else
  echo "→ No changes to commit"
fi

# Push
UPSTREAM="$(git rev-parse --abbrev-ref --symbolic-full-name @{u} 2>/dev/null || true)"
if [[ -z "$UPSTREAM" ]]; then
  echo "→ Pushing with -u origin $BRANCH"
  git push -u origin "$BRANCH"
else
  echo "→ Pushing to $UPSTREAM"
  git push
fi

echo "✓ Done on $BRANCH"
