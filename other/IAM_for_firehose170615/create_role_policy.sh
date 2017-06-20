#!/bin/bash

# note, ran the below 2 lines on 6/15/2017
# aws iam create-role --role-name firehose_delivery_role_jmtroy2cli --assume-role-policy-document file://firehose-policy.json
# aws iam put-role-policy --role-name firehose_delivery_role_jmtroy2cli --policy-name firehose-s3-rw --policy-document file://s3-rw-policy.json

# note, run the below to update the policy on 6/16/2017

aws iam put-role-policy --role-name firehose_delivery_role_jmtroy2cli --policy-name firehose-s3-rw --policy-document file://s3-rw-policy.json
