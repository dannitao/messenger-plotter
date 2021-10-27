how to
======
0. download your messages in low quality, json format from https://www.facebook.com/dyi
1. install nodejs and python
2. create a virtualenv and activate it
    - python3 -m venv
    - . venv/bin/activate
3. run `pip install -r requirements.txt`
4. create a folder called ts

5. run `find . | grep json | node people.js '<your fb name>'`
6. run `python analysis-culm.py ts/*` (or pick only some particular files)
7. try the other python scripts
