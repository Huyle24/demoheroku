import express from "express";
// cấu hình
const configViewEngine = (app) => {
    // cho phép truy cập thư mục public--> mã nguồn mở
    app.use(express.static('./src/public'))
    
    app.set("view engine", "ejs");
    // Tìm file ejs  ở thư mục views
    app.set("views", "./src/views")
}

// Shared functions 
export default configViewEngine;
