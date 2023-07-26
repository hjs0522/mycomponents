import { getData } from "./api"
import { useQuery } from "react-query"
import { PersonProps } from "../utils/interface"

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

const GetData = () =>{
    const {isLoading,isError,data,error} = useQuery<PersonProps[]>('data',getData)
    
    
    if (isLoading) {
      return <span>Loading...</span>
    }

    if (isError) {
      return <span>Error: {(error as Error).message}</span>
    }
    
    return(
        <div>
            {data?.map(it => (
                <Person key={it.email} name={it.name} email={it.email} nickname={it.nickname} role ={it.role} mbti = {it.mbti}></Person>
            ))}
        </div>
    );
}

export default GetData;