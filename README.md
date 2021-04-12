# FOODBUSTERS App

This project is developed in the context of EFSA Hackathon: Design of an AI solution to detect fake news

## Prerequisites

This application is communicating with a seperate backend that is necessary to function properly. The backend project is described in another repository. Running the backend server and inserting the url of the server as an environmental variable is nessessary to run the application. To insert the url of the server, you have to change the REACT_APP_SERVER_URL param in the .env file in the root directory of this project.

## How to run

Before running please make sure you have node, npm and yarn installed. 
Next, install the necessary dependencies by running the command bellow in the project directory

### `yarn install`

To run the app sipmly run the command bellow:

### `yarn start`

## Application Details

The project is a font-end web application that is taking a user input sentence, sending it to the two different API endpoints (/serach for the elasticsearch endpoint and /classify for the classifier) and displays the results of the user request, regarding the validity of the sentence based on the EFSA scientific knowledge.

## Technical Details

The application is written in Javascript making use of the React Framework and some basic UI libraries such as Emotion (for css styling), FontAwesome (for icons), Material UI (for the Google Material Design UI pattern), React-Gauge-Chart (using D3.js for the gauge chart in results) and ReactSpinners (for the loader component)

