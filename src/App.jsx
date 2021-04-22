import "./css/App.css";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Chatbot from "react-chatbot-kit";

import Overview from "./Overview";
import Map from "./Map";
import Graphs from "./Graphs";

function App() {
  return (
    <div className='app'>
      <div className='app_leftbar'>
        <Overview />
      </div>

      <div className='app_main'>
        <Map />

        <div className='icon_arrow'>
          <ArrowDownwardIcon className='icon_arrow_itself' />
        </div>

        <Graphs />
      </div>

      <div className='app_chatbot'>
        <Chatbot class='chatbot' />
      </div>
    </div>
  );
}

export default App;
