![REPO SIZE](https://img.shields.io/github/repo-size/joeleenkado/react-dev-challenge.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/joeleenkado/react-dev-challenge.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/joeleenkado/react-dev-challenge.svg?style=social)

# News Share

## Welcome to Your Political News Center

_Duration: 100hrs_

We want to hold politicians accountable. The best way to ascertain whether one is holding up to their promises, is to make their activity in political spaces public. Lets make the activities of politicians that are at times witnessed by few, shown to everyone.  

![intro](public/images/screenShots/typewriter.png)
<!-- ![intro](public/images/screenShots/library.png) -->

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Nodemon](https://nodemon.io/)
- [React.js](https://reactjs.org/)
- [React-Redux](https://react-redux.js.org/)
- [Redux-Saga](https://redux-saga.js.org/)
- [PostgreSQL](https://www.postgresql.org/)

### Development Setup Instructions

Create your database and tables using the provided `data.sql` file. Start the server.

```
- Run `npm install`
- Create a `.env` file at the root of the project and paste this line into the file:
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  
  While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
  ```
  
- Start postgres if not running already by using `brew services start postgresql`
- Run `npm run server`
- Run `npm run client`
- Navigate to `localhost:3000`
```

## You are a Reporter. You may do your Research.

Go to the Library to read about our Senators. Senators have a profile card which yields information about them as well as links to their social media and websites.

## Share the News

1. Head to the Typewriter. Compose your report by inserting information into the text fields. 
2. Your created story is represented by a newspaper which is displayed in the News Room. Click the headline of the newspaper to read your story. 
3. Click the edit button on the newspaper to open edit mode. Make updates to your selected story using the edit form that appears.
4. To delete an story, Click the delete button on the newspaper in question.

## How I feel about the experience of react-dev-challenge
when I read the email that I was invited as a developer to the react-dev-challenge I was so excited I couldnt sit still for the entire day. It was not until the next day that I calmed down enough to sit still and code. After looking at the figma i thought about the two things. The ultimate goal of this project, and what I could realistically complete in 7 days. i thought about how i could perhaps provide a small feature that could me implemented into a larger infrstructure. From there, Newshare was born with the intent that it could be one day implemented into the larger scheme of allyships goal of spreading awareness of politicians in the black community. With this resolve I felt fueled to do my best. I have been trained to focus on the concept of MVP (minimum viable product) with that in mind I was able to give my all into my personal goal, allbeit a small part of a larger goal. With this philosophy I had a bearing to go with and I felt good about what I was doing, and even now I feel great for trying my best at what I could do rather than what was beyond reason. I enjoyed this challenge because I was in my element for the reasons I have mentioned and it gave me a taste of what it would be like to work as a developer on PT chat. If its anything like this. I know that I am ready.

## Challenges I faced
I had a challenging time with conditional rendering. I was using an trying to display a values from redux state as placeholder values in my editStory form. The form is actually appended to the dom as a modal. and I was getting an error when opening the form modal that my placeholder variables were undefined. Through research and collaboration with a colleague I was able to ascertain that I was trying to pull values from redux state before redux state could actually be set, so therefore my values were undefined, because they did not yet exist at the time that the modal was rendered. my solution was to use a ternary operator, so that the my table only renders if and when redux state has been set. 

Another hurdle I overcame was manipulating the ProPublica API. I wanted to access the api through a get request, so that I could put the datas object in redux state and append the data to the dom by .mapping it into cards. However, learning to pass my API key in with my get request promised to be an expenditure of time that I could perhaps ameliorate. I decided to learn how to do get requests from the terminal, and echo the response into a .json file which, I could then map through as I wanted. The consequence of my path is that my app does not actively call the api. Instead I make API calls through the terminal manually when I need to update the information on politicians featured in my app. Beyond the scope of this challenge I would like to access the api directly, from within the app.

## Acknowledgement

Thank you for taking the time to experience my work.
Thanks to [Prime Digital Academy](www.primeacademy.io) for training me as a Full Stack Software Engineer. 

## Support

If you have questions, comments, or issues, please email me at [joeleen.kado@gmail.com](www.google.com)


