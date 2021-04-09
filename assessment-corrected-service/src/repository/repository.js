//repository.js
const database = require("../config/database");
const { ObjectId } = require("mongodb");

async function getAllAssessmentCorrected() {
  const db = await database.connect();
  return db.collection("assessmentCorrected").find().toArray();
}

async function getAllAssessmentCorrectedById(id) {
  const db = await database.connect();
  return db.collection("assessmentCorrected").findOne({ _id: new ObjectId(id) });
}

async function addAssessmentCorrected(assessment) {
  const db = await database.connect();
  const result = await db.collection("assessmentCorrected").insertOne(assessment);
  return result.ops[0];
}

module.exports = { getAllAssessmentCorrected, getAllAssessmentCorrectedById, addAssessmentCorrected };
