import React from "react";
import FrontPage from "./Components/FrontPage/FrontPage";
import MiddleGraphs from "./Components/MiddleGraphs/MiddleGraphs";
import MiddleGraphs2 from "./Components/MiddleGraphs2/MiddleGraphs2";
import MiddleGraphs3 from "./Components/MiddleGraphs3/MiddleGraphs3";
import Text1 from "./Components/Text1/Text1";
import Text2 from "./Components/Text2/Text2";
import Text3 from "./Components/Text3/Text3";
import Story1 from "./Components/Story1/Story1";
import Story2 from "./Components/Story2/Story2";
import AmbitiosFuture from "./Components/AmbitiosFuture/AmbitiosFuture";
import Blog from "./Components/Blog/Blog";
import BriefingCenter from "./Components/BriefingCenter/BriefingCenter";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <FrontPage />
      <MiddleGraphs />
      <MiddleGraphs2 />
      <MiddleGraphs3 />
      <Text1 />
      <Text2 />
      <Text3 />
      <Story1 />
      <Story2 />
      <AmbitiosFuture />
      <Blog />
      <BriefingCenter />
      <Footer />
    </div>
  );
};

export default App;
// ReactDOM.render(<App />, document.getElementById("app"));
