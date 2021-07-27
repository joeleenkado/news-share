![REPO SIZE](https://img.shields.io/github/repo-size/JoeleenKado/react-dev-challenge.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/JoeleenKado/react-dev-challenge.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/JoeleenKado/react-dev-challenge.svg?style=social)

# News Share

## Welcome to Your Political News Center

_Duration: 200hrs_

We want to hold politicians accountable. The best way to ascertain whether one is holding up to their promises, is to make their activity in political spaces public. Lets make the activities of politicians that are at times witnessed by few, shown to everyone.  

![intro](public/images/screenShots/)
![intro](public/images/screenShots/)

### Prerequisites

- [Material-UI](https://material-ui.com/)
- [Node.js](https://nodejs.org/en/)
- [React.js](https://reactjs.org/)
- [React-Redux](https://react-redux.js.org/)
- [Redux-Saga](https://redux-saga.js.org/)
- [PostgreSQL](https://www.postgresql.org/)

### SETUP

Create your database and tables using the provided `data.sql` file. Start the server.

```
npm install
npm run server
```
Now that the server is running, open a new terminal tab with `cmd + t` and start the react client app.

```
npm run client
```

## Read the News

1. After reading your greeting on the 'Program' page, click 'NewsStand' on the navbar to hit the streets and your newsstand. You will be countenanced an You can search for news by name of political person. or simply scroll throw the articles. 

## You are a Reporter. Do your Reasarch.
Go to the library to read about our Senators. Senators have a profile card which yields information about them as well as links to their social media and websites.

## Share the News

1. Head to the Typewriter. Complete your report by inserting information into the text fields. 
2. Your created story is represented by a newspaper which displays a miniturized image of your report. Click the green button on the card to view your report. 
3. Click the edit button on the art card to open edit mode. Make updates to your selected story using the edit form at the bottom of the page.
4. To delete an story, Click the delete button on the story code in question.

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. Thank you https://github.com/freder48 for inspiring me with your phenomenal coding
## Support
If you have suggestions or issues, please email me at [joeleen.kado@gmail.com](www.google.com)

## How I feel about the experience of react-dev-challenge
when I read the email that I was invited as a developer to the react-dev-challenge I was so excited I couldnt sit still for the entire day. It was not until the next day that I calmed down enough to sit still and code. After looking at the figma i thought about the two things. The ultimate goal of this project, and what I could realistically complete in 7 days. i thought about how i could perhaps provide a small feature that could me implemented into a larger infrstructure. From there, Newshare was born with the intent that it could be one day implemented into the larger scheme of allyships goal of spreading awareness of politicians in the black community. With this resolve I felt fueled to do my best. I have been trained to focus on the concept of MVP (minimum viable product) with that in mind I was able to give my all into my personal goal, allbeit a small part of a larger goal. With this philosophy I had a bearing to go with and I felt good about what I was doing, and even now I feel great for trying my best at what I could do rather than what was beyond reason. I enjoyed this challenge because I was in my element for the reasons I have mentioned and it gave me a taste of what it would be like to work as a developer on PT chat. If its anything like this. I know that I am ready.

## Challenges I faced
I have having a hard time with conditional rendering. I was using an item from redux to however my function was trying to use the item from redux store before redux store could be set. my solution waS TO USE a terniry so that the item only appears if it is in redux state. I was trying to move a story from redux state and have it displayed in my table. The terniry makes it so that the table only shows if redux state is present. so i never get an error saying htat it cannot render somehting that doesnt exist. because it doesnt render unless redux state has the story in it. so in effect my table waits for my component did mount to dispatch my get request for get stories. and even waits for the stories to be loaded into redux state.

Another hurdle I overcame was manipulating the ProPublica API. I wanted to access the api through a get request,nso that I could put the datas object in redux state and the append the data to the dom my .mapping cards. like I did for the self published stroies. However I had to learn how to do get requests from the terminal then take the echo the response into a .json file which I could then map through as I wanted.


