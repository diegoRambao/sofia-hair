import './App.css'
import { Header } from './components/Header'
import { ListBrand } from './components/ListBrand'
import { Catalog } from './components/Catalog'

function App() {
   return (
      <div className="container">
         <Header />
         <ListBrand />
         <Catalog />
      </div>
   )
}

export default App
