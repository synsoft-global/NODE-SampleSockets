Showing the use of Socket.io
================

Instructions
-------------------------------------------------------------

Github repository give the foll files:
TestGame.js 
TestGame.htm 

1) Download and Install Node.js as per your OS...

http://nodejs.org/download/

2) Now on Node.js command prompt installation Socket.io using below command :- 
npm install socket.io

Wait till complete successfully installation of socket.io
You can take help from this URL :- https://npmjs.org/package/socket.io

After complete installation, do check the presence of node_modules folder in your installed location 
like C:\Users\dev4\node_modules
(where 'dev4' is your machine name)

3) Now copy the TestGame.js and TestGame.htm file where your node modules are installed (i.e. inside the node_modules folder)

4) Now open TestGame.js and change the path...
You will see the foll code...
socketio = require('/Users/dev4/node_modules/socket.io/index.js');
Change the file path to where node_modules is located on your server....
E.g. if your node modules folder is on C:\Users\Mac4\ folder then your socket.io file path is 
socketio = require('/Users/Mac4/node_modules/socket.io/index.js');

5) Now open TestGame.htm file 
and change the iosocket connection path 
Currentlly you will see the following line in 2 places int his file...
http://192.168.0.32:1616/ on this html file 
Change this in both places to your server path as domain/IP 

6) After completing all the above steps, you need to run the node.js server 
For this open command prompt and go to desired location where your node_modules  is installed and then run the follwing command :
node TestGame.js 

So if node_modules folder is at C:\Users\dev4\ then your command will be run from...
C:\Users\dev4\node_modules>node TestGame.js 

if you get the message "info  - socket.io started"
then your node.js server is run successfully with socket.io

7) Now you are ready to Test the code....you can open the TestGame.html file in multiple browser windows to simulate multiple clients and check the communication between them as per instructions therein.

Thankyou!