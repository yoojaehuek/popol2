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


const Slider4 = () => {
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
      <h2> Disney를 지금 감상해보세요</h2>
      <Sliders {...settings} className="sliders2">
        <div>
          <img
            className="phoneImages"
            alt="이미지"
            src="/images/slider3/1.png"
          />
          <br></br>
          <CustomButton onClick={() => handleOpenModal("m6mAIF-D4L0")}>
            감상하기
          </CustomButton>
        </div>
        <div>
          <img
            className="phoneImages"
            alt="이미지"
            src="/images/slider3/2.png"
          />
          <br></br>
          <CustomButton onClick={() => handleOpenModal("eTjHiQKJUDY")}>
            감상하기
          </CustomButton>
        </div>
        <div>
          <img
            className="phoneImages"
            alt="이미지"
            src="/images/slider3/3.png"
          />
          <br></br>
          <CustomButton onClick={() => handleOpenModal("8kgI0ErpMJk")}>
            감상하기
          </CustomButton>
        </div>
        <div>
          <img
            className="phoneImages"
            alt="이미지"
            src="/images/slider3/4.png"
          />
          <br></br>
          <CustomButton onClick={() => handleOpenModal("HKH7_n425Ss")}>
            감상하기
          </CustomButton>
        </div>
        <div>
          <img
            className="phoneImages"
            alt="이미지"
            src="/images/slider3/5.png"
          />
          <br></br>
          <CustomButton onClick={() => handleOpenModal("3CG-8dOgCpA")}>
            감상하기
          </CustomButton>
        </div>
        <div>
          <img
            className="phoneImages"
            alt="이미지"
            src="/images/slider3/6.png"
          />
          <br></br>
          <CustomButton onClick={() => handleOpenModal("ow9woC6-9Q8")}>
            감상하기
          </CustomButton>
        </div>
        <div>
          <img
            className="phoneImages"
            alt="이미지"
            src="/images/slider3/7.png"
          />
          <br></br>
          <CustomButton onClick={() => handleOpenModal("bbh1NIpDo-c")}>
            감상하기
          </CustomButton>
        </div>
        <div>
          <img
            className="phoneImages"
            alt="이미지"
            src="/images/slider3/8.png"
          />
          <br></br>
          <CustomButton onClick={() => handleOpenModal("K4OJXmoakF4")}>
            감상하기
          </CustomButton>
        </div>
        <div>
          <img
            className="phoneImages"
            alt="이미지"
            src="/images/slider3/9.png"
          />
          <br></br>
          <CustomButton onClick={() => handleOpenModal("qCjVVBsWZ0c")}>
            감상하기
          </CustomButton>
        </div>
        <div>
          <img
            className="phoneImages"
            alt="이미지"
            src="/images/slider3/10.png"
          />
          <br></br>
          <CustomButton onClick={() => handleOpenModal("3WUw9thZR4k")}>
            감상하기
          </CustomButton>
        </div>
        <div>
          <img
            className="phoneImages"
            alt="이미지"
            src="/images/slider3/11.png"
          />
          <br></br>
          <CustomButton onClick={() => handleOpenModal("Vl8pOIeSEhI")}>
            감상하기
          </CustomButton>
        </div>
        <div>
          <img
            className="phoneImages"
            alt="이미지"
            src="/images/slider3/12.png"
          />
          <br></br>
          <CustomButton onClick={() => handleOpenModal("pDKmvfkzjJg")}>
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
            src="/images/slider3/Di.png"
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

export default Slider4;
