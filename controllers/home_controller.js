// 1 function is controller that we do previisly in app.get(port,function())
// 2 but here it is called action and set of actions is called controller

module.exports.home=function(req,res){
  return  res.render('home',{
    title:"home",
  })
}

