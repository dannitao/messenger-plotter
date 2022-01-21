# how to
0. download your messages in low quality, json format ( https://www.facebook.com/dyi ), and save them into a single folder "facebook-messages" (make sure no sub-folders' names have a space them)
1. install nodejs and python
2. create a virtualenv and activate it
    ```
    python3 -m venv venv
    . venv/bin/activate
    ```
3. run `pip install -r requirements.txt`
4. delete images/stickers/video/files they're useless
    `find ./facebook-messages -type f -not -name '*.json' -delete`
    `find . | egrep '\.(jpg|png|gif|mp4)$' | xargs rm`
6. create a folder called ts
7. run `find . | grep json | node people.js '<your fb display name>'`
8. if that doesn't work, run `find . -not -path "./venv/*" | egrep '\.json$' | xargs node people.js '<your fb display name>'`
9. run `python analysis-culm.py ts/*` (or pick only some particular files)
10. try the other python scripts

pip install matplotlib
pip install numpy

## analysis time
- `find . -size 500k | xargs python analysis-culm.py`
- `-size +$((500*1024))c -size -$((1024*1024))c` == `-size +500k -size -1M`
- `find ts -size +1M | xargs python analysis.py`

## scripts
- analysis-average.py `outputs a running average like a wam calculator`
- analysis-culm.py `cumulative graph, keeps adding onto prev day`
- analysis-total.py
- analysis.py `day by day`

## more info
- DM's only
- _me means sent
- _not means received
