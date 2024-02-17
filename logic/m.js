// // BUBBLE STORING //


// // function quickSort( arr,  left,  right)
// // {
// //     let i = left
// //     let j = right ;
// //     let  tmp;
// //     let pivot = arr[(right + left)/2] 


// //     /* التقسيم */ 
// //     while (i <= j) {
// //         while (arr[i] < pivot)
// //             i++;
        
// //         while (arr[j] > pivot)
// //             j--;
        
// //         if (i <= j) {
// //             tmp = arr[i];
// //             arr[i] = arr[j];
// //             arr[j] = tmp;
// //             i++;
// //             j--;
// //             console.log(arrs)
// //         }
// //     }
// // /* االستدعاء الذاتي */
// //     if (left < j){
// //         quickSort(arr, left, j);
// //     }
// //     if (i < right){
// //         quickSort(arr, i, right);
// //     }
    
// // }

// // quickSort( arrs,   0,  20)


// //bubble sorting
// // for(let i = 0 ; i< arr.length ; i++){
// //     for(let j= 0 ; j< arr.length ; j++){
// //         if(arr[j]> arr[j +1]){
// //             let temp = arr[j];
// //             arr[j] = arr[j+1];
// //             arr[j + 1] = temp;
// //         }
// //     }
// // };
// // console.log(arr)


// // INSERTION SORT ترتيب الحشر //
// // for(i = 1 ; i<arr.length ;i++){
// //     let index = arr[i]; let j = i;
// //     while( j > 0 && arr[j-1] > index ){
// //         arr[j] = arr[j - 1];
// //         j--;
// //     }
// //     arr[j] = index ; 
// // }
// // console.log(arr);


// // EXAMPLE 2 IN TRE BUBBLE SORT
// // const arofOb = [
// //     {id: 1},
// //     {id: 4},
// //     {id: 6},
// //     {id: 22},
// //     {id: 22},
// //     {id: 0},
// //     {id: 3},
// // ]

// // for (let i=0 ; i<arofOb.length ; i++){
// //     for(let j=0 ; j<arofOb.length  -1; j++){
// //         let id = arofOb[j].id
// //         let ID = arofOb[j +1].id
// //         if(id > ID ){
// //             let temp = arofOb[j];
// //             arofOb[j] = arofOb[j +1] ;
// //             arofOb[j+1] = temp;
// //         }
// //     }
// // }
// // console.log(arofOb)



// // SELECTION SORT //

// // for (let i = 0 ; i < arr.length; i++)
// // {
    
// // let min = i;
// // for (let j = i+1 ; j < arr.length ; j++){
// //     if (arr [ j ] < arr [min]) {
// //         min = j ;
// //         let temp = arr[ i ];
// //         arr [ i ] = arr [min];
// //         arr [min] = temp;
// //         console.log(arr)

// //     }

// // }



// // } 

// // console.log(arr)

// // MARGE SORT

// // function marge(arr =[] , l ,m,r){


// //     let i,j,k;

// //     let n1= m;
// //     let n2 =r-m;    

// //     let L = [n1] ; let R = [n2]
// //     for(i = 0 ; i<n1 ; i++){
// //         L[i] = arr[l + i]
// //     }
// //     for(j = 0 ; j<n2 ; j++){
// //         R[j] = arr[m + l +j];
// //     }

// //     i= 0 ;
// //     j = 0; 
// //     k= 1;

// //     while (i < n1 && j < n2) {
// //         if(L[i] <= R[j])
// //         {
// //             arr[k] = L[i];
// //             i++;
// //         }
// //         else
// //         {
// //             arr[k] = R[j];
// //             j++;
// //         }
// //         k++;
// //     }


// //     while (i < n1) {
// //         arr[k] = L[i];

// //         i++;
// //         k++;

// //     }

// //     while (j <n2) {
// //         arr[k] = R[j];

// //         j++;
// //         k++;
// //     }
// //     return R
// // }

// // function margeSort(arr = [], l ,r)
// // {
// //     if (l<r) {
// //         let m = l+(r-l)/2;

