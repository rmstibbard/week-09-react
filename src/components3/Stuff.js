import React from 'react';
import Length from './Length';
import PasswordStrength from './PasswordStrength';
import TempConverter from './TempConverter';
import List from './List';

const Stuff = () => (
    <React.Fragment>
        <Length />
        <PasswordStrength />
        <TempConverter />
        <List />
    </React.Fragment>
);

export default Stuff;