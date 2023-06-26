const mongoose = require("mongoose");

const dbConnection = async () => {
  try {

    await mongoose.connect(process.env.MONGODB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('database connected...')

    return mongoose.connection;
    
  } catch (error) {
    console.log(error)
    throw new Error('Database connection error')
  }
};

module.exports = {
    dbConnection
}
