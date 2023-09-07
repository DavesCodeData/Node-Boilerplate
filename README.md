# My custom NodeJS server

Here is a node boiler plate I created to run my Angular applications. The API of this server is configured to work with my various Angular builds.

I configured this to have the static build of the default Anuglar application.

# Run the Backend

To run the server you must have node installed.
Before starting, make sure you have Node installed on your machine. 
Go to: https://nodejs.org/
Install node then follow next steps.

Step 1: In the terminal type: `npm install`

Then you can run the server with one command.

Step 2: In the terminal type: `node ./server`

You should now be running on localhost://3000

Step 3: Type localhost://3000 in to your browser to see the application.

It will show you the Angular default page because, that is the build file I have installed for your default view.

To change this take one of my Angular applications and run a build on it.
Here is a link to one such application: https://github.com/DavesCodeData/Davids-Website.git

To run a build command in Angular follow these instructions.
In the Angular terminal type: `ng build`

Then located the dist folder and copy all the created files.

Simply paste those into frontend on this Node server and you will have the beginnings of a NodeAngularPostgreSQL stack.

You will have to fill out your own information for you own Postgres database under the db.js file in the root of this folder.

Then save and run the server again with: `node ./server`

Enjoy!