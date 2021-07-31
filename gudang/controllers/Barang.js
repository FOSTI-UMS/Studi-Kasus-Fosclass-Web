
const BarangModel = require('../models/Barang')

function TambahBarangView(req, res) {
    res.render('tambahbarang.ejs')
}

function TambahBarang(req, res) {

    //insert ke database melalui model
    BarangModel.TambahBarangBaru(
        req.body['nama-barang'],
        req.body['stock-barang'],
        req.body['harga-barang'],
        function(){
            res.redirect('/databarang')
        }
    )

}

function DataBarangView(req, res) {
    BarangModel.GetDataBarang(function(data){
        res.render('databarang.ejs', {barang: data})
    })
    
}

function HapusBarang(req, res) {
    let idb = req.params.id
    BarangModel.Deletebarang(idb, function(){
        res.redirect('/databarang')
    })
}

module.exports = {
    TambahBarangView,
    TambahBarang,
    DataBarangView,
    HapusBarang
}