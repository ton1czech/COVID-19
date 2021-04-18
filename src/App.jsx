import './css/App.css';
import "leaflet/dist/leaflet.css";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import Overview from './Overview';
import Chatbot from './Chatbot';
import Map from './Map';
import Graphs from './Graphs';

function App() {
  return (
    <div className="app">
      <div className="app_leftbar column left">
        <Overview />
      </div>
      <div className="app_main column middle">
        <Map />
        <div className="icon_arrow">
          <ArrowDownwardIcon style={{ fontSize: 50 }} />
        </div>

        <Graphs />
      </div>
      <div className="app_chatbot column right">
        <Chatbot />
      </div>
    </div>
  );
}

export default App;