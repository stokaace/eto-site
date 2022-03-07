import './App.css';


import  Hero  from './components/hero'
import  Footer  from './components/footer'
import  Benefits  from './components/benefits1'
import  Screen  from './components/screen'
import  GetAccess  from './components/get_access'
import  FeatureInsights  from './components/feature_insights'
import  Integrations  from './components/integrations'




function App() {
  return (
    <>
    <Hero/>
    <a id="features"/>
    <Integrations/>
    <Benefits/>
    <Screen/>   
      
    <FeatureInsights/>
    <GetAccess/>     
    <Footer/>
   

    </>
  );
}

export default App;
