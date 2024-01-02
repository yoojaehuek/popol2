import React, { useEffect, useState } from 'react';
import { TextField, Button, Typography, Box, Grid } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getCookie, removeCookie } from "../cookie";
import { API_URL } from '../config/contansts';

const EditProfile = () => {
  const navigate = useNavigate();

  // EditProfile 페이지 진입 시 토큰 검증
  useEffect(() => {
    const verify = async () => {
      // 쿠키에 accessToken이 존재하는지 확인
      if (getCookie('accessToken') != null) {
        const login = getCookie('accessToken');
        // 토큰을 사용하여 서버에 인증 요청
        await axios({
          url: `${API_URL}/verify`,
          method: 'POST',
          headers: {
            Authorization: 'Bearer ' + login
          }
        }).then((res) => {
          // 응답이 OK가 아닌 경우 로그인 페이지로 리다이렉션
          if (res.statusText !== "OK") {
            alert('다시 로그인 해주세요');
            removeCookie('accessToken');
            navigate('/');
          }
        }).catch((err) => {
          console.log(err);
        });
      } else {
        // 쿠키에 accessToken이 없는 경우 로그인 페이지로 리다이렉션
        alert('다시 로그인 해주세요');
        navigate("/");
      }
    };
    
    verify();
  }, []);

  // 폼 데이터 상태 설정
  const [formData, setFormData] = useState({
    password: '',
    newPassword: '',
    confirmPassword: '',
    phoneNumber: '',
    email: '',
  });

  // 폼 입력값 변경 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // 폼 제출 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault();
    // 쿠키에 accessToken이 존재하는지 확인
    if (getCookie('accessToken')) {
      const login = getCookie('accessToken');
      // 새로운 비밀번호와 확인 비밀번호가 일치하는지 확인
      if (formData.newPassword === formData.confirmPassword) {
        const newPassword = formData.newPassword;
        const newPhone = formData.phoneNumber;
        const newEmail = formData.email;
        // 서버에 회원 정보 수정 요청
        await axios({
          url: `${API_URL}/user`,
          method: 'PUT',
          headers: {
            Authorization: 'Bearer ' + login
          },
          data: {
            newPassword: newPassword,
            newPhone: newPhone,
            newEmail: newEmail,
          }

        }).then((res) => {
          // 응답 상태가 OK인 경우 회원 정보가 성공적으로 수정되었다는 메시지 출력
          if (res.statusText === "OK") {
            alert("회원 정보가 성공적으로 수정되었습니다.");
            navigate("/");
          }
          console.log(res);
        }).catch((err) => {
          console.log(err);
        });
      }
    } else {
      // 쿠키에 accessToken이 없는 경우 로그인 페이지로 리다이렉션
      alert("다시 로그인 해주세요");
      navigate('/');
    }
  };

  // JSX 반환
  return (
    <Box sx={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
      <Typography variant="h6" gutterBottom>
        회원정보 수정
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} direction="column" justifyContent="center">
          {/* 비밀번호 입력 필드 */}
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="비밀번호"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              margin="normal"
              sx={{ width: '35%' }}
            />
          </Grid>
          {/* 새 비밀번호 입력 필드 */}
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="새 비밀번호"
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              margin="normal"
              sx={{ width: '35%' }}
            />
          </Grid>
          {/* 비밀번호 확인 입력 필드 */}
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="비밀번호 확인"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              margin="normal"
              sx={{ width: '35%' }}
            />
          </Grid>
          {/* 전화번호 입력 필드 */}
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="전화번호"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              margin="normal"
              sx={{ width: '35%' }}
            />
          </Grid>
          {/* 이메일 입력 필드 */}
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="이메일"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              sx={{ width: '35%' }}
            />
          </Grid>
          {/* 저장 버튼 */}
          <Grid item xs={12} md={6}>
            <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px', width: '1%' }}>
              저장
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default EditProfile;
