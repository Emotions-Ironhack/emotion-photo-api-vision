const User = require("../auth/User");
const Emotion = require("./Emotion");
const visionService = require('../../config/vision');
const emotionAux = require('./emotion.aux');
const upload = require('../../config/multerService');
const pify = require('pify');

// EMOTIONS USER LIST
exports.listUserEmotions = (req, res) => {
  let userRef = req.params.userId;

  Emotion.find({
      userRef: userRef
    }).populate('userRef')
    .sort({
      created_at: -1
    })
    .exec()
    .then(list => {
      res.json(list);
    }).catch(err => {
      res.status(500).json(err);
    });
};



// EMOTION DETAIL
exports.getEmotion = (req, res) => {

  Emotion.findById(req.params.id).populate('userRef').exec()
    .then((emotion, err) => {

      if (err) return res.status(500).json(err);
      if (!emotion) return res.status(404).json(new Error("404"));

      return res.json(emotion);
    })
    .catch(err => {
      res.status(500).json(err);
    });
};



// POST to VISION API -> THEN CREATE AND SAVE EMOTION */
exports.createEmotion = (req, res) => {
  let userRef;
  let imageURL;

  pify(upload)(req, res)
    .then(function() {
      if (req.body.userRef) userRef = req.body.userRef;
      const hostName = req.get('host');
      imageURL = hostName.includes('localhost') ?
        'http://marioms.com/scarlet2.jpg' :
        `https://${hostName}/uploads/${req.file.filename}`;
      return imageURL;
    })
    .then(imgUrl => visionService(imgUrl))
    .then(objEmotion => {
      let maxEmotionObj = emotionAux.getMaxEmotion(objEmotion[0].scores);
      return new Emotion({
        userRef: userRef,
        emotions: objEmotion[0].scores,
        maxEmotion: maxEmotionObj,
        image_path: imageURL
      });
    })
    .then(newEmotion => emotionAux.saveEmotion(res, newEmotion))
    .catch(function(err) {
      console.log('errr', err);
      res.status(500).json(err.message || err);
    });
};
