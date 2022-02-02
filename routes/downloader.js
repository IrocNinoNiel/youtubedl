const router = require("express").Router();

const { DownloadVideo } = require("../utils/DownloaderController");

// Get the Weather of a particular country
router.post("/download",async (req, res) => {
    await DownloadVideo(req, res);
});


module.exports = router;