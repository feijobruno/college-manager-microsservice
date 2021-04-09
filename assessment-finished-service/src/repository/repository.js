const database = require("../config/database");
const { ObjectId } = require("mongodb");

async function getAllAssessmentFinished() {
  const db = await database.connect();
  return db.collection("assessmentFinished").find().toArray();
}

async function getAssessmentFinishedById(id) {
  const db = await database.connect();
  return db.collection("assessmentFinished").findOne({ _id: new ObjectId(id) });
}

async function addAssessmentFinished(assessement) {
  const db = await database.connect();
  const result = await db.collection("assessmentFinished").insertOne(assessement);
  return result.ops[0];
}

module.exports = {
  getAllAssessmentFinished,
  getAssessmentFinishedById,
  addAssessmentFinished
};
