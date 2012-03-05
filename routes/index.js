
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: "Walter's Home" })
};


exports.slides = function(req, res){
  res.render('slides/'+req.params.title, {layout:false})
};
