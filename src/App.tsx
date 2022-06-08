import React from 'react';

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

interface IAppProps{}

const App:React.FC<IAppProps> = ():JSX.Element =>{

  const styles = {
    bodyStyle : " relative",
  }

  return (
    <div className={`${styles.bodyStyle}`}>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}
export default App;