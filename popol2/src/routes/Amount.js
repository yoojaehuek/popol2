import React from 'react';
import useAsync from '../customHook/useAsync';
import axios from 'axios';
import { API_URL } from '../config/contansts';
import { NavLink } from 'react-router-dom';

const style = {
	whiteSpace: "pre-line"
};

// Amount 컴포넌트 정의
const Amount = (amount) => {
	const id = amount.amount.id; // props로 전달된 금액의 ID를 가져옴

	// API에서 특정 금액 정보를 가져오는 비동기 함수 정의
	const getAmount = async () => {
		const res = await axios.get(`${API_URL}/amounts/${id}`); // API에서 데이터를 가져옴
		return res.data; // 가져온 데이터를 반환
	}

	// useAsync 훅을 사용하여 API 요청을 관리하고 결과를 받아옴
	const [state] = useAsync(getAmount, []); // getAmount 함수와 의존성 배열을 전달
	const { loading, data: detailAmount, error } = state; // useAsync 훅의 결과를 구조분해하여 사용

	// 로딩 중일 때 로딩 메시지를 반환
	if (loading) return <div>로딩중 ......</div>;

	// 에러가 발생한 경우 에러 메시지를 반환합
	if (error) return <div>에러가 발생했습니다.</div>;

	// detailAmount가 없는 경우 로딩 중 메시지를 반환
	if (!detailAmount) {
		return <div>로딩중입니다.</div>;
	}

	const tempprice = Number(detailAmount.price); // 가격을 숫자로 변환

	// JSX로 화면을 구성하여 반환
	return (
		<div>
			<div className='user-text2 first'>
				<div className="money">
					<div className="moneytop">
						<h3>{detailAmount.name}</h3> {/* 금액의 이름을 표시 */}
						<p>매월 {tempprice.toLocaleString()}원 정기결제(부가세 별도)</p> {/* 월간 결제 정보를 표시 */}
						<p>계정 {detailAmount.numberAcounts}개</p> {/* 계정 수를 표시 */}
						<hr className="moneyline"></hr> {/* 구분선을 표시 */}
					</div>
					<ul className="moneymid">
						<p style={style}>{detailAmount.content}</p> {/* 금액에 대한 설명을 표시 */}
					</ul>
					<div className="moneybottom">
						<div>
							<div>
								<NavLink to={`/payment/${id}`} state={amount.amount} className="moneybottoma">
									Get Started {/* 결제 페이지로 이동하는 링크를 제공 */}
								</NavLink>
							</div>
						</div>
					</div>
					<div className="moneyfotter">
						<p className="moneyfottertxt">체험 기간 이후 매월 정기결제되고 이용 약관이 적용됩니다.<br /> Premium을 이미 이용해 봤다면 참여할 수 없습니다.</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Amount;
