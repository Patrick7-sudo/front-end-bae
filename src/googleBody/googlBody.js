import style from "./googleBody.module.css"
import {useState,useEffect} from "react"
import image from "./google.png"
import microphoneImg from "./googlemicrophone.png"


function GoogleBody(){
    const [height, setHeight] = useState(window.innerHeight);
    const [inputField, setInputField] = useState('hello world')
    useEffect(()=>{
        function height(){
            setHeight(window.innerHeight);
        }
        window.addEventListener('resize',height);

        height()
    },[height])
    console.log(height);
    return (
      <>
        <div
          className={style.bodyMainContainer}
          style={{ height: height * 0.6 }}
        >
          <div className={style.bodyMainWrapper}>
            {/* google image */}
            <img src={image} alt="google mircophone"></img>

            {/* search box section */}
            <div className={style.inputBoxWrapper}>
              <div className={style.inputbox}>
                <i class="fa fa-search" style={{ color: "#9aa0a6" }}></i>
                <input
                  type="text"
                  className={style.inputBoxInput}
                  onChange={(e) => {
                    return setInputField(e.target.value);
                  }}
                  value={inputField}
                />
                <div className={style.microphoneimageContainer}>
                  <img
                    className={style.microphoneimage}
                    src={microphoneImg}
                    alt="google mircophone"
                  />
                </div>
                <div></div>
              </div>
            </div>
            {/* button */}
            <div className={style.buttonContainer}>
              <button>Google Search</button>
              <button>I'm Feeling Lucky</button>
            </div>
          </div>
        </div>
      </>
    );
}

export default GoogleBody;