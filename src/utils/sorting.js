export const sortDirectionsList = (condition,directions) =>{
        switch (condition){
            case 'MinPrice' : return [...directions].sort((a,b)=>a.price-b.price)
            case 'MaxPrice' : return [...directions].sort((a,b)=>b.price-a.price)
            case 'MinCityFrom' : return [...directions].sort((a,b)=>a.cityFrom.localeCompare(b.cityFrom))
            case 'MaxCityFrom' : return [...directions].sort((a,b)=>b.cityFrom.localeCompare(a.cityFrom))
            case 'MinCityTo' : return [...directions].sort((a,b)=>a.cityTo.localeCompare(b.cityTo))
            case 'MaxCityTo' : return [...directions].sort((a,b)=>b.cityTo.localeCompare(a.cityTo))
            default : return [...directions]
        }
}