# Regex Matcher Web Application

This web application is a clone of pythex.org, providing a user-friendly interface for testing and exploring regular expressions in Python. Users can input a regex pattern, a test string, and see matching results in real-time.

## Features

- Input field for regex patterns
- Text area for test strings
- Options for regex flags (IGNORECASE, MULTILINE, DOTALL, VERBOSE)
- Real-time matching results
- Display of captured groups

## Technologies Used

- Frontend: HTML, CSS, JavaScript
- Backend: Python with Flask framework

## Project Structure

```
regex-matcher/
│
├── templates/
│   └── index.html
│
├── static/
│   ├── style.css
│   └── script.js
│
├── app.py
└── README.md
```

## Installation

1. Ensure you have Python 3.7+ installed on your system.

2. Clone this repository:
   ```
   git clone https://github.com/yourusername/regex-matcher.git
   cd regex-matcher
   ```

3. (Optional) Create and activate a virtual environment:
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   ```

4. Install the required packages:
   ```
   pip install flask
   ```

## Running the Application

1. From the project root directory, run:
   ```
   python app.py
   ```

2. Open a web browser and navigate to `http://localhost:5000`

## Usage

1. Enter your regular expression in the "Your regular expression" input field.
2. (Optional) Select any regex flags you want to apply (IGNORECASE, MULTILINE, DOTALL, VERBOSE).
3. Enter your test string in the "Your test string" text area.
4. Click the "Match" button to see the results.
5. The matching results and any captured groups will be displayed below.

## Contributing

Contributions to improve the application are welcome. Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Inspired by [pythex.org](https://pythex.org)
- Built with [Flask](https://flask.palletsprojects.com/)

## Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/regex-matcher](https://github.com/yourusername/regex-matcher)