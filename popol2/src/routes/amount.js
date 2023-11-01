import React from 'react';
import useAsync from '../customHook/useAsync';
import axios from 'axios';
import { API_URL } from '../config/contansts'

const Amount = (amount) => {
	console.log("amount:", amount.amount);
	const id = amount.amount.id;
	const getAmount = async () => {
		const res = await axios.get(`${API_URL}/amounts/${id}`);
		return res.data;
	}

	const [state ] = useAsync(getAmount, []);
    const { loading, data:detailAmount, error} = state; //state구조분해 
    if(loading) return <div>로딩중 ......</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!detailAmount){
        return <div>로딩중입니다.</div>
    }

return(
<div>
	<div className='user-text2 first'>
		<div className="money">
			<div className="moneytop">
				<h3>{detailAmount.name}</h3>
				<p>매월 {detailAmount.price}원 정기결제(부가세 별도).</p>
				<p>계정 {detailAmount.numberAcounts}개</p>
				<hr className="moneyline"></hr>
			</div>
			<ul className="moneymid">
				{/* <li><p>무광고로 음악 감상하기</p></li>
				<li><p>다운로드하여 오프라인에서 감상</p></li>
				<li><p>나만의 맞춤 플레이리스트</p></li>
				<li><p>8천만 곡 감상 가능</p></li>
				<li><p>여러 디바이스에서 감상</p></li> */}
				<p>{detailAmount.content}</p>
			</ul>
			<div className="moneybottom">
				<div>
					<a className="moneybottoma" href="/">
					<span className="moneybottomb">Get Started</span>
					<span className="moneybotton"></span>
					</a>
				</div>
			</div>
			<div className="moneyfotter">
				<p className="moneyfottertxt">체험 기간 이후 매월 정기결제되고 이용 약관이 적용됩니다. Premium을 이미 이용해 봤다면 참여할 수 없습니다.</p>
			</div>
		</div>
	</div>
</div>
    )
}

export default Amount;