import React, { useEffect,useRef,useCallback } from "react";
import { useInfiniteQuery } from "react-query";
import { PersonProps } from "../interface";
import { getPageData } from "./api";

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

const InfinityScroll = ()=>{
    const observerElem = useRef(null);
    const {isLoading,isError,data,error,isSuccess,hasNextPage,fetchNextPage,isFetchingNextPage} = useInfiniteQuery<PersonProps[]>('data',({pageParam = 1})=>getPageData(pageParam),
    {
        getNextPageParam: (lastPage,allPages)=>{
            const nextPage = allPages.length +1
            return nextPage
        }
    })
    
    const handleObserver = useCallback((entries:IntersectionObserverEntry[]) => {
        const [target] = entries
        if(target.isIntersecting) {
          fetchNextPage()
        }
    }, [fetchNextPage, hasNextPage])
      
    useEffect(() => {
      const element = observerElem.current
      if (!element){
        return;
      }
      const option = { threshold: 0 }

      const observer = new IntersectionObserver(handleObserver, option);
      observer.observe(element)
      return () => observer.unobserve(element)
    }, [fetchNextPage, hasNextPage, handleObserver])
    
    useEffect(() => {
        let fetching = false;
        const handleScroll = async (e:any) => {
          const {scrollHeight, scrollTop, clientHeight} = e.target.scrollingElement;
          if(!fetching && scrollHeight - scrollTop <= clientHeight * 1.2) {
            fetching = true
            if(hasNextPage) await fetchNextPage()
            fetching = false
          }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
          document.removeEventListener('scroll', handleScroll)
        }
    }, [fetchNextPage, hasNextPage])
    
    if (isLoading) {
      return <span>Loading...</span>
    }

    if (isError) {
      return <span>Error: {(error as Error).message}</span>
    }
    return(
        <div>
            {isSuccess&& data.pages.map(page=>
                page.map((it)=>(
                    <Person name={it.name} email={it.email} nickname={it.nickname} role ={it.role} mbti = {it.mbti}></Person>
                ))
            )}
            <div className={"loader"} ref={observerElem}>
                {isFetchingNextPage && hasNextPage ? 'Loading':'No search left'}
            </div>
        </div>
    );
}

export default InfinityScroll;