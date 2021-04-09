(async () => {
  const assessmentCorrected = require('./api/assessmentCorrected');
  const repository = require("./repository/repository");
  const server = require("./server/server");
  
  try {
      await server.start(assessmentCorrected, repository);
      console.log('Server is up and running at ' + process.env.PORT);
  } catch (error) {
      console.error(error);
  }
})();