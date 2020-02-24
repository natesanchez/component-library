import React from 'react';
import { storiesOf } from '@storybook/react';
import Forms from './Forms';


storiesOf('Forms', module)
    .add('Text Input Regular', () => <Forms 
    type="text"
    label="Email"
    placeholder= ""
    text
    />)
    .add('Text Input Medium', () => <Forms 
    type="text"
    label="Email"
    placeholder= ""
    medium
    text
    />)
    .add('Text Input Large', () => <Forms
    type="text"
    label="Email"
    placeholder= ""
    large
    text
    />)