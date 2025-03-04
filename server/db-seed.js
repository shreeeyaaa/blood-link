// const colors = require('colors');
// const dotenv = require('dotenv');
// const User = require('./models/User');
// const BloodRequest = require('./models/BloodRequest');
// const Notification = require('./models/Notification');
// const Rating = require('./models/Rating');

// // Config
// dotenv.config({ path: './config/config.env' });
// const connectDB = require('./config/db')();

// // 123456 is Hashed
// const password = '$2y$10$g1uK3U9fkeyq0G348s7PF.rvLDo/1mAzW08Pkl24a0GSfhsjyDMw6';

// const init = async () => {
//   try {
//     switch (process.argv[2]) {
//       case '--seed':
//         // Create User One
//         const userOne = await User.create({
//           name: 'User One',
//           email: 'user.one@mail.com',
//           phone: '1234567890',
//           password,
//           bloodType: 'B Positive (B+)',
//           address: '1275 Connecticut St San Francisco 94107 United States',
//           locationCoordinates: {
//             type: 'Point',
//             coordinates: [-122.395975, 37.7501383]
//           }
//         });

//         // Create User Two
//         await User.create({
//           name: 'User Two',
//           email: 'user.two@mail.com',
//           phone: '1432567890',
//           password,
//           bloodType: 'A Positive (A+)',
//           address: '1275 Connecticut St San Francisco 94107 United States',
//           locationCoordinates: {
//             type: 'Point',
//             coordinates: [-123.395975, 38.7501383]
//           }
//         });

//         // Create Blood Request from User One
//         await BloodRequest.create({
//           patientName: 'Patient One',
//           age: '25',
//           bloodType: 'O Negative (O-)',
//           status: 'active',
//           location: '1275 Connecticut St  San Francisco 94107 United States',
//           locationCoordinates: {
//             type: 'Point',
//             coordinates: [-122.395975, 37.7501383]
//           },
//           contactNumber: '1432567890',
//           unitsRequired: 2,
//           timeUntil: new Date(Date.now() + 3600 * 1000 * 24), // Next 24 Hours
//           notes: 'Sample Note',
//           createdBy: userOne.id
//         });

//         console.log('Seeded Successful'.green);
//         break;
//       case '--clean':
//         await User.deleteMany({});
//         await BloodRequest.deleteMany({});
//         await Notification.deleteMany({});
//         await Rating.deleteMany({});
//         console.log('Clean Successful'.green);
//         break;
//       default:
//         console.log('Unrecognized Command'.yellow);
//         break;
//     }
//   } catch (err) {
//     console.log(err);
//   } finally {
//     process.exit(0);
//   }
// };

// init();


// const colors = require('colors');
// const dotenv = require('dotenv');
// const User = require('./models/User');
// const BloodRequest = require('./models/BloodRequest');
// const Notification = require('./models/Notification');
// const Rating = require('./models/Rating');

// // Config
// dotenv.config({ path: './config/config.env' });
// const connectDB = require('./config/db')();

// // 123456 is Hashed
// const password = '$2y$10$g1uK3U9fkeyq0G348s7PF.rvLDo/1mAzW08Pkl24a0GSfhsjyDMw6';
// // const password = '$2y$10$g1uK3U9fkeyq0G348s7PF.rvLDo/1mAzW08Pkl24a0GSfhsjyDMw6';


// const init = async () => {
//   try {
//     switch (process.argv[2]) {
//       case '--seed':
//         // Create User Shalu
//         const shalu = await User.create({
//           name: 'Shalu Shrestha',
//           email: 'shalu.shrestha@mail.com',
//           phone: '9812345678',
//           password,
//           bloodType: 'B Positive (B+)',
//           address: 'Putalisadak, Kathmandu, Nepal',
//           locationCoordinates: {
//             type: 'Point',
//             coordinates: [85.3240, 27.7172] // Kathmandu, Nepal
//           }
//         });

//         // Create User Simran
//         const simran = await User.create({
//           name: 'Simran Karki',
//           email: 'simran.karki@mail.com',
//           phone: '9801234567',
//           password,
//           bloodType: 'A Positive (A+)',
//           address: 'Lakeside, Pokhara, Nepal',
//           locationCoordinates: {
//             type: 'Point',
//             coordinates: [83.9856, 28.2096] // Pokhara, Nepal
//           }
//         });

//         // Create Blood Request from Shalu
//         await BloodRequest.create({
//           patientName: 'Ram Bahadur',
//           age: '30',
//           bloodType: 'O Negative (O-)',
//           status: 'active',
//           location: 'Putalisadak, Kathmandu, Nepal',
//           locationCoordinates: {
//             type: 'Point',
//             coordinates: [85.3240, 27.7172]
//           },
//           contactNumber: '9801234567',
//           unitsRequired: 3,
//           timeUntil: new Date(Date.now() + 3600 * 1000 * 24), // Next 24 Hours
//           notes: 'Urgent requirement',
//           createdBy: shalu.id
//         });

//         console.log('Seeded Successfully'.green);
//         break;
//       case '--clean':
//         await User.deleteMany({});
//         await BloodRequest.deleteMany({});
//         await Notification.deleteMany({});
//         await Rating.deleteMany({});
//         console.log('Cleaned Successfully'.green);
//         break;
//       default:
//         console.log('Unrecognized Command'.yellow);
//         break;
//     }
//   } catch (err) {
//     console.log(err);
//   } finally {
//     process.exit(0);
//   }
// };

// init();




const colors = require('colors');
const dotenv = require('dotenv');
const User = require('./models/User');
const BloodRequest = require('./models/BloodRequest');

// Load environment variables
dotenv.config({ path: './config/config.env' });

// Connect to Database
const connectDB = require('./config/db');
connectDB();

// Existing User Data
// const userId = '67c67e71af8ab1bffa1b09b4'; 
// Sadhana's User ID
const userId = '67c6bc40e43f3743237921fb'; // Shreya's 



const init = async () => {
  try {
    switch (process.argv[2]) {
      case '--seed':
        // Create Blood Request for Sadhana
        await BloodRequest.create({
          patientName: 'Susmita Khatri',
          age: 35,
          bloodType: 'A Positive (A+)',
          status: 'active',
          location: 'Patan Hospital, Pulchowk',
          locationCoordinates: {
            type: 'Point',
            coordinates: [83.3173, 23.6723], // Example coordinates for Pulchowk
          },
          contactNumber: '9801237867',
          unitsRequired: 3,
          timeUntil: new Date(Date.now() + 3600 * 1000 * 24), // Next 24 Hours
          notes: 'Urgent requirement for surgery',
          createdBy: userId,
        });

        console.log('✅ Blood Request Seeded Successfully!'.green);
        break;

      case '--clean':
        await BloodRequest.deleteMany({ createdBy: userId });
        console.log('🗑️ Blood Requests Cleaned Successfully!'.yellow);
        break;

      default:
        console.log('❌ Unrecognized Command'.red);
        break;
    }
  } catch (err) {
    console.error(err);
  } finally {
    process.exit(0);
  }
};

init();
