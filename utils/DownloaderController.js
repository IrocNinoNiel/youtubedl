const ytdl = require("ytdl-core");
const fs = require("fs");

const DownloadVideo = async (req, res) => {
    try{

        const { url } = req.body;

        ytdl(url)
            .pipe(fs.createWriteStream('video.mp4'));

        
        res.json({
            info: 'Video Downloaded Succesfully',
            succes: true
        });
        
    } catch(error){
        console.log(error);
        return res.status(500).json({
            message: error.message,
            success: false
        });
    }
}

module.exports = {
    DownloadVideo
}