const ytdl = require("ytdl-core");
const fs = require("fs");

const DownloadVideo = async (req, res) => {
    try{

        const { url } = req.body;

        const info = await ytdl.getBasicInfo(url);
        console.log(info.videoDetails.thumbnails[0].url);

        const title = info.videoDetails.title + " by " + info.videoDetails.author.name + "-" + new Date().getTime().toString();

        ytdl(url)
            .pipe(fs.createWriteStream(`${process.cwd()}/downloads/${title}.mp4`))
            .on("finish", async () => {
        
                const file = `${process.cwd()}/downloads/${title}.mp4`;

                res.json({
                    info: file,
                    succes: true
                });
        
                // const video = new Video({
                //     title,
                //     file,
                //     thumbnail,
                // });
        
                // await video.save();
        
                // done();
        
                // resolve({ title });
            })

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