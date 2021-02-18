module.exports = async (mongoose, uri, options) => {
  mongoose.connect(uri, options);

  mongoose.connection.once('connected', () => {
    console.log('[node-mongoose-models] Mongoose connected');
  });

  mongoose.connection.once('error', (err) => {
    console.log('[node-mongoose-models] Mongoose error: ', err);
    throw err;
  });

  mongoose.connection.once('disconnected', () => {
    console.log('[node-mongoose-models] Mongoose disconnected');
  });

  process.once('SIGINT', () => mongoose.connection.close(() => {
    console.error('[node-mongoose-models] Mongoose disconnected');
    process.exit(0);
  }));
};
