const db = require('../../config/connection');
const COLLECTION = require('../../config/collections');
const ObjectId = require('mongodb').ObjectId;



//function to register new user
const registerUserDB =async(user) =>{

    try {
        // userSchema()
       const data = await db.get().collection(COLLECTION['USERS']).insertOne(user);
        return{
            success:true,
            id:data.ops[0]._id,
            message:'User registerd Successfully'
        }
    } catch (error) {
        console.log(error)
        return {
            success:false,
            message:'Something went Wrong'
        }
    }
 
}

//function to get a user by email id
const getSingleUserByEmailDB =async(email) =>{

    try {
       const user =  await db.get().collection(COLLECTION['USERS']).findOne({email:email})
        return{
            success:true,
            message:'User fetched Successfully',
            data:user
        }
    } catch (error) {
        return {
            success:false,
            message:'Something went Wrong'
        }
    }
 
}

//function to update a user by id
const updateUserByIdDB =async(id,data) =>{

    try {
       await db.get().collection(COLLECTION['USERS']).updateOne({_id:new ObjectId(id)},{$set:data});
        return{
            success:true,
            message:'User updated Successfully',
        }
    } catch (error) {
        return {
            success:false,
            message:'Something went Wrong'
        }
    }
 
}

module.exports = {
    registerUserDB,
    getSingleUserByEmailDB,
    updateUserByIdDB
}