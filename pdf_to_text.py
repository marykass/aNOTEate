import pdfplumber

with pdfplumber.open("pdfs/lec2.pdf") as pdf:
    text = ''.join([ page.extract_text() for page in pdf.pages ])
    print(text)
