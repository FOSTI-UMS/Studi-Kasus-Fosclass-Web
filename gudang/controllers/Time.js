function getWaktu(){
    return new Date()
}

function kirimwaktu(req,res) {
    res.render('waktu.ejs',{waktu:getWaktu()})
}

module.exports = {getWaktu,kirimwaktu}