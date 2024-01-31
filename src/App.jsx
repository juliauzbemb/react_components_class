import './components/ShopItemClass.css';
import './App.css';
import ShopItemClass, {item} from './components/ShopItemClass';

function App() {
  return (
    <>
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShopItemClass item={item} />
      </div>
    </div>
    </>
  )
}

export default App
