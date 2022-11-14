import  pool from '../configs/connectDB';
let getHomepage = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM users');

    return res.render('index.ejs', { dataUser: rows, test: 'abc string test' })
}

//tạo đường dẫn Detail User
let getDetailPage = async (req, res) => {
    let userId = req.params.Id;
    let [user] = await pool.execute(`select * from users where id = ?`, [userId]);
    return res.send(JSON.stringify(user))
}

module.exports = {
    getHomepage, getDetailPage}