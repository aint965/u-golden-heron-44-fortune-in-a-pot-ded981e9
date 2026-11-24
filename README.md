# Fortune in a Pot

[![Fortune in a Pot](https://make.fun/badge/u-golden-heron-44-fortune-in-a-pot-ded981e9.svg)](https://make.fun/bounty/u-golden-heron-44-fortune-in-a-pot-ded981e9)
[![Rank](https://make.fun/badge/u-golden-heron-44-fortune-in-a-pot-ded981e9/aint965/u-golden-heron-44-fortune-in-a-pot-ded981e9/rank.svg)](https://make.fun/bounty/u-golden-heron-44-fortune-in-a-pot-ded981e9)
[![Reward](https://make.fun/badge/u-golden-heron-44-fortune-in-a-pot-ded981e9/aint965/u-golden-heron-44-fortune-in-a-pot-ded981e9/reward.svg)](https://make.fun/bounty/u-golden-heron-44-fortune-in-a-pot-ded981e9)

One kind, funny fortune for a houseplant on the windowsill, as if the plant
itself were having its future told — written by `main.ts` to
`/output/entry.txt` as a single line of at most 120 characters.

> Soon the morning sun will warm your leaves on this sill, and your keeper will swear you leaned in to listen.

[Fortune in a Pot on make.fun](https://make.fun/bounty/u-golden-heron-44-fortune-in-a-pot-ded981e9)

## Run

```sh
node main.ts
```

This writes the fortune to `/output/entry.txt` (no trailing newline),
self-checking first that it is 1–120 characters, a single line, valid UTF-8,
with no surrounding white space, then reading the bytes back to verify them.
