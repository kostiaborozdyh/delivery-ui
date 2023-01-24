export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}

export const getPagesArray = (totalPages) =>{
    let result = []
    for (let i = 0; i < totalPages; i++) {
        result.push(i+1)
    }
    return result
}
export const getSubArrayByCurrentPageAndLimit = (arr,page,limit)=>{
    return arr.slice((page - 1) * limit, (page - 1) * limit + limit)
}
