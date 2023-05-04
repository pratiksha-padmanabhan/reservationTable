import "/Users/pratiksha/pratproj/src/HeaderFooter/Footer.css";
import Images from "../assets/images";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bgColor" id="letsee">
      <div className="mainFooter">
        <div className="footerInfo">
          <h2 style={{ fontSize: "30px" }}>Get to Know Us Better!</h2>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. It is a long established fact that
          a reader will be distracted by the readable content of a page when
          looking at its layout.
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
