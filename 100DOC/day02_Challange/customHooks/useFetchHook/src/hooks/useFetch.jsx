import {useEffect, useState } from "react";

export function useFetch(url){
      const [finalData, setFinalData] = useState({});

      async function getdetails(){
            const resp = await fetch(url);
            const json = await resp.json();
            setFinalData(json);
      };
      useEffect(()=> {
            getdetails();
      },[url])

      return {
            finalData
      }

}