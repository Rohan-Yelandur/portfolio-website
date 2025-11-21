# Rohan Yelandur's Portfolio


## Setup Instructions

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up the Gemini API key for the chatbot:**
   
   a. Create a `.env` file in the `frontend` folder:
   ```bash
   copy .env.example .env
   ```
   
   b. Get a Gemini API key:
   - Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
   - Create a new API key
   - Copy the key
   
   c. Edit `.env` and add your API key:
   ```
   REACT_APP_GEMINI_API_KEY=your_actual_api_key_here
   ```

4. **Customize the chatbot context:**
   
   Edit `frontend/public/context.txt` with your personal information:
   - Add details about yourself, your skills, experience, projects, etc.
   - This information will be used by the chatbot to answer questions

5. **Start the development server:**
   ```bash
   npm start
   ```

The website will run on `http://localhost:3000`