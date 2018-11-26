const defaultState = {
    searchFocus: false
};

export default (state = defaultState, action) => {
    if (action.type === 'search_focus') {
        return {
            searchFocus: true
        }
    }
    if (action.type === 'search_blur') {
        return {
            searchFocus: false
        }
    }
    return state;
}
