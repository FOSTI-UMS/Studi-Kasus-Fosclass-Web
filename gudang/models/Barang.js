const {QueryTypes} = require('sequelize');
const sequelize = require('../database/db')

function Tambahbarangbaru(id, nama,qty,harga,result){
    sequelize.query(
        'INSERT INTO barang (id, nama, stock, harga) VALUES ($id, $nama, $stock, $harga)',
        {
            bind: { id:id, nama:nama, stock:qty, harga:harga },
            type: QueryTypes.INSERT
        }
    ).then(result)
}

function GetDataBarang(result) {
    sequelize.query(
        "SELECT * FROM barang",
        {type: QueryTypes.SELECT}
    ).then(result)
}

function HapusBarangById(id, result) {
    sequelize.query(
        "DELETE FROM barang WHERE id = $id",
        {
            bind: { id:id },
            type: QueryTypes.DELETE
        }
    ).then(result)
}

module.exports = {
    Tambahbarangbaru,
    GetDataBarang,
    HapusBarangById
}