// //         margeSort(arr, l, m);
// //         margeSort(arr, m+1, r);
// //         marge(arr, l, m, r);
// //     }
// // }


// ///

// // for ( increment = (arrs.length)/2;increment > 0 ; increment /= 2)
// // {
// //     console.log(increment)
// //  for(i = increment; i<arrs.length ; i++)
// //  {
// //  temp = arrs[i];
// //  for(j = i; j >= increment ;j-=increment)
// //  {
// //  //perform the insertion sort for this section
// //  if (temp < arrs[j-increment])
// //  {
// //  arrs[j] = arrs[j-increment];
// //  }
// //  else
// //  {
// //  break;
// //  }
// //  }
// //  arrs[j] = temp;
// //  }
// // }

// // console.log(arrs)


// const arrs = [57 ,70, 97, 38, 63, 21 ,85 ,68 ,76,9 ,81 ,36,55,79,74,85,16,61, 77 , 49, 24 ];

// // todos //
// // selction sort
// // merge sort
// // todos //

// // linear search algorithm //

// function linearSearch(value , target){
//     for(let i = 0 ; i< value.length ; i++){
//         if(value[i] === target){
//             return i;
//         }
//     }
//     return -1

// }

// // console.log(linearSearch(arrs , 200))


// function findIndex(values ,target){
//    return binarySearch(values ,target ,0, 8)

// }

// function binarySearch(values , target, start ,end)
// {
//     if(start > end){
//         // console.log(start)
//         return console.log(-1) 
//     };

//     let middle = ((start + end) / 2).toFixed();

//     let value = values[middle];


//     if(value > target){
//         return console.log(binarySearch(values , target ,start , middle-1));
//     };


//     if(value < target)
//     {        
//         // return console.log(binarySearch(values , target ,middle+1 , end));
//     }

//     return console.log(middle);
// }
// // findIndex(arrs , 38)
// // console.log(findIndex(arrs , 57))


// for (let i=0 ; i<arrs.length ; i++){
//     for(let j=0 ; j<arrs.length ; j++){
//         if(arrs[j] > arrs[j+1]){
//             let temp = arrs[j];
//             arrs[j] = arrs[j +1];
//             arrs[j +1] =temp;
//         }
//     }
// }

// console.log(arrs)



// // interpolation search   _____________ الحث بالايستيفاء //

// function findAT(arr , bottom , top , item){

//     let mid; 

//     while(bottom <= top)
//     {
//          mid = (bottom + (top - bottom) * (item - arr[bottom]) / (arr[top] - arr[bottom])).toFixed();
//         console.log(mid)

//         if(item == arr[Number(mid)]){
        
//           return Number(mid) ;
//         }
//         if(item < arr[Number(mid)]){
        
//             top = Number(mid) -1;
//         }
//         else {
        
//             bottom = Number(mid) +1;
//         }
//     }
//     return -1
// }
// // console.log(arrs[findAT (arrs , 0 ,20 , 97)])


// // jump search //

// function jumpSearch(arr ,target){

//     let jump = Math.round(Math.sqrt(arr.length));
//     // console.log(jump)

//     while(jump <= arr.length - 1){
//         if(arr[jump] === target)
//         {
//             return console.log(arr[jump])
//         }
    
//         if(arr[jump] > target){
//             // var temp = jump
//             jump = jump + jump;
    
//             // console.log(temp)
//         }
//         if(arr[jump] < target){
//            var temp = jump - jump
//             for(let i = 0 ; i <= 5  ;i++){
//                 if(arr[i] == target){
//                     return console.log(arr[i])
//                 }else{
//                     console.log(-1)
//                 }
//             }
//         }
//     }
   
// }

// // console.log(jumpSearch(arrs , 9));
// // jumpSearch(arrs , 9)

// let key = "hello"


// function hash(){

//     let value = 0
//     for(let i = 0 ; i < arrs.length ; i++){
//         value += arrs[i];
    

//     }
//         return value%arrs.length

// }

// hash()

// console.log(hash())