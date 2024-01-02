import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import '../scss/Join.scss';
import { API_URL } from '../config/contansts'

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// 기본 테마 생성
const defaultTheme = createTheme();

// 회원가입 페이지 컴포넌트
export default function Join() {
  const navigate = useNavigate();
  
  // 폼 데이터를 담는 상태 변수 선언 및 초기화
  const [formData, setFormData] = useState({
    id: '',
    pwd: '',
    confirmPwd: '',
    name: '',
    phone: '',
  });

  // 입력 필드 값 변경 핸들러
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // 폼 제출 핸들러
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // 입력값 추출
    const id = formData.id;
    const pwd = formData.pwd;
    const confirmPwd = formData.confirmPwd;
    const name = formData.name;
    const phone = formData.phone;
    // 입력값 유효성 검사 및 서버에 회원가입 요청
    if(pwd === confirmPwd && id !== "" && pwd !== "" && confirmPwd !== "" && name !== "" && phone !== ""){
      // 서버에 POST 요청을 보내어 회원가입 처리
      await axios.post(`${API_URL}/api/user`, { id, name, phone, pwd })
        .then(() => {
          alert("가입 성공!");
          navigate('/');
        })
        .catch(err => {
          console.error(err);
        });
    } else {
      // 필수 입력값이 비어있거나 비밀번호가 일치하지 않는 경우 경고 메시지 출력
      return alert("모든 필수 항목을 입력해주세요.");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme} >
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            회원가입
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                  name="id"
                  required
                  fullWidth
                  id="id"
                  label="ID"
                  autoFocus
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="pwd"
                  type="password"
                  label="password"
                  name="pwd"
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPwd"
                  label="Confirm Password"
                  type="password"
                  id="confirmPwd"
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="name"
                  label="Name"
                  id="name"
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phone"
                  label="Phone Number"
                  id="phone"
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  required
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="동의하세요."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              회원가입
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  회원이세요? 로그인하기
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}