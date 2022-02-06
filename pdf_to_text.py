import imp
import pdfplumber
import spacy

with pdfplumber.open("pdfs/lec1.pdf") as pdf:
    text = ''.join([ page.extract_text() for page in pdf.pages ])
    print(text)

# nlp = spacy.load("en_core_web_sm")
# doc = nlp(text)
# print(doc.ents)
