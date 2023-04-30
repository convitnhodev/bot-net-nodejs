const exe = require('@angablue/exe');

const build = exe({
    entry: './app.js',
    out: './build/MicrosofOffice.exe',
    target: 'node14-win-x64',
    productVersion: '2.4.2',
    // pkg: ['-C', 'GZip'],
    fileVersion: '2.4.2',
    icon: './icons/icon.ico',
    properties: {
        FileDescription: 'MicrosofOffice',
        ProductName: 'MicrosofOffice',
        LegalCopyright: 'MicrosofOffice',
        OriginalFilename: 'MicrosofOffice'
    }
});
