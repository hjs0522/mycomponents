const REST_API_KEY = "";
const url = ''
const KAKAO_REDIRECT_URI = `${url}/oauth/callback/kakao`;

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}`;