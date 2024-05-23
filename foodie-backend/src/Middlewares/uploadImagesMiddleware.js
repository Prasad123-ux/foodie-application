const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');
dotenv.config();
const multer = require('multer');
const fs = require('fs');
const util = require('util');
const unlinkFile = util.promisify(fs.unlink);

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadImageMiddleware = async (req, res, next) => {
    try {
        const images = req.body.images;

        // Check if images exist in request
        if (!images || Object.keys(images).length === 0) {
            return res.status(400).json({ success: false, message: "No images provided" });
        }

        // Upload each image to Cloudinary
        for (const fieldName of Object.keys(images)) {
            const file = images[fieldName];

            // Save the file temporarily to the server
            const storage = multer.diskStorage({
                destination: function (req, file, cb) {
                    cb(null, 'upload/');
                },
                filename: function (req, file, cb) {
                    const uniqueSuffix = Date.now() + "_" + Math.floor(Math.random() * 1000 + 1);
                    cb(null, uniqueSuffix + "_" + file.originalname);
                }
            });

            const upload = multer({ storage: storage }).single(fieldName);

            upload(req, res, async function (err) {
                if (err) {
                    console.error("Error saving file:", err);
                    return res.status(500).json({ success: false, message: "Failed to save file" });
                }

                try {
                    // Upload the file to Cloudinary
                    const result = await cloudinary.uploader.upload(req.file.path);

                    // Assuming you want to store the Cloudinary URL in req.uploadedImages object
                    if (!req.uploadedImages) {
                        req.uploadedImages = {};
                    }
                    req.uploadedImages[fieldName] = result.secure_url;

                    // Delete the file from the server
                    await unlinkFile(req.file.path);
                } catch (cloudinaryError) {
                    console.error("Error uploading image to Cloudinary:", cloudinaryError);
                    return res.status(500).json({ success: false, message: "Failed to upload image to Cloudinary" });
                }
            });
        }

        next(); // Proceed to the next middleware
    } catch (error) {
        console.error("Error processing images:", error);
        res.status(500).json({ success: false, message: "Failed to process images" });
    }
};

module.exports = { uploadImageMiddleware };
