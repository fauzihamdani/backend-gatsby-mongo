const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
   try {
      await mongoose.connect(db, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
      });
      console.log('MongoBD Connected');
   } catch (err) {
      console.log(err.message);
      process.exit(1);
   }
};

module.exports = connectDB;

/**
 * 
 * const connectDB = () => {
	mongoose
		.connect(db, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true,
		})
		.then(() => {
			console.log('Mongodb Connected');
		})
		.catch(err => console.log(err));
};
 */
