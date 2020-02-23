import React from 'react';
import { storiesOf } from '@storybook/react';

import TextInput from './TextInput';


storiesOf('Form: Text Input', module)
    .add('Text Input Regular', () => <TextInput />)
    .add('Text Input Medium', () => <TextInput medium/>)
    .add('Text Input Large', () => <TextInput large/>)