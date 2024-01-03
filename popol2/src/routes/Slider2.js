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


const Slider2 = () => {
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
      <h1>Music<span style={{color:'lightseagreen'}}>Hub</span> 오디오 콘텐츠</h1>
      <h2>지브리 ost를 지금 감상해보세요</h2>
      <Sliders {...settings} className="sliders2">
        <div>
          <img
            className="phoneImages"
            alt="이미지"
            src="/images/video/ge.jpg"
          />
          <br></br>
          <CustomButton onClick={() => handleOpenModal("RURusloLi-s")}>
            감상하기
          </CustomButton>
        </div>
        <div>
          <img
            className="phoneImages"
            alt="이미지"
            src="/images/video/ge2.jpg"
          />
          <br></br>
          <CustomButton onClick={() => handleOpenModal("pfGDfDjAdSE")}>
            감상하기
          </CustomButton>
        </div>
        <div>
          <img
            className="phoneImages"
            alt="이미지"
            src="/images/video/ge3.jpg"
          />
          <br></br>
          <CustomButton onClick={() => handleOpenModal("92a7Hj0ijLs")}>
            감상하기
          </CustomButton>
        </div>
        <div>
          <img
            className="phoneImages"
            alt="이미지"
            src="/images/video/ge4.jpg"
          />
          <br></br>
          <CustomButton onClick={() => handleOpenModal("cObkRSVathg")}>
            감상하기
          </CustomButton>
        </div>
        <div>
          <img
            className="phoneImages"
            alt="이미지"
            src="/images/video/ge5.jpg"
          />
          <br></br>
          <CustomButton onClick={() => handleOpenModal("iwROgK94zcM")}>
            감상하기
          </CustomButton>
        </div>
        <div>
          <img
            className="phoneImages"
            alt="이미지"
            src="/images/video/ge6.jpg"
          />
          <br></br>
          <CustomButton onClick={() => handleOpenModal("lwrG3HQXTFw")}>
            감상하기
          </CustomButton>
        </div>
        <div>
          <img
            className="phoneImages"
            alt="이미지"
            src="/images/video/ge7.jpg"
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
            src="/images/video/ge8.jpg"
          />
          <br></br>
          <CustomButton onClick={() => handleOpenModal("-rvt5cOh-Ys")}>
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
            src="/images/video/gbl.png"
            alt="감상 이미지"
            style={{ width: "15%", height: "50%" }}
          />
        </DialogTitle>
        <DialogContent>
          <iframe
            width="100%"
            height="700px"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Slider2;
