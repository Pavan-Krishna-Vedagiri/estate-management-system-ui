import { PagingTo } from "./PagingTo";

export interface PagedResponse<T>{

    items : T[];
    pagingTo : PagingTo;
    
}