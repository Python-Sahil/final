export function formatCurrency(priceCents){
    return(priceCents/100).toFixed(2);// this ensures the Currency is shown in two decimal
}