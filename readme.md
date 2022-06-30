# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

**[TODO 05/01/2018 @vanessa-cooper]:** _It's been a while since anyone ran a fresh copy of this repo. I think it's worth documenting the steps needed to install and run the repo on a new machine?_

## Setting Up the Project Locally
**Step 1:** Clone the repository to your local computer 
```
git clone repo-url
```
**Step 2:**  Install Docker

**Step 3:** Run Docker from the project directory to load Anythink's backend and frontend 
```
docker-compose up
```
**Step 4:** Test this by pointing your browser to http://localhost:3000/api/ping

**Step 5:** Now that the backend is working test the frontend to create a new user on http://localhost:3001/register



