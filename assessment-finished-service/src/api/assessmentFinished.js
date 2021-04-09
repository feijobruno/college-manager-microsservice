module.exports = (app, repository) => {

  const rabbitMQ = require("../RabbitMQ/producer");

    app.get("/assessmentFinished", async (req, res, next) => {
      const assessmentFinished = await repository.getAllAssessmentFinished();
      res.json(assessmentFinished);
    });
  
    app.get("/assessmentFinished/:id", async (req, res, next) => {
      const assessmentFinished = await repository.getAssessmentFinishedById(
        req.params.id
      );
      if (!assessmentFinished) return res.sendStatus(404);
  
      res.json(assessmentFinished);
    });
  
    app.post("/assessmentFinished", async (req, res, next) => {
      const idAssesment = req.body.idAssesment;
      const student = req.body.student;
      const course = req.body.course;
      const grade = parseInt(req.body.grade);
      const date = new Date();
  
      const result = await repository.addAssessmentFinished({
        idAssesment,
        student,
        course,
        grade,
        date,
      });
  
      rabbitMQ.send(JSON.stringify(result));
      res.status(201).json(result);
    });
  };
  