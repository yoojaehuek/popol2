import React, { useState } from "react";
import Sliders from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Dialog, DialogContent, DialogTitle, Button, styled  } from "@mui/material";
import "../scss/slider2.scss";

const CustomButton = styled(Button)({
  backgroundColor: 'rgba(129, 119, 119, 0.856)',
  color: "white",
  padding: '10px  5vw',
  border: 'solid 1px rgba(128, 128, 128, 0)',
  borderRadius: '40px',
  cursor: "pointer",
  left: '1rem',
  "&:hover": {
    backgroundColor: "#1565C0",
  },
});


const Slider3 = () => {
  const [openModal, setOpenModal] = useState(false);
  const [videoId, setVideoId] = useState("");

  const settings = {
    infinite: true,
    speed: 3900,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    dots: false,
    arrows: false,
  };

  const handleOpenModal = (id) => {
    setOpenModal(true);
    setVideoId(id);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setVideoId("");
  };

  return (
    <div className="sliders">
      <h2> 코믹스 웨이브를 지금 감상해보세요</h2>
      <Sliders {...settings} className="sliders2">
        <div>
          <img
            className="phoneImages"
            alt="이미지"
            src="/images/slider2/1.png"
          />
          <br></br>
          <CustomButton onClick={() => handleOpenModal("nya6BDcJYZw")}>
            감상하기
          </CustomButton>
        </div>
        <div>
          <img
            className="phoneImages"
            alt="이미지"
            src="/images/slider2/2.png"
          />
          <br></br>
          <CustomButton onClick={() => handleOpenModal("jKg-Cp0ux5Q")}>
            감상하기
          </CustomButton>
        </div>
        <div>
          <img
            className="phoneImages"
            alt="이미지"
            src="/images/slider2/3.png"
          />
          <br></br>
          <CustomButton onClick={() => handleOpenModal("gcLIOSNS4jc")}>
            감상하기
          </CustomButton>
        </div>
        <div>
          <img
            className="phoneImages"
            alt="이미지"
            src="/images/slider2/4.png"
          />
          <br></br>
          <CustomButton onClick={() => handleOpenModal("eA7nDGE_E00")}>
            감상하기
          </CustomButton>
        </div>
        <div>
          <img
            className="phoneImages"
            alt="이미지"
            src="/images/slider2/5.png"
          />
          <br></br>
          <CustomButton onClick={() => handleOpenModal("-shnk7ityoY")}>
            감상하기
          </CustomButton>
        </div>
        <div>
          <img
            className="phoneImages"
            alt="이미지"
            src="/images/slider2/6.png"
          />
          <br></br>
          <CustomButton onClick={() => handleOpenModal("tBk3B6nDQSQ")}>
            감상하기
          </CustomButton>
        </div>
        <div>
          <img
            className="phoneImages"
            alt="이미지"
            src="/images/slider2/7.png"
          />
          <br></br>
          <CustomButton onClick={() => handleOpenModal("VlMe7PavaRQ")}>
            감상하기
          </CustomButton>
        </div>
        <div>
          <img
            className="phoneImages"
            alt="이미지"
            src="/images/slider2/8.png"
          />
          <br></br>
          <CustomButton onClick={() => handleOpenModal("ILQl1Q4jizc")}>
            감상하기
          </CustomButton>
        </div>
        <div>
          <img
            className="phoneImages"
            alt="이미지"
            src="/images/slider2/9.png"
          />
          <br></br>
          <CustomButton onClick={() => handleOpenModal("UUpk0wnNhtU")}>
            감상하기
          </CustomButton>
        </div>
      </Sliders>

      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        maxWidth="xl"
        fullWidth
      >
        <DialogTitle
          style={{
            textAlign: "center",
            // backgroundColor: "rgba(0 0 0)",
            color: "white",
            fontWeight: "bold",
          }}
        >
          <img
            src="/images/slider2/comix.png"
            alt="감상 이미지"
            style={{ width: "15%", height: "50%" }}
          />
        </DialogTitle>
        <DialogContent>
          <iframe
            width="100%"
            height="650px"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Slider3;
