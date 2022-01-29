import "./styles.css";
import { FiHeart, FiDownload, FiRepeat } from "react-icons/fi";

export default function Toolbar({ regenerate, colors, download, ...props }) {
  return (
    <nav className="__toolbar">
      <div className="__toolbar_container">
        <button className="btn blue" onClick={regenerate}>
          <span className="btn_icon">
            <FiRepeat />
          </span>
          <span className="btn_text">Regenerate</span>
        </button>
      </div>
      <div className="__toolbar_container">
        <button className="btn red">
          <span className="btn_icon">
            <FiHeart />
          </span>
          <span className="btn_text">Save</span>
        </button>
        <button className="btn blue" onClick={download}>
          <span className="btn_icon">
            <FiDownload />
          </span>
          <span className="btn_text">Download</span>
        </button>
      </div>
    </nav>
  );
}
