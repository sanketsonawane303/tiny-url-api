# Firebase Config

Go to `Project settings > Service accounts`.
Generate a new key. Take the contents of the JSON file and `stringify` it and then convert it to `Base64` encoded string.

Then set an environment variable `FIREBASE_CREDS_BASE64` to the Base64 encoded string.
