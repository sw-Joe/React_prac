// type State = { count: number };
// type Action = { type: 'INCREASE' } | { type: 'DECREASE' } | { type: 'RESET' };

export function counterReducer(count: number, action: {type: string}) {
    switch (action.type) {
        case 'INCREASE':
            return count + 1 ;
        case 'DECREASE':
            return count - 1 ;
        case 'RESET':
            return 0 ;
        default:
            return count;
    }
}