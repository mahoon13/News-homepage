import { useState } from "react";

import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import TopArticles from "./components/TopArticles";
import Sidebar from "./components/Sidebar";

function App() {
  const [isSidbarHidden, setIsSideBarHidden] = useState(true);

  function sidebarToggle() {
    setIsSideBarHidden(!isSidbarHidden);
  }

  return (
    <div id="App">
      <Navbar sidebarToggle={sidebarToggle} />

      <MainContent />

      <TopArticles />

      <Sidebar
        closeSidebar={() => setIsSideBarHidden(true)}
        isSidbarHidden={isSidbarHidden}
      />
    </div>
  );
}

export default App;
