
// 1. Find all the topics and tasks which are thought in the month of October

// Answer:
db.zen.find({
    $and: [
        { topic_data: { $gte: new Date("2023-10-01"), $lte: new Date("2023-10-31") } },
        { tasks_date: { $gte: new Date("2023-10-01"), $lte: new Date("2023-10-31") } }
    ]
  },
  {
    topics: 1,
    tasks: 1
  }).toArray();
   
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2.Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

//Answer:
db.zen.find({ 
        company_drive: { $gte: new Date("2020-10-15"), $lte: new Date("2020-10-31") }
  },
  {
    company_drive: 1
  }).toArray();

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------

//3.Find all the company drives and students who are appeared for the placement.

//Answer:
db.zen.aggregate([
    {
      $match: { appeared: true }
    },
    {
      $lookup: {
        from: "students",
        localField: "company_drive",
        foreignField: "company_drive",
        as: "students"
      }
    },
    {
      $project: {
        _id: 0,
        company_drive: 1,
        students: 1
      }
    }
  ]).toArray();
  



Find the number of problems solved by the user in codekata
Find all the mentors with who has the mentee's count more than 15
Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020