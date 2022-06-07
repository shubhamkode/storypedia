import React from 'react';
import Header from "./components/Header";

interface IAppProps{}

const App:React.FC<IAppProps> = ():JSX.Element =>{

  const styles = {
    bodyStyle : "w-screen h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black h-[200vh] relative",
  }

  return (
    <div className={`${styles.bodyStyle}`}>
      <Header />
    </div>
  )
}
export default App;