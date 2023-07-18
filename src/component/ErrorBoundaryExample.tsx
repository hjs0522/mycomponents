import ErrorBoundary from "./ErrorBoundary"

const ErrorBoundaryExample  = ()=>{
    return(
        <ErrorBoundary fallback={<div>이 부분은 현재 에러가 발생했습니다</div>}>
            <div>이 코드 안에서 에러 발생 가능성 존재</div>
        </ErrorBoundary>
    );
}

export default ErrorBoundaryExample;