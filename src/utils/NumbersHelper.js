export function isValidIranianNationalCode(input) {
    if (!/^\d{10}$/.test(input))
        return false;
 
    const check = +input[9];
    const sum = Array(9).fill().map((_, i) => +input[i] * (10 - i)).reduce((x, y) => x + y) % 11;
    return (sum < 2 && check == sum) || (sum >= 2 && check + sum == 11);
}
export function isValidPassportCode(input) {
    if (!/^[A-Z][0-9]{8}$/.test(input))
        return false;
    return true
}
export function moneyFormat(input) {
    return parseFloat(input / 10).toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,').split(".")[0]

}
export const getCustomFormat = (inputValue, isGregorian) => {
    if (!inputValue)
        return '';
    const inputFormat = isGregorian ? 'YYYY/M/D' : 'jYYYY/jM/jD';
    return isGregorian ? inputValue.locale('es').format(inputFormat) :
        inputValue.locale('fa').format(inputFormat);
}
export const compareTwoStringDates=(first,second)=>{
    let firstDate = parseInt(first.replace("/","").replace("/",""))
    let secondDate = parseInt(second.replace("/","").replace("/",""))
    
    if(firstDate > secondDate){
        return 1
    }else if(firstDate < secondDate){
        return -1
    }else{
        return 0
    }
}
export const checkCharacter=(char)=>{   
    let res = /^[a-zA-Z0-9]+$/.test(char);
    return res
}
export const checkNumber=(char)=>{   
    let res = /^[0-9]+$/.test(char);
    return res
}

