import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';


storiesOf('Button', module)
    .add('Primary', () => <Button 
    label="Do Something"
    type="primary" 
    whiteText
    />)
    .add('Primary-White', () => <Button 
    label="Do Something"
    type="primary" 
    white
    />)
    .add('Primary-Gradient', () => <Button 
    label="Do Something"
    type="primary" 
    gradient
    />)        
    .add('Primary-Large', () => <Button 
    label="Do Something"
    type="primary" 
    whiteText
    large
    />)
    .add('Primary-Large-Gradient', () => <Button 
    label="Do Something"
    type="primary" 
    gradient
    large
    />)
    .add('Primary-Large-White', () => <Button 
    label="Do Something"
    type="primary" 
    white
    large
    />)                  
    .add('Danger', () => <Button
    label="Do Something"
    type="danger"
    whiteText
    />)
    .add('Danger-White', () => <Button 
    label="Do Something"
    type="danger" 
    white
    />)
    .add('Danger-Gradient', () => <Button 
    label="Do Something"
    type="danger" 
    gradient
    />)            
    .add('Danger-Large', () => <Button 
    label="Do Something"
    type="danger" 
    whiteText
    large
    />)
    .add('Danger-Large-Gradient', () => <Button 
    label="Do Something"
    type="danger" 
    gradient
    large
    />)
    .add('Danger-Large-White', () => <Button 
    label="Do Something"
    type="danger" 
    white
    large
    />)            
    .add("Success", () => <Button
    label="Do Something"
    type= "success"
    whiteText
    />)
    .add('Success-White', () => <Button 
    label="Do Something"
    type="success" 
    white
    />)
    .add('Success-Gradient', () => <Button 
    label="Do Something"
    type="success" 
    gradient
    />)            
    .add('Success-Large', () => <Button 
    label="Do Something"
    type="success" 
    whiteText
    large
    />)
    .add('Success-Large-Gradient', () => <Button 
    label="Do Something"
    type="success" 
    gradient
    large
    />)
    .add('Success-Large-White', () => <Button 
    label="Do Something"
    type="success" 
    white
    large
    />)                
    .add('Warning', () => <Button 
    label="Do Something" 
    type="warning"
    whiteText        
    />)
    .add('Warning-White', () => <Button 
    label="Do Something"
    type="warning" 
    white
    />)
    .add('Warning-Gradient', () => <Button 
    label="Do Something"
    type="warning" 
    gradient
    />)            
    .add('Warning-Large', () => <Button 
    label="Do Something"
    type="warning" 
    whiteText
    large
    />)
    .add('Warning-Large-Gradient', () => <Button 
    label="Do Something"
    type="warning" 
    gradient
    large
    />)
    .add('Warning-Large-White', () => <Button 
    label="Do Something"
    type="warning" 
    white
    large
    />)               
    .add('Default', () => <Button 
    label="Do Something"
    whiteText
    />)
    .add('Default-White', () => <Button 
    label="Do Something"
    white
    />)
    .add('Default-Gradient', () => <Button 
    label="Do Something"
    defaultGradient
    />)            
    .add('Default-Large', () => <Button 
    label="Do Something"
    whiteText
    large
    />)
     .add('Default-Large-Gradient', () => <Button 
     label="Do Something"
     defaultGradient
     large
     />)
    .add('Default-Large-White', () => <Button 
    label="Do Something"
    white
    large
    />)
    .add('Add to Cart', () => <Button 
    label="Add to Cart"
    type="primary" 
    gradient
    addToCart
    />)
    .add('Add to Favories', () => <Button 
    label="Add to Favorites"
    type="primary" 
    gradient
    addToFavs
    />)
    .add('Cart Button', () => <Button 
    label=""
    type="primary" 
    gradient
    addToCart
    tiny
    />)
    .add('Heart Button', () => <Button 
    label=""
    type="primary" 
    gradient
    addToFavs
    tiny
    />)                  