import { getData } from "../fetch/api"
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

const UsingLocalStorage = () =>{
    const {isLoading,isError,data,error,isSuccess} = useQuery<PersonProps[]>('data',getData)
    
    
    if (isLoading) {
      return <span>Loading...</span>
    }

    if (isError) {
      return <span>Error: {(error as Error).message}</span>
    }
    if (isSuccess)
    {
        localStorage.setItem('data',JSON.stringify(data));
        const info = localStorage.getItem('data');
        const local:PersonProps[] | null = info? JSON.parse(info):null;
        console.log(local);
    }
    return(
        <div>
            {data?.map(it => (
                <Person key={it.email} name={it.name} email={it.email} nickname={it.nickname} role ={it.role} mbti = {it.mbti}></Person>
            ))}
        </div>
    );
}

export default UsingLocalStorage;