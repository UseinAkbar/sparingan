const Match = require("../model/Match");

exports.read = (req,res) => {
  Match.find().then(Match => {
      res.status(200).json(Match)
  })
  .catch((err) => {
      res.status(500).send({
        message: err.message || "Error Occured",
      }); 
    });
}

exports.create = (req,res) => {
  try{
      Match.find({id_user:req.body.id_user}).then(user => {
        if(user.length == 0){
          const dataMatch = new Match({
            id_user: req.body.id_user,
            sport_name: req.body.sport_name,
            match_player: req.body.match_player,
            match_description: req.body.match_description,
            match_location: req.body.match_location,
            match_date: req.body.match_date,
            match_cost: req.body.match_cost,
          });

          dataMatch.save().then(data => {
            const success = {
              data,
              meta: {
                message: "Successfully to register"
              }
            }
            res.json(success)
          }).catch((err) => {
            res.status(500).send({
              message: "Failed to registred or Please fill out all the forms",
            });
          });

        }else{
          res.status(500).send({
            message: "Email has been registred.",
          });
        }
      })
  }catch(err){
      console.log({message: err});
  }
}