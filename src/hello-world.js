/* eslint-disable no-console */
import _ from 'lodash';
import Heading from './components/heading/heading';
import HelloWorldButton from './components/hello-world-button/hello-world-button';

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();
Heading.render(_.upperFirst('hello world'));

console.log(process.env.NODE_ENV);
