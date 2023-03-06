export const basketReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return {books: state.books.concat(action.payload)};
        case 'RETURN_BOOK':
            return {books: []};
        default:
            throw new Error('No action found');
    }
}