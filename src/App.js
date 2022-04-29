import { About } from './components/About';
import { Features } from './components/Features';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar'
import { Roadmap } from './components/Roadmap';
import { Team } from './components/Team';
import { Footer } from './components/Footer';

import { ROADMAP_DATA } from './data/roadmap';
import { TEAM_DATA } from './data/team';
import { MENU_DATA } from './data/menu';

export default function App() {
  return (
    <div className="App">
        <Navbar data={MENU_DATA}></Navbar>
        <Hero bg={"/images/hero_bg.jpg"} nft={"https://openseauserdata.com/files/9d8df946797af691189b25e2251f6abc.svg"}></Hero>
        <About image={"/images/about.svg"}></About>
        <Roadmap data={ROADMAP_DATA} bg={"/images/hero_bg.jpg"} />
        <Features image={"/images/features.svg"}></Features>
        <Team data={TEAM_DATA} bg={"/images/hero_bg.jpg"}></Team>
        <Footer data={{
          menu: MENU_DATA,
          socialMedias: {
            discord: "https://discord.com/",
            twitter: "https://twitter.com/",
            instagram: "https://instagram.com/",
            telegram: "https://telegram.com/"
          }
        }}></Footer>
    </div>
  );
}