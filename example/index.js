/* eslint-env browser */
// @flow

import React, { PureComponent } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from 'react-dom';
import styled, { injectGlobal } from 'styled-components';

import ColorsShow from '../src/ColorsShow';
import { Box } from '../src/Box';
import { green, blue, red } from './colors';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 80vw;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
`;

const Space = styled.hr`
  border: none;
  border-bottom: 5px solid #f0f0f0;
  width: 90vw;
  margin: 40px; 0;
`;

const Code = styled.pre`
  font-family: Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier;
  color: #777;
`;

const Img = styled.img`
  max-width: 1920px;
`;

const Circle = styled(Box)`
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

Circle.displayName = 'Circle';

export default class App extends PureComponent {
  render() {
    return (
      <Container>
        <Img
          src="https://raw.githubusercontent.com/RafalFilipek/colors-show/master/logo.png"
        />
        <Space />
        <ColorsShow colors={green} name="Green" />
        <Code>{'<ColorsShow colors={green} name="Green" />'}</Code>
        <Space />
        <ColorsShow colors={blue} lines width={400} height={30} name="Blue" />
        <Code>
          {
            '<ColorsShow colors={blue} lines width={400} height={30} name="Blue" />'
          }
        </Code>
        <Space />
        <ColorsShow colors={red} stacked name="Red" />
        <Code>{'<ColorsShow colors={red} stacked name="Red" />'}</Code>
        <Space />
        <ColorsShow colors={green} name="Green" component={Circle} />
        <Code>
          {'<ColorsShow colors={green} name="Green" component={Circle} />'}
        </Code>
        <Space />
        <ColorsShow colors={blue} stacked name="Blue" component={Circle} />
        <Code>
          {
            '<ColorsShow colors={blue} stacked name="Blue" component={Circle} />'
          }
        </Code>
        <Space />
        <p>
          <a href="https://github.com/RafalFilipek/colors-show/">colors-show</a>
          {' '}by{' '}
          <a href="https://twitter.com/rafalfilipek">rafalfilipek</a>
        </p>
      </Container>
    );
  }
}

injectGlobal`
  * {
    box-sizing: border-box;
  }
  html, body {
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    font-size: 14px;
    line-height: 24px;
    padding: 20px;
  }

  a {
    color: #067df7;
    text-decoration: none;
    border-bottom: 1px solid #067df7;
    font-size: 16px;
  }
`;

render(<App />, document.querySelector('#app'));
