 
 import db from "../database";


 async function createUser(username,email,passwordHash){
    try{
        const res = await db.query(
            `INSERT INTO users(username,email,passwordHash)
             VALUES($1,$2,$3)
             `,
            [username, email, passwordHash]            
        );
    }catch(err){
        console.log("error while creating user",err.message);
    }
 }

 //get by email

 async function getUserByEmail(email){
    try{
        const res = await db.query(
            `SELECT * FROM users WHERE email = $1`,[email]
        );
    }catch(err){
        console.log("error while getting user by email",err.message)
    }
 }
 //get by id
 async function getUserById(id){
    try{
        const res = await db.query(
            `SELECT * FROM users WHERE id = $1`,[id]
        );
    }catch(err){
        console.log("error while getting user by id",err.message)
    }
 }
 //get all users
 export async function getAllUsers() {
    try {
        const res = await db.query(`SELECT * FROM users`);
        return res.rows;
    } catch (err) {
        console.error("Error in getAllUsers:", err.message);
        throw err;
    }
}

 export default { createUser, getUserById, getAllUsers }