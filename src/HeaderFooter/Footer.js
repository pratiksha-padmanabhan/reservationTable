import "/Users/pratiksha/pratproj/src/HeaderFooter/Footer.css";
import Images from "../assets/images";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bgColor" id="letsee">
      <div className="mainFooter">
        <div className="footerInfo">
          <h2 style={{ fontSize: "30px" }}>Get to Know Us Better!</h2>
          Little Lemon reserves all rights. Use of this site constitutes the acceptantance 
          of our User Agreement and Privacy Policy  and Cookie Statement and these are Your 
          State Privacy Laws. Subscribe to our newsletter for the latest news on new item 
          launches and know about the hottest discounts before anyone else! 
          Little Lemon reserves all rights. Use of this site constitutes the acceptantance 
          of our User Agreement and Privacy Policy  and Cookie Statement and these are Your 
          State Privacy Laws. Subscribe to our newsletter for the latest news on new item 
          launches and know about the hottest discounts before anyone else! 
          Little Lemon reserves all rights. Use of this site constitutes the acceptantance 
          of our User Agreement and Privacy Policy  and Cookie Statement and these are Your 
          State Privacy Laws. Subscribe to our newsletter for the latest news on new item 
          launches and know about the hottest discounts before anyone else! 
          <br/>~Little Lemon~{" "}
        </div>
        <div class="footerContact">
          <ol className="socialsList">
            <li className="socials">
              <a href="https://twitter.com/" target="_blank">
                <img src={Images.twitter} style={{ height: "39pt" }} />
                Twitter
              </a>
            </li>
            <li className="socials">
              <a href="https://instagram.com/" target="_blank">
                <img src={Images.instagram} />
                Instgram
              </a>
            </li>
            <li className="socials">
              <a href="https://facebook.com/" target="_blank">
                <img src={Images.facebook} />
                FaceBook
              </a>
            </li>
            <li className="socials">
              <a href="+111111111" target="_blank">
                <img src={Images.phone} />
                Phone
              </a>
            </li>
          </ol>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
