import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="left">
          <span>Testvalley</span>
          <div>
            <div>
              <span className="category"></span>
              <span className="category"></span>
              <span className="category"></span>
            </div>
            <p style={{ fontSize: "12px", color: "#00d093" }}>카테고리</p>
          </div>
        </div>
        <div className="search">
          <SearchOutlinedIcon style={{ width: "20px", height: "20px" }} />
          <input
            type="text"
            placeholder="If you're wondering whether to buy or not,"
          />
        </div>
        <div className="right">
          <LocalOfferOutlinedIcon style={{ color: "grey" }} />
          <span>|</span>
          <p>Login / Sign up</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
