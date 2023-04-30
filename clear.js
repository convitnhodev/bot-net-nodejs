// import fs from 'fs';
const fs =require('fs');
// import path from 'path';
const path =require('path');
function getDirectories(pathg) {
    return fs.readdirSync(pathg).filter(function (file) {
        return (fs.statSync(pathg + '/' + file).isDirectory());
    });
}
const deleteFolderRecursive = function (directoryPath) {
    if (fs.existsSync(directoryPath)) {
        fs.readdirSync(directoryPath).forEach((file, index) => {
            const curPath = path.join(directoryPath, file);
            if (fs.lstatSync(curPath).isDirectory()) {
                // recurse
                deleteFolderRecursive(curPath);
            } else {
                // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(directoryPath);
    }
};
function readFiles(dirname, onFileContent, onError) {
    fs.readdir(dirname, function(err, filenames) {
        if (err) {
            console.log(err)
            return;
        }
        filenames.forEach(function(filename) {
          // console.log(filename);
          if(filename==='.markdown'||filename==='LICENSE'||filename==='license'||filename==='docs'||filename==='example'||filename==='test'||filename==='samples'|| filename.indexOf('.d.ts')>-1||filename.indexOf('.txt')>-1||filename.indexOf('.md')>-1){
              try{
                  fs.unlinkSync(path.join(dirname,filename),()=>{})

              }catch (e){

              }
              try{
                  deleteFolderRecursive(path.join(dirname,filename),()=>{})

              }catch (e){

              }
          }
        });
    });
}
const alls = getDirectories(path.join(__dirname,'node_modules'));
// console.log(JSON.stringify(alls.map(item=>'./node_modules/'+item+'/**/')));
alls.forEach((folder)=>{
    readFiles(path.join(__dirname,'node_modules',folder))
})
try {
    fs.unlinkSync(path.join(__dirname,'node_modules','win32crypt','build','Release','win32crypt.node.bak'),()=>{})

}catch (e){

}
// fs.unlinkSync(path.join(__dirname,'node_modules','axios','dist','axios.min.map'),()=>{})
