# JG-Oxfam
A page listing Oxfam's most recent donations from the JG API

## Setup

- To install npm dependencies:
```
npm install
```
- To run the server:
```
npm run start
```
- To run tests:
```
npm test
```

## What?
Create a web app to display the latest donations for a charity (Oxfam) using React and Node.js.

## Why?
To demonstrate my understanding of using React, Node, TDD and API calls. As well as for the following user stories:

**As an**... Oxfam employee <br>
**I want to**... be able to review recent donations <br>
**In order to**... monitor our account activity.

**As a**... prospective fundraiser <br>
**I want to**... get an impression of a charity's fundraising <br>
**In order to**... help me decide whether I want to raise money for them.

**As an**... Oxfam fundraiser <br>
**I want to**... see whether any of my fundraising gains recognition from Oxfam <br>
**In order to**... feel appreciated and further motivated.

## How?

- Deliver an MVP in 1 day
- TDD
- Using node and hapi
- Tape testing
- CSS in keeping with the [JG site](https://www.justgiving.com/oxfam)
- Displaying data from the JG API
- Handlebars (or react - stretch goal)

## Time Constraints

In the event that I do not complete the page in my allocated time limit I will document my proposed next steps for completing the project.

## Outcome:

I stuck to the time suggested (1 day), prioritised getting the data from JG API, but didn’t have time to get the whole task finished. The data fetching in server.js (and getDonations.js where there’s some duplication to show my experimenting at the time of finish) works. My next steps were going to be re-formatting this data into an appropriate form to use in my handlebars templates page, followed by the styling last.

## Learnings:

I will take the opportunity to explore what might have gone wrong in my handling of the API data so that I can learn from this. Following this, my next priority is to learn react as I feel it's a invaluable framework to know and its focus on functional programming could have leant itself well to this task.
