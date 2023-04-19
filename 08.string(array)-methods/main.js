// 1.Write a function called: 'getUpper(anyArr)' that returns the newArr with the uppercased first and last character.
const arr1 = ['guba', 'mingecevir', 'baku', 'gazag', 'gence', 'shirvan']
function cities(cityArr) {
 let newArr = cityArr.map((item)=>item[0].toLocaleUpperCase()+item.slice(1,-1)+item.at(-1).toLocaleUpperCase())
return newArr;
}
console.log(cities(arr1));


// 2.String and Array
let text = 'We are MERN-Stack developers'
// 1.Replace 'MERN Stack' with 'Front-end'.  // We are Front-end developers!
let newArr1 = text.replace('MERN-Stack','Front-end')
console.log(newArr1);
// 2.Replace all 'e' with 'a'. // wa ara marn-stack davalopars!
let newArr2 = text.replaceAll('e','a',)
console.log(newArr2);
// 3."in Microsoft!" concat to 'text'. //We are MERN-Stack developers in Microsoft!
let newArr3 = text.concat(' in Microsoft!')
console.log(newArr3);
// 4.Find index of each 'r' and collect them in a new Array called 'newArr'  //[4, 9, 26]
let newArrr = []
text.split("").map((el,index)=>el.toLocaleLowerCase()==='r' ? newArrr.push(index) : newArrr)
console.log(newArrr);
// 5.Find index of first 'r' (excepting 'are').  // 9
console.log(text.toLocaleLowerCase().indexOf('r',5));
// 6.Find out vowels in 'text' and add them to 'newArr' which contains unique values. //['e','a','o']
let vowels = ['a', 'e', 'o', 'u', 'i']
let newArrs = []
let result = text.split('').filter((el,index)=>vowels.includes(el) && ! newArrs.includes(el) && newArrs.push(el))
console.log(result)

// 3.Write a function(arrow function) called 'calcArea()' which to calculate sum region's area,
//  if region's length is equal to 6 in 'arr3'.
const arr3 = [
    {
        region: 'Yasamal',
        area: 170,
    },

    {
        region: 'Nizami',
        area: 20,
    },

    {
        region: 'Nesimi',
        area: 10,
    },

    {
        region: 'Sebail',
        area: 30,
    },
    {
        region: 'Xetai',
        area: 30,
    },
]
let newArr7 = arr3.reduce((acc,current,index)=>current.region.length===6 ? acc+=current.area : acc,0)
console.log(newArr7);
// 4.Sort 'arr4' ascending order.
const arr4 = [8, 44, 14, 2, 23, 1, 22, 34, 9, 0, 6]
console.log(arr4.sort((a,b)=>a-b))
// 5.Gather all nested array in one array.
const arr5 = [5, [8], [9, ['hi', ["don't touch me"], [0]], '9']]
console.log(arr5.flat(Infinity));
// 6.Sort array "colors" with color's length, if color's length is equal to each other sort them alphabetically.
const colors = ['green', 'blue', 'yellow', 'black', 'red', 'brown', 'white', 'gray', 'violet', 'pink']
console.log(colors.sort((a,b)=>a.length-b.length || a.localeCompare(b) )) 


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////