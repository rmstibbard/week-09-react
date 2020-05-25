import React from 'react';

import Header from './Header';
import Paragraph from './Paragraph'
import Square from './Square';
import People from './People';

const Stuff = () => (
    <React.Fragment>
        <Header text="Maximally wondeful" />
        <Paragraph message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam tu hanc copiosiorem etiam soles dicere. Ubi ut eam caperet aut quando? Videmus igitur ut conquiescere ne infantes quidem possint. Magna laus. Bonum patria: miserum exilium. Sed tu istuc dixti bene Latine, parum plane. Duo Reges: constructio interrete. Ergo hoc quidem apparet, nos ad agendum esse natos." />
        <Square display="false" />
        <People names={["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"]} />
    </React.Fragment>
);

export default Stuff;