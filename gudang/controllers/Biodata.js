function kirimBiodata(req,res) {
    res.render('biodata.ejs',{Nama:'Maruf Fiardy',NIM:'L200200254',prodi:'Informatika',univ:'UMS'})
}

module.exports = {kirimBiodata}