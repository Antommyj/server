# Current problem with the build

This repo is dedicated for me to follow Stephen Grider Udemy course Node with React: Fullstack Web Development.
The problem came during lecture number 112

The thing that really confuses me is that everything is working fine when the code is running on a local development server.

However, when I uploaded to Heroku, the express server cannot detect any request that comes from the front end (The proxy is gone).

For example when I push the login button the url changes to "/auth/google", but there's nothing change.

In this repo, I also created my own test route called "/test" in the server routes directory called "myRoutes". I tried it to access it through the url and it also came out nothing.

