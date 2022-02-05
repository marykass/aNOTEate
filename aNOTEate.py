from flask import Flask, request, render_template, Markup
from gensim.summarization.summarizer import summarize
from gensim.summarization import keywords


app = Flask(__name__)
@app.route('/')
def home():
    return render_template('homePage.html')

if __name__ == '__main__':
    app.run(debug=True)

@app.route("/onenote-demo")
def onenote_demo():
    token = get_token(app_config.SCOPE)
    one_notes = requests.get(  # Use token to call downstream service
        'https://graph.microsoft.com/v1.0/me/onenote/pages',
        headers={'Authorization': 'Bearer ' + token['access_token']},
    ).json()        
    return render_template('homePage.html', result=one_notes)

@app.route('/transcriptProcessing/', methods=["POST"])
def my_form_post():
    inputtext = request.form['transcript'].rstrip("\n")
    keyPhrases = summarize(inputtext, split=True, ratio=0.5)
    #print(summarize(text1, split=True, ratio=0.5))

    #for sentence in keyPhrases:
    #    print(sentence)
    return render_template('homePage.html', text = "Here are the key phrases... ", output = keyPhrases)
