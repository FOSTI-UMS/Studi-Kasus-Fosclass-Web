const {QueryTypes} = require('sequelize');
const sequelize = require('../database/db')


function TambahBarangBaru(nama, stock, harga, result) {
    sequelize.query(
        'INSERT INTO barang (id, nama, harga, stock) VALUES ($id, $nama, $stock, $harga)',
        {
            bind: { id: Date.now() , nama:nama, stock:stock , harga:harga},
            type: QueryTypes.INSERT
        }
    ).then(result)
}

function GetDataBarang(result) {
    sequelize.query(
        'SELECT * FROM barang',
        {
            type: QueryTypes.SELECT
        }
    ).then(result)
}

function Deletebarang(id, result) {
    sequelize.query(
        'DELETE FROM barang WHERE id = $id',
        {
            bind: {id:id},
            type: QueryTypes.DELETE
        }
    ).then(result)
}

module.exports = {
    TambahBarangBaru,
    GetDataBarang,
    Deletebarang
}