module.exports = (app, repository) => {
  const rabbitMQ = require("../RabbitMQ/consumer");
  rabbitMQ.receive();

  app.get("/assessmentCorrected", async (req, res, next) => {
    const assessmentCorrected = await repository.getAllAssessmentCorrected();
    res.json(assessmentCorrected);
  });

  app.get("/assessmentCorrected/:id", async (req, res, next) => {
    const assessmentCorrected = await repository.getassessmentCorrectedById(
      req.params.id
    );
    if (!assessmentCorrected) return res.sendStatus(404);

    res.json(assessmentCorrected);
  });

  app.post("/assessmentCorrected", async (req, res, next) => {
    const title = req.body.title;
    const student = req.body.student;
    const course = req.body.course;
    const date = new Date();

    const result = await repository.addAssessmentCorrected({
      title,
      student,
      course,
      date,
    });

    res.status(201).json(result);
  });
};
