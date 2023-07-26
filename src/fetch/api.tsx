import { sleep } from "react-query/types/core/utils";
import { PersonProps } from "../utils/interface";

export const getData = async ():Promise<PersonProps[]>=>{
    const res = await fetch(`http://localhost:3000/api/data.json`);
    const data = await res.json()
    return data
}

/* 클라이언트 사이드 자바스크립트는 로컬파일에 대한 변경 권한이 없다. 그렇기에 실제로 사용할 때는
http://localhost:3000/api/data.json이 아닌 서버의 실제 주소를 입력하여 사용해야 한다
*/
export const postData = async (data: PersonProps): Promise<Response> => {
    const response = await fetch('http://localhost:3000/api/data.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

export const getPageData = async (page:number):Promise<PersonProps[]>=>{
    const res = await fetch(`http://localhost:3000/api/data${page}.json`);
    const data = await res.json()
    return data
}