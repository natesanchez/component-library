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
    .add('Select Input Large', () => <Forms
    type="select"
    label="Select"
    large
    select
    />)
    .add('Select Input Medium', () => <Forms
    type="select"
    label="Select"
    medium
    select
    />)
    .add('Select Input Regular', () => <Forms
    type="select"
    label="Select"
    select
    />)
    .add('Select Input Large FILL', () => <Forms
    type="select"
    label="Select"
    large
    select
    fill
    />)
    .add('Select Input Medium FILL', () => <Forms
    type="select"
    label="Select"
    medium
    select
    fill
    />)
    .add('Select Input Regular FILL', () => <Forms
    type="select"
    label="Select"
    select
    fill
    />)
    .add('Number Counter', () => <Forms
    type="number"
    number
    />)
    .add('Voucher', () => <Forms
    type="textbutton"
    label="Voucher Code"
    placeholder=""
    textbutton
    />)
    .add('Voucher Big', () => <Forms
    type="textbutton"
    label="Voucher Code"
    placeholder=""
    textbuttonBig
    />)
    .add('Checkbox Black', () => <Forms
    type="checkbox"
    label=""    
    checkbox1
    />)
    .add('Checkbox Blue', () => <Forms
    type="checkbox"
    label="Don't Show this popup again"
    checkbox2
    />)                                                              