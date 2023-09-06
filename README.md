Here is a node boiler plate I created to run my Angular applications on.
This has the static build of the default Anuglar applciatoin.

To run the server you must first have installed node.
In the terminal type: npm install

Then you can run the server with one command.
In the terminal type: node ./server

You should now be running on localhost://3000

Type localhost://3000 in to your browser to see the application.

It will show you the Angular default page.

To change this take one of my Angular applications and run a build on it.

To run a build command in Angular follow these instructions.
In the Angular terminal type: ng build

Then located the dist folder and copy all the created files.

Simply past those into frontend on this Node server and you will have the beginnings of a NodeAngularPostgreSQL stack.

You will have to fill out your own information for you own Postgres database under the db.js file in the root of this folder.

Then save and run the server again with: node ./server

Enjoy!