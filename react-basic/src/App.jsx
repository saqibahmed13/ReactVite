import ProductList from './ProductList.jsx'
import Activity from './Activity.jsx'
import ProductCard from './ActivityProducts.jsx'

import './App.css'

function App() {

  let styles = {
    display:"flex",
    flexWrap:"wrap"
  }
   return (
    <div style={styles}>
      <ProductCard title = "logitech" idx={0}/>
      <ProductCard title="Apple" idx={1} />
      <ProductCard title= "Dell" idx={2}/>
      <ProductCard title= "Hp" idx={3}/>
    </div>
   );




  // return (
  //   <div>
  //     <Activity userName = "Saqib" textColor = {{color:"red"}} />
  //   </div>
  // );

  // return (
  //   <>
  //     <div>
  //       <ProductList/>
  //     </div>
      
  //   </>
  // )
}

export default App
