
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: "Walter's Home" })
};

exports.js = function(req, res){
  res.render('js', { title: "Javascript" })
};

exports.slides = function(req, res){
  res.render('slides/'+req.params.title, {layout:false})
};
