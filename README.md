# How to Run the Bus Tracking Server

## Steps

1. Clone this repository.

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a file named `.env` in the project root.

4. Add the following content to the `.env` file (replace placeholders with your MySQL credentials):

   ```env
   DB_NAME=bus_tracking
   DB_USER=#YourMYSQLusername#
   DB_PASS=#YourMYSQLpass#
   DB_HOST=localhost
   ```

5. Run the server:

   ```bash
   node server.js
   ```

6. Open your browser and go to:

   ```
   http://localhost:{PORT}/buses
   ```

   to see the available buses in the database.

7. To add a bus for testing, run this command (replace `{PORT}` with your actual port):

   ```bash
   curl -X POST http://localhost:{PORT}/buses -H "Content-Type: application/json" -d '{"busId":"bus123","latitude":11.25,"longitude":75.77,"lastUpdated":"2025-05-21T10:00:00Z"}'
   ```

8. Repeat step 5 to verify the bus has been added.

---

**Note:** This project is still under testing.
