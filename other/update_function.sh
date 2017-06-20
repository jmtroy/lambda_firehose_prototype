#!/bin/bash

# PUT /2015-03-31/functions/arn:aws:lambda:us-east-1:083781070261:function:s3-twitter-to-es-python/code HTTP/1.1
# Content-type: application/json
# 
# {
#    "DryRun": TRUE,
#    "Publish": FALSE,
# #   "S3Bucket": "string",
# #   "S3Key": "string",
# #   "S3ObjectVersion": "string",
#    "ZipFile": my-s3-twitter-to-es-python.zip
# }


aws lambda update-function-code --function-name s3-twitter-to-es-python --zip-file fileb://my-s3-twitter-to-es-python.zip