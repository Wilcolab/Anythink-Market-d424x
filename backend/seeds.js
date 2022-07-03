require("dotenv").config();
const mongoose = require("mongoose");
require("./models/User");
require("./models/Item");
require("./models/Comment");
const Item = mongoose.model("Item");
const Comment = mongoose.model("Comment");
const User = mongoose.model("User");

mongoose.connect(process.env.MONGODB_URI);

const importData = async ()=>{
	try{
		await deleteData()
		for(let start = 0; start <100; start++){
			let user = await User.create({
				username: `user${start}`,
				email:`user${start}@user.com`
			})
			let item = await Item.create({
				title: `item${start}`,
				description: `item${start} Ipsum eiusmod duis adipisicing cupidatat elit consequat anim non amet officia. Culpa non laboris et Lorem nisi aute. Ullamco minim et proident cupidatat sint sunt nisi veniam consectetur culpa sint`,
				seller: user
			  })
			  
			  await Comment.create({
				seller: user,
				item,
				body: `Comment${start}  Excepteur enim nisi aute duis aliquip ut duis aute reprehenderit aliquip ea. Sunt excepteur officia labore cupidatat deserunt pariatur elit velit magna dolor incididunt mollit cillum adipisicing. Proident anim velit id ipsum ea.`
			  })
		}
		console.log('Data Imported...')
		process.exit()
	}catch(err){
		console.log(err)
	}
	
}

const deleteData = async() =>{
	try {
		await User.deleteMany({})
		await Item.deleteMany({})
		await Comment.deleteMany({})
		console.log('Data destroyed...')
	} catch (error) {
		console.log(error)
	}  
}

importData()