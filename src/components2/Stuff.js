import React from 'react';

import Header from './Header';
import Paragraph from './Paragraph'
import Clicked from './Clicked';
import Square from './Square';
import ToggleText from './ToggleText';
import People from './People';
import Items from './Items';
import StepCounter from './StepCounter';
import CatchMeIfYouCan from './CatchMeIfYouCan';
import RollCall from './RollCall';


const Stuff = () => (
    <React.Fragment>
        <Header>React from Scratch</Header>

        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam tu hanc copiosiorem etiam soles dicere. Ubi ut eam caperet aut quando? Videmus igitur ut conquiescere ne infantes quidem possint. Magna laus. Bonum patria: miserum exilium. Sed tu istuc dixti bene Latine, parum plane. Duo Reges: constructio interrete. Ergo hoc quidem apparet, nos ad agendum esse natos.</Paragraph>

        <Clicked />

        <Square colour="hotpink" />

        <ToggleText initial="Hello" alternate="World" />

        <StepCounter max={100} step={5} />

        <CatchMeIfYouCan jump={100} />

        <People names={["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"]} />

        <Items items={
            [
                { name: "Coffee", price: 2.10 },
                { name: "Bananas", price: 3.50 },
                { name: "Milk", price: 250.65 },
                { name: "The Great Milk Shortage by Simon Schama", price: 12.99 },
            ]
        } />

        <RollCall names={["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"]} />

    </React.Fragment>
);

export default Stuff;