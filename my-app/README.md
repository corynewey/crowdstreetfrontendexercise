# CrowdStreet Front-end Assignment

Although I have developed in Javascript for many years, I have never done in anything in React outside of the little
Tic-Tac-Toe game tutorial that React offers on its site. Since that tutorial is a SAP, I had to dig in and learn about
React routing which was a good challenge since, while there is a good amount of information online about it, much of it 
is confusing and contradictory because of the different versions of routine that exist. It was a great learning experience 
and kind of fun working everything out.

I also had difficulty with the styling: no matter what I did, the styling that I added to the css file never took effect. 
When I inspected the element that I was trying to apply the style to in the browser developer tools, I could see the 
'className="blah-blah"' that I had put in the tag, but it of course didn't actually affect the styling of the element 
since the browser only understands the class attribute. To work around this, I implemented a dynamic styling, using the 
style attribute of course. That is how I change the styling of input fields to indicate an error.

I did take some short-cuts as you will note from my comments in the code. Specifically, I'm sure there are good React 
ways to communicate between sibling components on a page (no parent-child relationship between them), but after the 4 
hours I had worked on this, I wasn't really in the mood to figure it out. So, I just set a reference to the component as 
a variable on the window object and use that reference to access the component's value. It's not a good idea since it 
breaks encapsulation, and in the real world I wouldn't do it that way but this is just an exercise, right?

A word about testing: As part of the research and learning that I had to accomplish in order to complete this assignment,
I of course learned about testing React with the React Testing Library and Jest. However, I only completed one unit test
on the Investment Amount input field. I completed the one test in order to exercise what I had learned but since I've 
already spent so much time on this, I only completed the one test.

A note about authentication: since all of the pages in this application, except the final acount page, are meant to be 
open to the public, I haven't implemented any authentication security (which would be done on the back-end anyway).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
