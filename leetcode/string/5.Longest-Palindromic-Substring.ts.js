// Given a string s, return the longest palindromic substring in s.
//
//
//
//     Example 1:
//
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
//     Example 2:
//
// Input: s = "cbbd"
// Output: "bb"

// var longestPalindrome = function(s) {
//     if (s.length === 1) return s;
//     let result = s[0];
//     for (let right = 0; right < s.length; right++) {
//         let middleResult = s[right];
//         for (let i = right+1; i < s.length; i++) {
//             middleResult = middleResult + s[i];
//             if(isPalindrom(middleResult)){
//                 result = result.length>middleResult.length?result:middleResult;
//             }
//         }
//     }
//
//     return result;
// };
// function isPalindrom(str){
//     return str === str.split('').reverse().join('');
// }

function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return right - left - 1; // длина палиндрома
}

function longestPalindrome(s) {
    if (s.length < 1) return "";
    let start = 0, maxLength = 0;

    for (let i = 0; i < s.length; i++) {

        let len1 = expandAroundCenter(s, i, i);     // нечётная длина
        let len2 = expandAroundCenter(s, i, i + 1); // чётная длина
        let len = Math.max(len1, len2);


        if (len > maxLength) {
            maxLength = len;
            start = i - Math.floor((len - 1) / 2);
        }
    }
    return s.substring(start, start + maxLength);
}
 // console.log(longestPalindrome("ibvjkmpyzsifuxcabqqpahjdeuzaybqsrsmbfplxycsafogotliyvhxjtkrbzqxlyfwujzhkdafhebvsdhkkdbhlhmaoxmbkqiwiusngkbdhlvxdyvnjrzvxmukvdfobzlmvnbnilnsyrgoygfdzjlymhprcpxsnxpcafctikxxybcusgjwmfklkffehbvlhvxfiddznwumxosomfbgxoruoqrhezgsgidgcfzbtdftjxeahriirqgxbhicoxavquhbkaomrroghdnfkknyigsluqebaqrtcwgmlnvmxoagisdmsokeznjsnwpxygjjptvyjjkbmkxvlivinmpnpxgmmorkasebngirckqcawgevljplkkgextudqaodwqmfljljhrujoerycoojwwgtklypicgkyaboqjfivbeqdlonxeidgxsyzugkntoevwfuxovazcyayvwbcqswzhytlmtmrtwpikgacnpkbwgfmpavzyjoxughwhvlsxsgttbcyrlkaarngeoaldsdtjncivhcfsaohmdhgbwkuemcembmlwbwquxfaiukoqvzmgoeppieztdacvwngbkcxknbytvztodbfnjhbtwpjlzuajnlzfmmujhcggpdcwdquutdiubgcvnxvgspmfumeqrofewynizvynavjzkbpkuxxvkjujectdyfwygnfsukvzflcuxxzvxzravzznpxttduajhbsyiywpqunnarabcroljwcbdydagachbobkcvudkoddldaucwruobfylfhyvjuynjrosxczgjwudpxaqwnboxgxybnngxxhibesiaxkicinikzzmonftqkcudlzfzutplbycejmkpxcygsafzkgudy"))

console.log(longestPalindrome("babad"))