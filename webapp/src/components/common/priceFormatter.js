export function formatCurrency(number, currency, country){
    var formatter = new Intl.NumberFormat(
        country, {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 2
    });

    return formatter.format(number);
}