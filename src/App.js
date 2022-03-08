import './App.css';


import  Hero  from './components/hero'
import  Footer  from './components/footer'
import  Benefits  from './components/benefits1'
import  Screen  from './components/screen'
import  GetAccess  from './components/get_access'
import  FeatureInsights  from './components/feature_insights'
import  Integrations  from './components/integrations'
import  FeatureDataConsistency  from './components/feature_data_consistency'


function App() {
  return (
    <>
    <Hero/>
    <Integrations/>
    <a id="features"/>
    <Benefits/>
    <Screen/>   
    <FeatureInsights/>
    <FeatureDataConsistency/>
    <GetAccess/>     
    <Footer/>
   

    </>
  );
}

export default App;
