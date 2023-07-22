import React, { useEffect, useState } from "react"
import { useQuery } from "react-query"
import {debounce}from 'lodash'
interface NameProps{
    it:string;
    className:string;
    onClick: React.MouseEventHandler<HTMLElement>;
}

const getKeyword = async(keyword:string):Promise<string[]> =>{
    const API_END_POINT = 'url주소 입력'
    const res = await fetch(`${API_END_POINT}/languages?keyword=${keyword}`)
    const data = await res.json()
    return data;
}


const Name = ({it,className,onClick}:NameProps)=>{
    return(
        <li  onClick={onClick} className={className}>{it}</li>
    );
}

const SearchInput = ()=>{
    const [keyword,setKeyword] = useState('');
    const [selectedIndex,setSelectedIndex] = useState(0);
    const [selectItem,setSelectItem] = useState('')
    const {isLoading,isError,data,error,refetch,isSuccess} = useQuery<string[]>('keyword',()=>getKeyword(keyword),{
    enabled:false
    })
        
    const handleOnChange = debounce((event:React.ChangeEvent)=>{
        setKeyword((event.target as HTMLInputElement).value)
    },500)
    const lastIndex = isSuccess? data.length  - 1:0;
    const navigationKeys = ['ArrowUp','ArrowDown']
    const handleKeyup = (e:React.KeyboardEvent)=>{
        if (navigationKeys.includes(e.key)){
            if (e.key==='ArrowUp'){
                setSelectedIndex(selectedIndex === 0 ? lastIndex:selectedIndex-1);
            }else if(e.key === 'ArrowDown'){
                setSelectedIndex(selectedIndex === lastIndex ? 0:selectedIndex+1);
            }
        }else if (e.key === 'Enter'){
            if (isSuccess){
                setSelectItem(data[selectedIndex])
            }
        }
    }
    
    const handleClick = (index:number) => (e:React.MouseEvent)=>{
        setSelectedIndex(index)
        if (isSuccess){
            setSelectItem(data[index])
        }
    }
    
    useEffect(()=>{
        if (keyword!==''){
            refetch()
        }
    },[keyword,refetch])
    
    useEffect(()=>{
        if (selectItem!==''){
            alert(selectItem)
        }
    },[selectItem])
        
    return(
        <div onKeyUp={handleKeyup}>
            <input placeholder="입력해주세요" onChange={handleOnChange} autoFocus ></input>
            <div>
                {isLoading&&<span>Loading...</span>}
                {isError&&<span>Error: {(error as Error).message}</span>}
                {isSuccess && data.map((it,index)=>(
                    <Name onClick={handleClick(index)} key={index} it={it} className={`${index===selectedIndex? 'Suggestion__item--selected':''}`}></Name>
                ))}
            </div>
        </div>
    );
}

export default SearchInput;