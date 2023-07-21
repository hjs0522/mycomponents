import { getData } from "./api"
import { useQuery } from "react-query"
import { PersonProps } from "../interface"

const Person  = ({name,email,nickname,role,mbti} : PersonProps)=>{
    return(
        <div>
            <div>{name}</div>
            <div>{email}</div>
            <div>{nickname}</div>
            <div>{role}</div>
            <div>{mbti}</div>
        </div>
    )
}

const RefetchData = () =>{
    const {isLoading,isError,data,error,refetch} = useQuery<PersonProps[]>('data',getData,{
    enabled:false
    })
    
    const handleGetData = ()=>{
        refetch();
    }
    if (isLoading) {
      return <span>Loading...</span>
    }

    if (isError) {
      return <span>Error: {(error as Error).message}</span>
    }
    
    return(
        <div>
            <button onClick={handleGetData}>refetch</button>
            {data?.map(it => (
                <Person key={it.email} name={it.name} email={it.email} nickname={it.nickname} role ={it.role} mbti = {it.mbti}></Person>
            ))}
        </div>
    );
}

export default RefetchData;