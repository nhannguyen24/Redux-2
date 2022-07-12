export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const DIVIDE = 'DIVIDE';
export const DOUBLE = 'DOUBLE';
 
export function fc_increment(){
    return{
        type:'INCREMENT'
       
    }
}
 
export function fc_decrement(){
    return {
        type:'DECREMENT'
    }
}

export function fc_divide(){
    return {
        type:'DIVIDE'
    }
}

export function fc_double(){
    return {
        type:'DOUBLE'
    }
}
