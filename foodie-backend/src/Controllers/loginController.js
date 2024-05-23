const { Food } = require("../Modules/users");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const loginController = (req, res) => {
    const { email, password } = req.body;

    Food.findOne({ email: email }).exec()
        .then((user) => {
            if (user !== null) {
                // // const hash_password = user.password;
                console.log(user);

                bcrypt.compare(req.body.password, user.password, (err, result) => {
                    console.log(password);
                    // console.log(hash_password);
                    if (err) {
                        console.log("Error comparing passwords:", err);
                        res.status(500).json({ success:false, message: "Internal server error" });
                    } else {
                        console.log("Password comparison result:", result);
                        if (result) {
                            const token = jwt.sign({ userId: user._id, email:user.email, role:user.role }, process.env.JWT_TOKEN, { expiresIn: '30d' });
                            res.status(200).json({ success:true, message: "Logged in successfully", token: token, expireTime:'1m', role:'user' });
                        } else {
                            res.status(401).json({ success:false, message: "Incorrect password" });
                        }
                    }
                });
            } else {
                // User not found
                res.status(404).json({ success:false, message: "User not found" });
            }
        })
        .catch((error) => {
            console.error("Error logging in:", error);
            res.status(500).json({ success:false, message: "Internal server error" });
        });
};

module.exports = { loginController };
