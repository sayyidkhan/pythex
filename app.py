from flask import Flask, render_template, request, jsonify
import re

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/match', methods=['POST'])
def match():
    data = request.json
    regex = data['regex']
    test_string = data['testString']
    options = data['options']

    flags = 0
    if 'ignorecase' in options:
        flags |= re.IGNORECASE
    if 'multiline' in options:
        flags |= re.MULTILINE
    if 'dotall' in options:
        flags |= re.DOTALL
    if 'verbose' in options:
        flags |= re.VERBOSE

    try:
        pattern = re.compile(regex, flags)
        matches = pattern.findall(test_string)
        groups = [m.groupdict() for m in pattern.finditer(test_string) if m.groupdict()]

        return jsonify({
            'matches': matches,
            'groups': groups
        })
    except re.error as e:
        return jsonify({'error': str(e)}), 400


if __name__ == '__main__':
    app.run(debug=True)