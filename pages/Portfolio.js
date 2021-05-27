import style from "../styles/Portfolio.module.css";

import Mainbar from "./Mainbar";
import Sidebar from "./Sidebar";

export default function Portfolio() {
  return (
    <div className={style.container}>
      <Sidebar />
      <Mainbar />
    </div>
  );
}
