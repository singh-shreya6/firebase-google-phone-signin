# firebase-google-phone-signin
Authentication using Google and Phone Number/OTP using firebase for web

We can Signin via Google and Phone Number/OTP using firebase easily. In this repository I will show how to do that.

This repository contains 3 files:
1) index.html : The HTML web page that is to be hosted.
2) app.js : The javascript Code in order to provide signin and signout functionalities to our web page and provide authentication via Google and OTP to web page.
3) style.css : For basic styling of UI.

First we need to install firebase on our system. This is how to do it in Ubuntu/Linux:
Steps:
1) you can use sudo apt-get install nodejs but it installs and older version of nodejs  so it is better to go for the following commands:
Get latest version of nodejs:
a) sudo apt-get install curl python-software-properties
b) curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
c) sudo apt-get install -y nodejs
d) sudo apt-get update && sudo apt-get -y upgrade

After these commands, check for successful installations of node and npm by the following commands:
a) node -v
b) npm -v

2) Install firebase locally:
   sudo npm install -g firebase-tools

3) Login to Firebase, login page will open in browser:
   firebase login

4) Next open firebase in browser at their website, open firebase console and create your own project.

5) After creation go to authentication tab and enable the signin options you want to use, in my case Google and Phone Auhentication.

6) git clone this repository and put it in the public folder on your system.

7) Select: Add firebase to your project web and copy-paste the credentials you get in the index.html at the starting of your code.

8) Next go to the public folder in your system, and copy and paste the 3 files in the repo in the public folder. Open terminal.

9) Initialise Firebase and select the option you want to go for:
   firebase init
   
10) Select hosting and press spacebar, press enter at the questions you get, and in the question where it asks to overwrite index.html, answer No.

11) Next deploy it on the URL:
   firebase deploy


  
