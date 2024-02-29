import './Landingpage.css';

import Logo from './Logo.png';
import Warehouse from './Warehouse.png';
import WriteUp from './Components/WriteUp';
import Buttons from './Components/Buttons';

function Landingpage(){
return(
    <div className="ContainerLP">
      <div className="UpperMembersLP">
     <div className="WriteUp">
      <WriteUp/>
     </div>
     <div className="Image">
     <img src={Warehouse} className="Lp-image" alt="logo" />
     </div>
     </div>
     <div className="logo">
     <img src={Logo} className="Lp-logo" alt="logo" />
     </div>
     <div className="textLP">WareTrack</div>
     <div className="buttons">
      <Buttons/>
      </div>
      </div>
);
}
export default Landingpage;