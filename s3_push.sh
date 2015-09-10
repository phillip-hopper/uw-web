#!/bin/bash
# -*- coding: utf8 -*-
#
#  Copyright (c) 2015 unfoldingWord
#  http://creativecommons.org/licenses/MIT/
#  See LICENSE file for details.
#
#  Contributors:
#  Jesse Griffin <jesse@distantshores.org>

SRC="/var/www/vhosts/bible.unfoldingword.org/app/"
BKT="s3://bible.unfoldingword.org/"
EXCLUDES="/var/www/vhosts/bible.unfoldingword.org/s3_excludes"

s3cmd sync --rr -M --no-mime-magic --delete-removed \
    --exclude-from "$EXCLUDES" \
    --add-header="Cache-Control:max-age=600" \
    "$SRC" "$BKT"
