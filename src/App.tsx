import React from 'react';

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import AddStoryForm from "./components/AddStoryForm";

interface IAppProps{}

const App:React.FC<IAppProps> = ():JSX.Element =>{

  const [showAddForm, setShowAddForm] = React.useState(false);

  const toggleAddForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setShowAddForm(prev => !prev)
  };

  const styles = {
    bodyStyle : " relative",
  }

  return (
    <div className={`${styles.bodyStyle}`}>
      <Header toggleAddForm={toggleAddForm}/>
      {showAddForm && (<AddStoryForm />)}
      <Body />
      <Footer />
    </div>
  )
}
export default App;