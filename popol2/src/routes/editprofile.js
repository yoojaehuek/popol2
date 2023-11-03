import React, { useEffect, useState } from 'react';
import { TextField, Button, Typography, Box, Grid } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getCookie, removeCookie } from "../cookie";
import { API_URL } from '../config/contansts';


const EditProfile = () => {
  const navigate = useNavigate();
  //EditProfile 들어왔을때 토큰 검증
  useEffect(() => {
    const verify = async () => {
      if(getCookie('accessToken') != null){
        const login = getCookie('accessToken');
        await axios({
          url: `${ API_URL }/verify`,
          method: 'POST',
          headers: {
            Authorization: 'Bearer '+ login
          }
        }).then((res) => {
          if (res.statusText != "OK") {
            alert('다시 로그인 해주세요');
            removeCookie('accessToken');
            navigate('/');
          }
        }).catch((err) => {
          console.log(err);
        })
      }else{
        alert('다시 로그인 해주세요');
        navigate("/");
      }
    }
    
    verify();
  }, []);

  const [formData, setFormData] = useState({
    password: '',
    newPassword: '',
    confirmPassword: '',
    phoneNumber: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(getCookie('accessToken')){
      const login = getCookie('accessToken');
      console.log('수정된 회원 정보:', formData);
      if (formData.newPassword == formData.confirmPassword) {
        const newPassword = formData.newPassword;
        const newPhone = formData.phoneNumber;
        const newEmail= formData.email;
        await axios({
          url: `${ API_URL }/user`,
          method: 'PUT',
          headers: {
            Authorization: 'Bearer '+ login
          },
          data: {
            newPassword: newPassword,
            newPhone: newPhone,
            newEmail: newEmail,
          }
        }).then((res)=> {
          // if (res.statusText == ) {
          //   alert("변경 성공");
          //   navigate("/")
          // }
          console.log(res);
        }).catch((err)=>{
          console.log(err);
        })
      }
    }else{
      alert("다시 로그인")
      navigate('/')
    }
  };

  return (
    <Box sx={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
      <Typography variant="h6" gutterBottom>
        회원정보 수정
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} direction="column" justifyContent="center">
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
