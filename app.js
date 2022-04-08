function blockSpecialChar(e) {
    var k;
    document.all ? k = e.keyCode : k = e.which;
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
}
Filevalidation = () => {
    const fi = document.getElementById('file');
    if (fi.files.length > 0) {
        for (const i = 0; i <= fi.files.length - 1; i++) {

            const fsize = fi.files.item(i).size;
            const file = Math.round((fsize / 1024));
        
            if (file >= 1096) {
                document.getElementById('size').innerHTML = '<b>'
                + file + '</b> KB';
                alert(
                  "File too Big, please select a file less than 1mb");
            } else {
                document.getElementById('size').innerHTML = '<b>'
                + file + '</b> KB';
            }
        }
    }   
}


function onlyNumberKey(evt) {
          
    
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}
