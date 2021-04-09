(async () => {
  const assessmentFinished = require('./api/assessmentFinished');
  const repository = require("./repository/repository");
  const server = require("./server/server");
  
  try {
      await server.start(assessmentFinished, repository);
      console.log('Server is up and running at ' + process.env.PORT);
  } catch (error) {
      console.error(error);
  }
})();