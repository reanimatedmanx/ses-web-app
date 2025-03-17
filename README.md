# Test Coding Assignment

![promo](https://github.com/user-attachments/assets/56defa35-733b-482e-8010-eef327251bc2)

Develop a simple web app allowing users to send emails. The app should have the following features:  

## Overview

- ⚡ Snappy fetching mechanism via SSR & SWR
- ✅ Good separation of concerns via `foundations -> components -> views -> pages`
- 🌼 Added seeds using `fakerjs` and `knex` for better presentation and ample sample data
- 🪲 A few bugfixes of the initial boilerplate, and code assignment mardkown documentation

## 1. Sidebar

1. [x] The main page should have a sidebar with a list of emails (Apple Mail style)
2. [x] When selecting an email from the sidebar, the selected email should be displayed on the right side of the screen

## 2. Search bar

1. [x] The sidebar should contain a search bar at the top
2. [x] When typing text in the search bar, the list of emails in the sidebar should be filtered based on the search text
   * [x] We should do the filtering on the backend
   * [x] We should debounce the requests to the backend (i.e. wait for `500ms` after the user stops typing before sending the request)
   * [x] The search should return results where either the `to`, `cc`, `bcc`, `subject`, or `body` fields contain the search text

## 3. Sending emails

- [ ] The main page should have a button to compose a new email (placed at the bottom right corner of the screen). The following fields should be present in the compose email form:

`60% - DONE`

* `To`
* `CC`
* `BCC`
* `Subject`
* `Body`

## Notes

1. No need to actually send the email - it's enough to save it in the database
2. Do not spend more than 1h on this assignment, just do as much as you can in that time
3. Please remove the `.next` folder before sending the task
4. Please remove the `dev.sqlite3` folder before sending the task
5. Please remove the `node_modules` folders before sending the task
6. Please remove any other ignored files before sending the task

## Structure

This is a monorepo. It has two folders:  

1. `frontend`: This is the frontend of the application. It is built using Next.js.  
2. `backend`: This is the backend of the application. It is built using Fastify.

## Setup

### Backend

1. `cd backend` - Go to the backend folder
2. `yarn install` - Install the dependencies
3. `yarn db:migrate` - Run the db migrations
4. `yarn db:seed` - Run the db seeds
5. `yarn dev` - Start the development server (<http://localhost:3001>)

### Frontend

1. `cd frontend` - Go to the frontend folder
2. `yarn install` - Install the dependencies
3. `yarn dev` - Start the development server (<http://localhost:3000>)
4. `cp .env.sample .env` - Create a `.env` file to read env specific variables

## Design

1. [MUI](https://mui.com/) is installed and used for the design of the frontend.
