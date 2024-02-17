
import Shortcut from './main_shortcuts/Shortcut';
import Collection from './collections/Collection';
import BannerSlider from './banner_carousel/BannerCarousel';
import Navbar from './header/Navbar';
const App = () => {
  
  return (
    <div>
    <Navbar/>
    <BannerSlider/>
     <Shortcut/>
     <Collection/>
    </div>
  );
};

export default App;
