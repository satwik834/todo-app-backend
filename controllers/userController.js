import { createUser as create } from '../models/userModel.js';
import bcrypt from 'bcrypt';

const saltRounds = 10


export async function createUser(req,res){
    const { username, email, password } = req.body;
    console.log("hello from controller",username,email,password)

    try{
        const passwordHash = await bcrypt.hash(password,saltRounds);
        const result = await(create(username,email,passwordHash));
        console.log(result);
        res.status(201).json({message: 'user registered'});
    }catch(err){
        console.log(err.message)
    }
}

export function logoutUser(req, res) {
    req.logout(err => {
      if (err) return res.status(500).send(err);
      res.json({ message: 'Logged out successfully' });
    });
  }