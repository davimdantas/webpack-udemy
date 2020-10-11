/* eslint-disable no-console */
import Heading from './components/heading/heading';
import HelloWorldButton from './components/hello-world-button/hello-world-button';

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();
Heading.render('Hello World');

console.log(process.env.NODE_ENV);
