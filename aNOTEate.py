from flask import Flask, request, render_template, Markup
from gensim.summarization.summarizer import summarize
from gensim.summarization import keywords
import re


app = Flask(__name__)
@app.route('/')
def home():
    return render_template('homePage.html')

@app.route('/transcriptProcessing/', methods=["POST"])
def my_form_post():
    inputtext = request.form['transcript'].replace("\n", " ")
    inputtext = inputtext.replace("\r", " ")
    #inputtext = re.sub(r'[^\w\s]', '', str(inputtext))
    #inputtext = request.form['transcript']
    keyPhrases = summarize(inputtext, split=True, ratio=0.1)
    #print(summarize(text1, split=True, ratio=0.5))

    #for sentence in keyPhrases:
    #    print(sentence)
    return render_template('homePage.html', text = "Here are the key phrases... ", output = keyPhrases)

if __name__ == '__main__':
    app.run(debug=True)