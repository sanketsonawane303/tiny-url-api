# Tiny URL

This application provides an API and an UI for shortening long URLs into managable lengths.

It is deployed [here](http://tinyurl21.herokuapp.com/).

## Tech Stack

This API is developed using Express.js and Firestore as the database.

## API Endpoints

`GET /`

Fetches the UI for the application.

`POST /new`

Shortens the given URL

- Request body - url

- Respose body - code (for redirecting to original URL)

`GET /{code}`

Redirects to the original URL shortened to code

`GET /stats/{code}`

Returns the details and stats (how many times it has been accessed) of the specified code

- Respose body - code, url, count

## Database Schema

Collections -

- urls

  - code (ID)
  - url
  - count

- details - 'info' (ID)

  - lastCode - initialized to 'axbi' if absent before

## Firebase Config

Check [here](/firebase/config.md) for firebase service account config.
