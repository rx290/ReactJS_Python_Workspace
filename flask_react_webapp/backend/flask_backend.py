from flask import Flask

app = Flask(__name__)


# Blogs
@app.route("/blogs")
def blogs():
    blog1={"id":1,"title": "Blog 1","subtitle":"This is a test sample 1","author":"Anonymous","blog":"This is a blog.\n"}
    blog2={"id":2,"title": "Blog 2","subtitle":"This is a test sample 2","author":"Anonymous","blog":"This is a blog2.\n"}
    blog3={"id":3,"title": "Blog 3","subtitle":"This is a test sample 3","author":"Anonymous","blog":"This is a blog3.\n"}
    return{"blogs":[blog1,blog2,blog3]}

if __name__=="__main__":
    app.run(debug=True)
    
    
