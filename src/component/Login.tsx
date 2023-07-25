import { KAKAO_AUTH_URL } from "../OAuth";

const Login = ()=>{
    return(
        <div>
            <a href={KAKAO_AUTH_URL}>
                <img src="img/kakao.png" alt="kakao"></img>
            </a>
        </div>
    )
}

export default Login;