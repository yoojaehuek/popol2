/*
작성자: 김지환, 조경익
수정일자: 2023-10-18
내용: 상품등록 페이지
*/
import React, { useState } from "react";
import { UploadOutlined } from '@ant-design/icons';
import { Form, Divider, Input, Button, message, Upload, Select } from 'antd'; //엔트디 사용
import axios from 'axios'; // 서버에 요청 보낼려면 필요
import { useNavigate } from 'react-router-dom'; // 주소 바꿀수 있는 훅 
import '../scss/uploader.scss'; // scss적용
import { API_URL } from '../config/contansts' // http://localhost:8080

const { Option, OptGroup } = Select;



const Uploader = () => {
    const navigate = useNavigate();
    const [selectedopt, setSelectedopt] = useState(null);
    const handleCountryChange = (value) => {
        setSelectedopt(value);
    };

    // 이미지 경로
    const [imageUrl, setImageUrl] = useState(null);
    // 음악파일 경로
    const [musicUrl, setMusicUrl] = useState(null);

    //음악파일 관련
    const props = {
        name: 'file',
        action: `${API_URL}/mp3`,
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                // console.log("musicUrl: ",info.file.response.musicUrl);
                message.success(`${info.file.name} file uploaded successfully`);
                const response = info.file.response;
                // console.log(response);
                const musicUrl = response.musicUrl;
                setMusicUrl(musicUrl);
                console.log("musicUrl: ", musicUrl);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    // 이미지 처리함수
    const onChangeImage = (info) => {
        // 파일이 업로드 중일 때
        console.log("upload/index.js/onChangeImage() info.file: ", info.file)
        console.log('info', info);
        if (info.file.status === "uploading") {
            return;
        }
        // 파일이 업로드 완료 되었을 때
        if (info.file.status === "done") {
            const response = info.file.response;
            console.log(response);
            const imageUrl = response.imageUrl;
            // 받은 이미지경로를 imageUrl에 넣어줌
            setImageUrl(imageUrl); //이미지 선택하면 이미지 url넣음
        }
    }
    const onSubmit = (values) => { //이미지 선택하고 확인 버튼 눌렀을때
        console.log("values", values);
        // 서버로 데이터 전송하기
        axios.post(`${API_URL}/musics`, {
            imageUrl: imageUrl,
            musicUrl: musicUrl,
            name: values.name,
            kind: values.kind,
            singer: values.singer,
            composer: values.composer,
            lyricist: values.lyricist,
            lyrics: values.lyrics,
        }).then((result) => {
            console.log(result);
            alert("등록 성공");
            navigate("/");
        })
            .catch(e => {
                console.log(e);
            })
    }

    return (
        <div id="upload-container" className='inner'>
            <Form name="productUpload" onFinish={onSubmit}>
                <Form.Item name="imgUpload"
                    label={<div className='upload-label'>커버 이미지</div>}>
                    <Upload name="image" action={`${API_URL}/image`} listType="picture" showUploadList={false} onChange={onChangeImage}>
                        {/* 업로드 이미지가 있으면 이미지를 나타내고 업로드 이미지가 없으면
                        회색배경에 업로드 아이콘이 나타나도록 ... */}
                        {imageUrl ? <img src={imageUrl} //삼항연산자
                            alt="" width="200px" height="200px" /> :
                            (<div id="upload-img-placeholder">
                                <img src="images/icons/camera.png" alt="" />
                                <span>이미지를 업로드 해주세요.</span>
                            </div>)}
                    </Upload>
                </Form.Item>
                <Divider /> {/* Divider: 인풋 사이사이 반투명 구분선 */}
                <Upload {...props}>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
                <Divider />
                <Form.Item name="name"
                    label={<div className='upload-label'>음원 제목</div>}>
                    <Input
                        className='upload-name'
                        size='large'
                        placeholder='상품 이름을 입력해주세요' />
                </Form.Item>
                <Divider />
                <Form.Item name="country" label={<div className='upload-label'>국가</div>}>
                    <Select
                        style={{ width: 120 }}
                        placeholder="국가를 선택해주세요"
                        onChange={handleCountryChange}
                        value={selectedopt}
                    >
                        <Option value="korea">K-POP</Option>
                        <Option value="usa">POP</Option>
                        <Option value="japan">J-POP</Option>
                    </Select>
                </Form.Item>
                {/* <Divider /> */}
                {selectedopt && (
                    <Form.Item name="kind" label={<div className='upload-label'>장르</div>}>
                        <Select name="kind" defaultValue={`상품 카테고리를 선택해주세요 (${selectedopt})`} style={{ width: 200 }}>
                            {selectedopt === 'korea' && (
                                <OptGroup label="K-POP">
                                    <Option value="1-1">발라드</Option>
                                    <Option value="1-2">힙합</Option>
                                    <Option value="1-3">아이돌</Option>
                                    <Option value="1-4">트로트</Option>
                                    <Option value="1-5">동요</Option>
                                </OptGroup>
                            )}
                            {selectedopt === 'usa' && (
                                <OptGroup label="POP">
                                    <Option value="2-1">밴드</Option>
                                    <Option value="2-2">솔로</Option>
                                    <Option value="2-3">힙합</Option>
                                    <Option value="2-3">락</Option>
                                    <Option value="2-4">OST</Option>
                                </OptGroup>
                            )}
                            {selectedopt === 'japan' && (
                                <OptGroup label="J-POP">
                                    <Option value="3-1">아이돌</Option>
                                    <Option value="3-2">애니</Option>
                                    <Option value="3-3">가요</Option>
                                    <Option value="3-4">락</Option>
                                </OptGroup>
                            )}
                        </Select>
                    </Form.Item>
                )}
                <Divider />
                {/* <Form.Item name="price"
                label={<div className='upload-label'>상품가격</div>}>
                    <InputNumber defaultValue={0} size="large"/>
                </Form.Item> */}
                <Form.Item name="singer"
                    label={<div className='upload-label'>가수 이름</div>}>
                    <Input
                        className='upload-name'
                        size='large'
                        placeholder='가수를 입력해주세요' />
                </Form.Item>
                <Divider />
                <Form.Item name="composer"
                    label={<div className='upload-label'>작곡가</div>}>
                    <Input
                        className='upload-name'
                        size='large'
                        placeholder='작곡가를 입력해주세요' />
                </Form.Item>
                <Divider />
                <Form.Item name="lyricist"
                    label={<div className='upload-label'>작사가</div>}>
                    <Input
                        className='upload-name'
                        size='large'
                        placeholder='작사가를 입력해주세요' />
                </Form.Item>
                <Divider />
                <Form.Item name="lyrics"
                    label={<div className='upload-label'>가사</div>}>
                    <Input.TextArea
                        size='large'
                        id="product-content"
                        maxLength={2000} //최대 1000자까지
                        placeholder="상품 소개를 적어주세요"
                    />
                </Form.Item>
                <Form.Item>
                    <Button id="submit-button" size="large" htmlType='submit'>
                        상품등록하기
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Uploader;