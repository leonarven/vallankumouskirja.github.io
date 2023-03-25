#!/bin/python3

import json, os, time

BASE_HREF = "https://vallankumouskirja.fi/#!/index/";

output = ""

with open( 'src/songs/dist/index.json', 'r') as f:
    index = json.loads( f.read() )

for key in index:
    url     = ""

    loc     = BASE_HREF + key
    lastmod = None

    if 'song_file' in index[key]:
        song_file = 'docs/songs/dist/' + index[key]['song_file']

        if os.path.isfile( song_file):
            lastmod = time.strftime( '%Y-%m-%d', time.localtime( os.path.getmtime( song_file )))

    if loc is not None:     url += f'<loc>{ loc }</loc>'
    if lastmod is not None: url += f'<lastmod>{ lastmod }</lastmod>'

    if len( url ) >= 0: output += f'<url>{ url }</url>'

output = f'<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">{ output }</urlset>'

with open( 'src/sitemap-songs.xml', 'w') as f:
    f.write( output );
