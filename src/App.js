import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer'
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import ProjectPage from './components/ProjectPage';

const projectInfo = {
  TM: {
    title: 'Trust Me',
    category: 'Branding Design',
    mainImg: 'Trust-Me_Main.jpg',
    description: 'Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla quis lorem ut libero malesuada feugiat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
    imgs: [
      'Trust-Me_Main-Logo.jpg',
      'Trust-Me_Logo-Variations.jpg',
      'Trust-Me_Colour-Font.jpg'
    ]
  },
  
  SM: {
    title: 'Sorgen Mørket',
    category: 'Album Art Design',
    mainImg: 'Sorgen-Morket_main.jpg',
    description: 'Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla quis lorem ut libero malesuada feugiat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
    imgs: [
      'Sorgen-Morket_Album-Art.jpg'
    ]
  },
  
  BP: {
    title: 'The Basket Project',
    category: 'Branding Design',
    mainImg: 'Basket-Project_main.jpg',
    description: 'Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla quis lorem ut libero malesuada feugiat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
    imgs: [
      'The-Basket-Project_Main-Logo.jpg',
      'The-Basket-Project_Stickers.jpg'
    ]
  },
  
  SS: {
    title: 'Savoury Subscriptions',
    category: 'Full-Stack Development',
    mainImg: 'Savoury-Subscriptions_main.jpg',
    description: 'Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla quis lorem ut libero malesuada feugiat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
    github: 'https://github.com/samurwin/Savoury-Subscriptions',
    deployed: 'https://savoury-subscriptions.herokuapp.com/'
  },
  
  DD: {
    title: 'Dev Diaries',
    category: 'Full-Stack Development',
    mainImg: 'Dev_Diaries_main.jpg',
    description: 'Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla quis lorem ut libero malesuada feugiat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
    github: 'https://github.com/samurwin/dev-diaries',
    deployed: 'https://polar-retreat-06699.herokuapp.com/'
  },
  
  WD: {
    title: 'Weather Dashboard',
    category: 'Front-End Development',
    mainImg: 'Weather-Dashboard_main.jpg',
    description: 'Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla quis lorem ut libero malesuada feugiat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
    github: 'https://github.com/samurwin/weather-dashboard',
    deployed: 'https://samurwin.github.io/weather-dashboard/'
  }
};


function App() {
  return (
    <Router>
      <div>
        <Header />
          <Switch>
            <Route exact path='/' component={Home} />

            <Route exact path='/portfolio' component={Portfolio} />

            <Route exact path='/about' component={About} />

            <Route exact path='/trustme'> 
              <ProjectPage key={projectInfo.TM.title} projectInfo={projectInfo.TM} /> 
            </Route>

            <Route exact path='/sorgenmorket'> 
              <ProjectPage key={projectInfo.SM.title} projectInfo={projectInfo.SM} /> 
            </Route>

            <Route exact path='/thebasketproject'> 
              <ProjectPage key={projectInfo.BP.title} projectInfo={projectInfo.BP} /> 
            </Route>

            <Route exact path='/savourysubscriptions'> 
              <ProjectPage key={projectInfo.SS.title} projectInfo={projectInfo.SS} /> 
            </Route>

            <Route exact path='/devdiaries'> 
              <ProjectPage key={projectInfo.DD.title} projectInfo={projectInfo.DD} /> 
            </Route>

            <Route exact path='/weatherdashboard'> 
              <ProjectPage key={projectInfo.WD.title} projectInfo={projectInfo.WD} /> 
            </Route>

          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
