import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Paragraph from './components/Paragraph';
import Square from './components/Square';
import People from './components/People';


function App() {

  return (
    <>
      <Header text="This amazing text" />
      <Paragraph message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam tu hanc copiosiorem etiam soles dicere. Ubi ut eam caperet aut quando? Videmus igitur ut conquiescere ne infantes quidem possint. Magna laus. Bonum patria: miserum exilium. Sed tu istuc dixti bene Latine, parum plane. Duo Reges: constructio interrete. Ergo hoc quidem apparet, nos ad agendum esse natos." />
      <Square colour="yellow" />
      <People names={['James P. Sullivan', 'Mike Wazowski', 'Boo', 'Randall Boggs', 'Roz', 'Fungus']} />

    </>
  );
}

export default App;
