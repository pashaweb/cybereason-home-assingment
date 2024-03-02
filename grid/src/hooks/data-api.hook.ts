import { User } from "@/types";
import { useEffect, useReducer } from "react";

type State = {
    data: User[];
    loading: boolean;
    error: string | null;
};

type Action = {
    type: 'FETCH' | 'FETCH_SUCCESS' | 'FETCH_ERROR';
    payload: any;
};

const reduser = (state: State, action: Action) => {
    switch (action.type) {
        case 'FETCH':
            return { ...state, loading: true , error: null};
        case 'FETCH_SUCCESS':
            return { ...state, loading: false, data: action.payload , error: null};
        case 'FETCH_ERROR':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}  
 

export const useDataApiHook = (initialUrl: string, initialData: any): State => {
    const [state, dispach] = useReducer(reduser, {
        data: initialData,
        loading: false,
        error: null
    });

    useEffect(() => {
        let didCancel = false;
        const fetchData = async () => {
            dispach({ type: 'FETCH' , payload: null});
            try {
                const response = await fetch(initialUrl);
                console.log(response.status);
                if(!response.ok){
                    dispach({ type: 'FETCH_ERROR', payload: 'Network response was not ok'});
                   return
                }
                const data = await response.json();
                if (!didCancel) {
                    dispach({ type: 'FETCH_SUCCESS', payload: data });
                }
            } catch (error) {
                if (!didCancel) {
                    dispach({ type: 'FETCH_ERROR', payload: error });
                }
            }
        };
        fetchData();
        return () => {
            didCancel = true;
        };
    }, [initialUrl]);

    return state;
};
