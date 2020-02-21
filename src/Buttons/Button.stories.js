import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';


storiesOf('Button', module)
    .add('Primary', () => <Button 
    label="Do Something"
    type="primary" 
    />)
    .add('Danger', () => <Button
    label="Do Something"
    type="danger"
    />)
    .add("Success", () => <Button
    label="Do Something"
    type= "success"
    />)   
    .add('Warning', () => <Button 
    label="Do Something" 
    type="warning"
    />) 