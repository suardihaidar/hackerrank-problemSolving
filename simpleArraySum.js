function simpleArraySum(ar) {
    /*
     * Write your code here.
     */

    /* answer 1 */
    // if (toString.call(ar) !== "[object Array]")
    //     return false;

    // var total = 0;
    // for (var i = 0; i < ar.length; i++) {
    //     if (isNaN(ar[i])) {
    //         continue;
    //     }
    //     total += Number(ar[i]);
    // }
    // return total;

    /* answer 2 */
    function getSum(num1, num2) {
        return num1 + num2
    }
    return ar.reduce(getSum)

    /* answer 3 */
    var num = 0
    for (let i = 0; i < ar.length; i++) {
        num += ar[i]
    }
    return num
}