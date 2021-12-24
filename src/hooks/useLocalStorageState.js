import { useState, useEffect } from "react";

function useLocalStorageState(key,defaultVal) {
  // make piece of state, based on a value in Local Storage or default
   const [state, setState] = useState(() => {
       let val;
       try {
          val=JSON.parse(
              window.localStorage.getItem(key) || String(defaultVal)
              );
       }
       catch(e) {
            val= defaultVal
       }
       return val;
   });

  // use UseEffect to update Local Storage when State Changes

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
    }, [state]);

    return [state,setState]

}

export default useLocalStorageState;