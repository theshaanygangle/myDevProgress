import { useRef } from "react";
import {useEffect, useState } from "react";

export function usePrev (value){
      const ref = useRef();

      useEffect(()=>{
            ref.current = value;
      },[value]);

      return ref.current;
}

