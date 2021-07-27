![REPO SIZE](https://img.shields.io/github/repo-size/JoeleenKado/react-dev-challenge.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/JoeleenKado/react-dev-challenge.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/JoeleenKado/react-dev-challenge.svg?style=social)

# News Share

## Welcome to Your News Stand

_Duration: 200hrs_

We want to hold politicians accountable.  the best way to ensure accountability is to use publicity. Lets make the activities of politicians that are at times witnessed by few, shown to everyone. 

Be the reporter. Do you have a story you want to share. Simply use the app to compose your story with our text editor. than send it to a fellow reporter (anyone who also has an account on our app). And if a fellow reporter vouches for the authenticity of your report (clicks approve) your story will be added to the news stand.


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

## You are a Reporter. Do your Reasarch
on the homepage you will find various politicians with links to their political publications and social media

## Share the News


1. Click Submit a story. to be taken to the type writer where you can type your story. (Add your images to the public/images folder in the code repository) Click 'SUBMIT' to send your report to a fellow reporter 
2. Your created story is represented by a newspaper which displays a miniturized image of your report. Click the green button on the card to view your report. 
3. Click the edit button on the art card to open edit mode. Make updates to your selected story using the edit form at the bottom of the page.
4. To delete an story, Click the delete button on the story code in question.

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. Thank you https://github.com/freder48 for inspiring me with your phenomenal coding
## Support
If you have suggestions or issues, please email me at [joeleen.kado@gmail.com](www.google.com)

## How i feel about the experience
when i read the email that i ewas invited to do the demo project i was so excited i couldnt sit still for the entire day. it was not until the next day that i calmed down enough to sit still and code. after looking at the fifgma i thought about the capavbilities of this goal they were vast. i thought about how i could perhaps provide a small feature that could me implemented into a larger infrstructure.

## Challenges I face
I have having a hard time with conditional rendering. I was using an item from redux to however my function was trying to use the item from redux store before redux store could be set. my solution waS TO USE a terniry so that the item only appears if it is in redux state. I was trying to move a story from redux state and have it displayed in my table. The terniry makes it so that the table only shows if redux state is present. so i never get an error saying htat it cannot render somehting that doesnt exist. because it doesnt render unless redux state has the story in it. so in effect my table waits for my component did mount to dispatch my get request for get stories. and even waits for the stories to be loaded into redux state.

Another hurdle I overcame was manipulating the ProPublica API. I wanted to access the api through a get request,nso that I could put the datas object in redux state and the append the data to the dom my .mapping cards. like I did for the self published stroies. However I had to learn how to do get requests from the terminal then take the echo the response into a .json file which I could then map through as I wanted.