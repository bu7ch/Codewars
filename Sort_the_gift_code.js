function sortGiftCode(code) {
    var i, len=code.length, output=[], obj={};

    for (i=0;i<len;i++) {
        obj[code[i]]=0;
    }
    for (i in obj) {
        output.push(i);
    }
    code = output.sort();
    code = output.join("");
    return code;
}
