# server
#### lets do it!

- Node.js, Express, Knex, PostgreSQL, and Objection.js
- [ERD-link](https://github.com/Off-Cuff/server/blob/master/ERD/OffCuff-ERD.png)
# The Goal
---

This server side for OffCuff* will hold the routes, seeds, migrations and database for the OffCuff front end to talk to.

> offCuff is a public speaking training tool. It's an online application that generates a slide deck of random pictures from an API. A nominated speaker must then improvise a speech. This Backend will help manage the premium users and their features.

---
## Premium users
---
This backend is intended to serve premium users. It will allow Premium users to create multiple classes, each with a roster of participants. Premium users will also have the ability to create multiple sessions within each class for students to participate in the training.

---
## Classes
---
Classes are created by the premium user. The user will be able to create multiple classes. Each class will have it's own roster of participants. Once they have a list of participants, they can create session with as few or as many of the participants on their roster as they'd like. Each class will have their own retro as well which can be added to after any session of the class.

---
## Sessions
---
Sessions will be where participants get added to a queue to preform their improv speech. This session can be completed in any duration of time, until all participants in the queue perform, or the session is closed.

---
## Participants
---
Participants will be associated with a class that is created by a premium user/host. Participants will have the chance to improvise a speech in a session created by the host within the class. Each participant will have a retro available to them for feedback. The retro will entail feedback for the entire class, not just the participant or session.

---
## Retro
---
A retro will be a form of feed back. It contains three sections, Start, Continue, and Stop. Start is what participants should start doing to help their speaking skills. Continue will be things the participants did well and should sharpen or hone in on and continue to develop. The stop is instances where the participants should stop certain actions or habits. The retro will then be available to the class from the host.

## ERD - in the ERD folder
