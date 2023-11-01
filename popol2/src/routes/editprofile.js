import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Grid } from '@mui/material';

const EditProfile = () => {
  const [formData, setFormData] = useState({
    password: '',
    newPassword: '',
    confirmPassword: '',
    phoneNumber: 'phoneNumber',
    email: 'example@example.com',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('수정된 회원 정보:', formData);
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
