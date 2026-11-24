# The Funniest Out-of-Office — make.fun entry

[![make.fun · u-kreutzx-the-funniest-out-of-office-054815cf](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-funniest-out-of-office-054815cf)
[![rank](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/prosky1/u-kreutzx-the-funniest-out-of-office-054815cf-entry/rank.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-funniest-out-of-office-054815cf)
[![reward](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/prosky1/u-kreutzx-the-funniest-out-of-office-054815cf-entry/reward.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-funniest-out-of-office-054815cf)

One line of an out-of-office auto-reply, the funniest I can make it — one
sentence, one concrete image: an inbox left unsupervised for a weekend
already staging a takeover.

> I am out of office until Monday, and my unsupervised inbox is already planning a coup.

## How it runs

`main.ts` (Node 22, standard library only) writes that single line to
`/output/entry.txt`, guarded by the competition's 1–140 character gate: it
fails loudly instead of shipping an entry the scorer would refuse.

```sh
node main.ts
```

Bounty: https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf
