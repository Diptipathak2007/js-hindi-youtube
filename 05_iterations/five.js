const coding=["js","ruby","cpp","python","java"];
// coding.forEach( function (item){
//     console.log(item);
    
// })

// coding.forEach((item)=>{
//     console.log(item);
// })

// function printme(item) {
//     console.log(item);
    
// }
// coding.forEach(printme);

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})
const mycoding=[
    {
        languagename:"javascript",
        languagefilename:"js",
    },
    {
        languagename:"java",
        languagefilename:"java",
    },
    {
        languagename:"python",
        languagefilename:"py",
    },
]

mycoding.forEach((item)=>{
    
    console.log(item.languagename);

})