import React from 'react';
import ChatBot from 'react-simple-chatbot';

const steps = [
  {
    id: '1',
    message: '안녕하세요! 무엇을 도와드릴까요?',
    trigger: '2',
  },
  {
    id: '2',
    options: [
      { value: 'option1', label: '넌 누구니?', trigger: 'whoAmI' },
      { value: 'option2', label: '음악 추천해줘', trigger: 'Music' },
      { value: 'goBack', label: '처음으로 돌아가기', trigger: '1' },
    ],
  },
  {
    id: 'whoAmI',
    message: '저는 저에요!',
    trigger: 'Music',
    trigger: '1',
  },
  {
    id: 'Music',
    message: '어떤 음악을 추천해 드릴까요?',
    trigger: 'recommendMusic',
  },
  {
    id: 'recommendMusic',
    options: [
      { value: 'musicOption1', label: '국가', trigger: 'music1' },
      { value: 'musicOption2', label: '기분', trigger: 'music2' },
      { value: 'musicOption3', label: '아무거나', trigger: 'music3' },
      { value: 'goBack', label: '처음으로 돌아가기', trigger: '1' },
    ],
  },
  {
    id: 'music1',
    message: '국가를 골라주세요.',
    trigger: 'music11',
  },
  {
    id: 'music11',
    options: [
      { value: 'musicOption1', label: 'K-POP', trigger: 'music111' },
      { value: 'musicOption2', label: 'POP', trigger: 'music222' },
      { value: 'musicOption3', label: 'J-POP', trigger: 'music333' },
      { value: 'goBack', label: '처음으로 돌아가기', trigger: '1' },
    ],
  },
  {
    id: 'music111',
    options: [
      { value: 'musicOption1', label: '발라드', trigger: 'music1111' },
      { value: 'musicOption2', label: '힙합', trigger: 'music1111' },
      { value: 'musicOption3', label: '락', trigger: 'music1111' },
      { value: 'musicOption4', label: '트로트', trigger: 'music1111' },
      { value: 'musicOption5', label: '아이돌', trigger: 'music1111' },
      { value: 'goBack', label: '처음으로 돌아가기', trigger: '1' },
    ],
  },
  {
    id: 'music222',
    options: [
      { value: 'musicOption1', label: '솔로', trigger: 'music1111' },
      { value: 'musicOption2', label: '밴드', trigger: 'music1111' },
      { value: 'musicOption3', label: '락, 힙합', trigger: 'music1111' },
      { value: 'musicOption4', label: 'ost', trigger: 'music1111' },
      { value: 'goBack', label: '처음으로 돌아가기', trigger: '1' },
    ],
  },
  {
    id: 'music333',
    options: [
      { value: 'musicOption1', label: '아이돌', trigger: 'music1111' },
      { value: 'musicOption2', label: '가요', trigger: 'music1111' },
      { value: 'musicOption3', label: '락', trigger: 'music1111' },
      { value: 'musicOption4', label: '가쿠세이', trigger: 'music1111' },
      { value: 'goBack', label: '처음으로 돌아가기', trigger: '1' },
    ],
  },
  {
    id: 'music1111',
    message: '추천 음악입니다. ~~~~~~~~ .',
    trigger: '1',
  },
  {
    id: 'music2',
    message: '지금은 어떤 기분이세요?.',
    trigger: 'music22',
  },
  {
    id: 'music22',
    options: [
      { value: 'musicOption1', label: '우울', trigger: 'music1111' },
      { value: 'musicOption2', label: '행복', trigger: 'music1111' },
      { value: 'musicOption3', label: '화남', trigger: 'music1111' },
      { value: 'goBack', label: '처음으로 돌아가기', trigger: '1' },
    ],
  },
  {
    id: 'music3',
    message: '아무거나 추천해드릴게요.',
    trigger: 'music1111',
  },
];


const Simple = () => {
  return <ChatBot steps={steps} />;
};

export default Simple;
