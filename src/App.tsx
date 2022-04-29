/* eslint-disable */ 

import React from 'react';
import {  FluentProvider, webLightTheme } from "@fluentui/react-components";
import {Button as WCButton} from "./WCButton/components/Button";
import {Button} from "./Button/components/Button";
import chalk from 'chalk';
import { ArrowCircleRight12Filled } from "@fluentui/react-icons";

import { fluentButton, provideFluentDesignSystem } from '@fluentui/web-components';

provideFluentDesignSystem().register(fluentButton());

import "./App.css";

const range = Array.from({length: 1000}, (_, index) => index + 1);

const TestWC = (props) => {
  return (<fluent-button appearance={props.appearance} onClick={props.handleClick}> <ArrowCircleRight12Filled /> {props.value} </fluent-button>)
}


function App() {
  const [value, setValue] = React.useState(0);
  const [alt, setAlt] = React.useState(false);
  const handleClick = () => {
    setValue(value+1);
    setAlt(!alt)
  }
  return (
    <FluentProvider theme={webLightTheme}>
      <React.Profiler id="pure WC" onRender={(a, b, c, d) => console.log(chalk.bgCyanBright(a, c, d))}>
      <div style={{ maxWidth: 1000, display: 'flex', flexWrap: 'wrap' }} >
         {range.map(key => {
           return <fluent-button appearance={alt ? 'accent' : 'lightweight' } onClick={handleClick} key={key}><ArrowCircleRight12Filled /> {value + key} </fluent-button>
         })}
      </div>
      </React.Profiler>
      <React.Profiler id="wc in react wrapper" onRender={(a, b, c, d) => console.log(chalk.bgBlackBright(a, c, d))}>
      <div style={{ maxWidth: 1000, display: 'flex', flexWrap: 'wrap' }} >
         {range.map(key => {
           return <TestWC appearance={alt ? 'accent' : 'lightweight' } onClick={handleClick} key={key} value={value + key}></TestWC>
         })}
      </div>
      </React.Profiler>

      <React.Profiler id="wc button in Fluent button" onRender={(a, b, c, d) => console.log(chalk.bgGreenBright(a, c, d))}>
      <div style={{ maxWidth: 1000, display: 'flex', flexWrap: 'wrap' }} >
         {range.map(key => {
           return <WCButton appearance={alt ? "primary" : undefined} onClick={handleClick} key={key}> {key + value} </WCButton>
         })}
      </div>
      </React.Profiler>

      <React.Profiler id="Fluent button" onRender={(a, b, c, d) => console.log(chalk.bgYellow(a, c, d))}>
      <div style={{ maxWidth: 1000, display: 'flex', flexWrap: 'wrap' }} >
         {range.map(key => {
           return <Button appearance={alt ? "primary" : undefined} onClick={handleClick} key={key}> {key + value} </Button>
         })}
      </div>
      </React.Profiler>

      <React.Profiler id="Div" onRender={(a, b, c, d) => console.log(a, c, d)}><div>hi</div></React.Profiler>
    </FluentProvider>
  );
}

export default App;
