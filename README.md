In the project directory, you can run:

npm start
Runs the app.
Open http://localhost:3002 to view it in your browser.

===============
FRONTEND

In this app I created three pages, which are active, consist of user login, user registration and user list. Frontend is connected with backend side. After registration app is sending data to backend and backend validates that a user has not been registered with that e-mail already.

App displays the user list with the additional functions: pagination and deleting a user.

Also asks confirmation before deleting the user. After user's confirmation frontend removes the user from the list.

In this app I used random data.

I used React, Redux and Axios in buiding the frontend part of app.

BACKEND

Validates that e-mail is corect and the password totals at least 8 characters.

Validates that a user has not been registered with that e-mail already.

Validates that there is a user with this e-mail and the password is correct.

At the beginning we have to create table in our MySQL Workbench. Commands for this are:

npm run db-migrate and after that npm run db-seed. We will get random data from http://randomuser.mu

With the help of Nodemailer app can send emails to new users with validation link, to those, who want to delete their account and e-mails with the new password, which is generated automatically and must be changed ASAP. I can't use Postmark app, because it is impossible to use it with public domain, such as Gmail, Outlook etc, but I don't have private domain, so that's why I used Nodemailer.

Also, when a user successfully autenticates with the BACKEND, they receive a JSON Web Token and can use it in Frontend. However, I didn't do this task till the end because of lack of time (to attach this token to every request in the Frontend part of app).

Potentially app can be Dockerized and we can also include Redis cache store.

I used Koa.js, Knex.js and MySQL in buiding app's backend part.# test_assignment_Backend
