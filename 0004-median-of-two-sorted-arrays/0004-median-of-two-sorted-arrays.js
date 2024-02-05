/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let merged_array= [...nums1,...nums2]
    var length=merged_array.length

  for(var i=0;i<merged_array.length;i++){
    for(var j=i+1;j<merged_array.length;j++){
        if(merged_array[i]>merged_array[j]){
            var temp=merged_array[i];
            merged_array[i]=merged_array[j];
            merged_array[j]=temp;
        }
    }
}
var for_odd=Math.floor(length/2);
 if(length%2!=0){
        const median=merged_array[for_odd]
        return median;
    }
    else{
        const median=(merged_array[length/2]+merged_array[(length/2)-1])/2
        return median
    }
};