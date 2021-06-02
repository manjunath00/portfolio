import style from "../styles/Portfolio.module.css";

import Mainbar from "../components/Mainbar";
import Sidebar from "../components/Sidebar";

export default function Portfolio() {
  return (
    <div className={style.container}>
      <Sidebar />
      <Mainbar />
    </div>
  );
}
