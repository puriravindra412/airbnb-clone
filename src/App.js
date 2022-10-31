import './App.css';
import Menu from './components/menu/menu';
import Content from './components/content/content';
import MobileNav from './components/header/mobileNav';
import Nav from './components/header/nav';
import Crousel from './components/cardslicker/crousel';
import MobileCrousel from './components/cardslicker/mobileCrousel';




const staticData=[
{static:"Dates"},
{static:"Group size"},
{static:"More Filter"},
]

const scrollableData=[
  {normal:"Great for group"},
  {normal:"famil-friendly"},
  {normal:"Animal"},
  {normal:"Animal"},
  {normal:"Animal"},
  {normal:"Animal"},
  {normal:"Animal"},
  {normal:"Animal"},
  {normal:"Animal"},
  {normal:"Animal"},
  {normal:"Animal"},
  {normal:"Animal"},
  {normal:"Animal"},
 
  {normal:"Animal"},
  {normal:"Animal"},
]
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <MobileNav ></MobileNav>
      <Content></Content>
      <Menu 
      staticName={staticData}
      normalName={scrollableData}
      ></Menu>
      <Crousel></Crousel>
      <MobileCrousel></MobileCrousel>
    </div>
  );
}

export default App;
