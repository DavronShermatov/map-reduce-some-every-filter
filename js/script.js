'use strict'

//Map method -- Bu massivni o'rgartirib yangi massiv qaytaradi

const  car = ['laDa', 'MerC', 'BmW']

 const rescar = car.map((item)=> item.toLowerCase() )
 console.log(rescar)

// Filter method -- Bu massivni filter qilib beradi

 let book = [11, 22, 33, 12, 32, 15]
 book= book.filter((item)=>item>=16)
 console.log(book)


 // Some/Every -- bular Some berilgan massivda qiymatini shartga ko'ra to'g'ri bo'lsa n<=1 true qaytaradi
 // Every massivdagi hamma elementi shartga to'g'ri kelsa tru qaytaradi aks xolda false qaytaradi

 const arr = [1, 2, 'lada', true]
 console.log(arr.some((item)=>typeof item ==='number'))
 console.log(arr.every((item)=>typeof item ==='number'))


 //Reduce method -- Mu massivdagi qiymatlar yig'indisini xisoblab beradi

 // oxiridagi Nol bu boshlang'ich sum qiymati

 const N = [11,22,33,44]

 const Summ = N.reduce((sum, current)=>sum+current, 0)
 console.log(Summ)