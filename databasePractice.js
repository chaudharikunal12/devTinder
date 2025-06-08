const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url= "mongodb+srv://chaudharikunal314:QHJYBqHW4EnDpHkX@kunalnode.tqnzz3i.mongodb.net/"
const client = new MongoClient(url);

// Database Name
const dbName = 'User';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('User');

  // the following code examples can be pasted here...

  // insert one document
//   const insertResult = await collection.insertOne({
//     name: 'John Doe',
//     age: 30,
//     address: {
//       street: '123 Main St',
//       city: 'New York',
//       state: 'NY',
//       zip: 10001
//     }
//   });
//   console.log(`Inserted document with ID: ${insertResult.insertedId}`);

  // Update a single document
//   const updateResult = await collection.updateOne(
//     { name: 'John Doe' },
//     { $set: { age: 31 } }
//   );
//   console.log(`Updated ${updateResult.modifiedCount} documents`);

  // Delete a single document
  const deleteResult = await collection.deleteOne({ name: 'John Doe' });
  console.log(`Deleted ${deleteResult.deletedCount} documents`);

  return 'done.';
}


main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());


