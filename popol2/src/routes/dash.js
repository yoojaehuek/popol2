import React, { useState, useEffect } from 'react';
import Chart from 'chart.js';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { NavLink } from 'react-router-dom';

const Dash = () => {
  const [userData, setUserData] = useState([100, 150, 200, 180, 220, 170, 130]);
  const [categoryData, setCategoryData] = useState([50, 70, 90, 60, 80]);
  const [totalVisitors, setTotalVisitors] = useState(15000);
  const [totalSales, setTotalSales] = useState(5000);

  useEffect(() => {
    const userC = document.getElementById('userChart').getContext('2d');
    new Chart(userC, {
      type: 'bar',
      data: {
        labels: ['월', '화', '수', '목', '금', '토', '일'],
        datasets: [
          {
            label: '하루 이용자',
            data: userData,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: 'category',
          },
        },
      },
    });

    const categoryC = document.getElementById('categoryChart').getContext('2d');
    new Chart(categoryC, {
      type: 'doughnut',
      data: {
        labels: ['카테고리 1', '카테고리 2', '카테고리 3', '카테고리 4', '카테고리 5'],
        datasets: [
          {
            data: categoryData,
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(255, 205, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 205, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
            borderWidth: 1,
          },
        ],
      },
    });

    const visitorsC = document.getElementById('visitorsChart').getContext('2d');
    new Chart(visitorsC, {
      type: 'line',
      data: {
        labels: ['월', '화', '수', '목', '금', '토', '일'],
        datasets: [
          {
            label: '누적 방문자 수',
            data: [500, 700, 850, 750, 900, 950, 1000],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: 'category',
          },
        },
      },
    });


    const salesC = document.getElementById('salesChart').getContext('2d');
    new Chart(salesC, {
      type: 'bar',
      data: {
        labels: ['월', '화', '수', '목', '금', '토', '일'],
        datasets: [
          {
            label: '상품 판매량',
            data: [30, 40, 35, 45, 38, 50, 55],
            backgroundColor: 'rgba(255, 205, 86, 0.2)',
            borderColor: 'rgba(255, 205, 86, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: 'category',
          },
        },
      },
    });
  }, []);

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={2} md={2}>
          <List
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              backgroundColor: '#87CEEB',
              padding: 2,
              textAlign: 'center',
            }}
          >
            <ListItem button component={NavLink} to='/dash'>
              일일 현황
            </ListItem>
            <ListItem button component={NavLink} to='/uploader' sx={{ marginBottom: 100 }}>
              업로드
            </ListItem>
            <ListItem button component={NavLink} to='/'>
              메인으로 돌아가기
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={10}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <h2>하루 이용자</h2>
              <div style={{ width: '100%', height: '200px' }}>
                <canvas id="userChart" style={{ width: '100%', height: '100%' }}></canvas>
              </div>
            </Grid>
          </Grid>
          <Grid item xs={10} md={5}>
            <div>
              <h2>인기 카테고리</h2>
              <div style={{ width: '100%', height: '200px' }}>
                <canvas id="categoryChart" style={{ width: '100%', height: '100%' }}></canvas>
              </div>
            </div>
          </Grid>
          <Grid item xs={10} md={5}>
            <div>
              <h2>누적 방문자 수</h2>
              <div style={{ width: '100%', height: '200px' }}>
                <canvas id="visitorsChart" style={{ width: '100%', height: '100%' }}></canvas>
              </div>
            </div>
          </Grid>
          <Grid item xs={10} md={5}>
            <div>
              <h2>상품 판매량</h2>
              <div style={{ width: '100%', height: '200px' }}>
                <canvas id="salesChart" style={{ width: '100%', height: '100%' }}></canvas>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dash;