# server
#### lets do it!

- Node.js, Express, Knex, PostgreSQL, and Objection.js
- [ERD-link](https://github.com/Off-Cuff/server/blob/master/ERD/OffCuff-ERD.png)
# The Goal


This server side for OffCuff* will hold the routes, seeds, migrations and database for the OffCuff front end to talk to.

> offCuff is a public speaking training tool. It's an online application that generates a slide deck of random pictures from an API. A nominated speaker must then improvise a speech. This Backend will help manage the premium users and their features.

## Table of links
[Premium Users](https://github.com/Off-Cuff/server#premium-users) || [Classes](https://github.com/Off-Cuff/server#classes) || [Sessions](https://github.com/Off-Cuff/server#sessions) ||  [Participants](https://github.com/Off-Cuff/server#participants) || [Retro](https://github.com/Off-Cuff/server#retro)

---
## Premium users

This backend is intended to serve premium users. It will allow Premium users to create multiple [Classes](https://github.com/Off-Cuff/server#classes), each with a roster of [participants](https://github.com/Off-Cuff/server#participants). Premium users will also have the ability to create multiple [sessions](https://github.com/Off-Cuff/server#sessions) within each [class](https://github.com/Off-Cuff/server#classes) for students to participate in the training.

---
## Classes

[Classes](https://github.com/Off-Cuff/server#classes) are created by the [premium users](https://github.com/Off-Cuff/server#premium-users). The user will be able to create multiple [classes](https://github.com/Off-Cuff/server#classes). Each [classes](https://github.com/Off-Cuff/server#classes) will have it's own roster of [participants](https://github.com/Off-Cuff/server#participants). Once they have a list of [participants](https://github.com/Off-Cuff/server#participants), they can create [sessions](https://github.com/Off-Cuff/server#sessions) with as few or as many of the [participants](https://github.com/Off-Cuff/server#participants) on their roster as they'd like. Each [class](https://github.com/Off-Cuff/server#classes) will have their own [retro](https://github.com/Off-Cuff/server#retro) as well which can be added to after any [session](https://github.com/Off-Cuff/server#sessions) of the [class](https://github.com/Off-Cuff/server#classes).

---
## Sessions

Sessions will be where [participants](https://github.com/Off-Cuff/server#participants) get added to a queue to preform their improv speech. This session can be completed in any duration of time, until all [participants](https://github.com/Off-Cuff/server#participants) in the queue perform, or the session is closed.

---
## Participants

Participants will be associated with a [class](https://github.com/Off-Cuff/server#classes) that is created by a [premium users](https://github.com/Off-Cuff/server#premium-users)/host. Participants will have the chance to improvise a speech in a [session](https://github.com/Off-Cuff/server#sessions) created by the host within the [class](https://github.com/Off-Cuff/server#classes). Each participant will have a [retro](https://github.com/Off-Cuff/server#retro) available to them for feedback. The [retro](https://github.com/Off-Cuff/server#retro) will entail feedback for the entire [class](https://github.com/Off-Cuff/server#classes), not just the participant or [session](https://github.com/Off-Cuff/server#sessions).

---
## Retro

A retro will be a form of feed back. It contains three sections, Start, Continue, and Stop. Start is what [participants](https://github.com/Off-Cuff/server#participants) should start doing to help their speaking skills. Continue will be things the [participants](https://github.com/Off-Cuff/server#participants) did well and should sharpen or hone in on and continue to develop. The stop is instances where the [participants](https://github.com/Off-Cuff/server#participants) should stop certain actions or habits. The retro will then be available to the [class](https://github.com/Off-Cuff/server#classes) from the host.

### thank you for stopping in!
#### oh, I love that shirt....
