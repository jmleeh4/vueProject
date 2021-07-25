// "from axios" 는 package 에 dependencies 에 있는 라이브러리를 들고오는 것이다.
import axios from "axios";


//기본적인 기능을 간단하게 쓰려고 모아놓는 곳

// 1. HTTP Request & Response 와 관련된 기본 설정
const config = {
    baseUrlBefore: "https://api.hnpwa.com/v0/",
    baseUrlAfter: "/1.json"
};

//--------------------------------------------------------------------axios------------------------------------------------------------------
//---- 설명
//정의 : axios 란 Promise API 를 활용한 Http 비동기 통신 라이브러리이다. 다시말해 ajax 같은 것이다.
//반환 : Promise 라는 객체를 반환한다.
//설치방법 : 터미널에서 'npm i axios' 를 사용해서 다운받는다.
//----사용방법
//axios.get('url') --> 입력한 url에 존재하는 자원(data)를 요청하여 받아온다. 값이나 상태는 바꿀 수 없다.
//axios.post('url', {data객체}) -->  본문으로 보낼 데이터를 설정한 객체를 전달 ex)) 로그인 회원가입 등 사용자가 생성한 파일을 서버에다가 업로드할때(DB)
//axios.delete('url') --> 데이터베이스의 내용을 삭제하는 것을 목적으로 둠
//axios.put('url',data[, config]) --> 데이터베이스의 내용을 갱신(수정?) 하는것을 목적으로 둠
//then -> 응답성공
//catch -> 응답 실패
//2번째 then -> 항상 실행
//async await : 비동기 시 동기는 먼저 가버림으로 이것을 방지하기 위해 await(해당 function이 끝날때 까지 기다려라)를 쓰기위한 기능
//
//---------------------------------------------------------------------------------------------------------------------------------------------
function fetchList(select) {
    //엑시오스는 엑시오스만 바라보기 때문에 view도 안바라보고 function도 안바라본다.
    //view같은 경우 객체를 만들어서 추가하거나 function은 함수에 대한 리턴처리를 해줘야한다.
    return axios.get(config.baseUrlBefore + select + config.baseUrlAfter)
        //화살표함수 => view단의 this와 같아진다..원래는 axios 때문에 undefined가 뜬다
        //response 에 대한 함수를 실행한다.. response에 대한 속성 또한 사용가능
        .then(response => { 
            return response.data;
        })
        .catch(error => {
            console.log(error);
        })
}
// 2. API 함수들을 정리
// function fetchNewsList(select) {
//     return axios.get(config.baseUrl + select + config.baseUrlAfter); 
//     //return axios.get(`${config.baseUrl}selct/1.json`); 또다른 형식임
// }

function fetchUserInfo(name) {
    return axios.get("https://api.hnpwa.com/v0/user/" + name + ".json")
            .then(response => {
                return response.data
            })
            .catch(error => {
                console.log(error)
            })
}

function fetchitem(id) {
    return axios.get("https://api.hnpwa.com/v0/item/" + id + ".json")
            .then(response => {
                return response.data
            })
            .catch(error => {
                console.log(error)
            })
}


// 4. 기능을 쓰기위해선 export를 해줘야 한다.
// -- export default 는 1개만 내보내며, export 는 여러개를 내보낼 수 있다.
// -- 만약 export default 를 쓴다면 import 할 때 "import 이름 from './vue'"
// -- 만약 export{}를 쓴다면 import 할 때 "import {이름} from './vue'"
export {
    fetchList,
    fetchUserInfo,
    fetchitem
}
