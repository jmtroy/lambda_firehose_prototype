/***
Copyright 2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

Licensed under the Amazon Software License (the "License").
You may not use this file except in compliance with the License.
A copy of the License is located at

http://aws.amazon.com/asl/

or in the "license" file accompanying this file. This file is distributed
on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied. See the License for the specific language governing
permissions and limitations under the License.
***/

'use strict';

var config = module.exports = {
 firehose : {
  DeliveryStreamName: 'twitter-delivery-stream-test-jmtroy2', /* required */
  S3DestinationConfiguration: {
    BucketARN: 'arn:aws:s3:::jmtroy2firehose', /* required if stream not exists */
    RoleARN: 'arn:aws:iam::083781070261:role/firehose_delivery_role_jmtroy2cli', /* required if stream not exists */
    BufferingHints: {
      IntervalInSeconds: 300,
      SizeInMBs: 5
    },
    CompressionFormat: 'UNCOMPRESSED', /* 'UNCOMPRESSED | GZIP | ZIP | Snappy' */
    EncryptionConfiguration: {
      NoEncryptionConfig: 'NoEncryption'
    },
    Prefix: 'twitter/raw-data/'  /* if stream not exists. example: twitter/raw-data/  */
  }
  },
  twitter: {
      consumer_key: 'VTrwsSn93T3uqVQG5aBFpWjpq',
      consumer_secret: 'ClkSGHrs4iFBfEWfPqyVyaxdyxOjezNl3l5ZdWkd8VUcDLnlYP',
      access_token: '2293315788-jXfwGHV6azz3d0wFu3KXgnBDdLu2oP6gLJWJeHT',
      access_token_secret: 'KQMnyB35T81N4UhkNPLDHGPG021YHIl8hw61zqhuihQMS'
 },
 locations: ['-127.33,23.34,-55.52,49.56'], //US   (All the world:'-180,-90,180,90; New York City:-74,40,-73,41; San Francisco:-122.75,36.8,-121.75,37.8, US:-127.33,23.34,-55.52,49.56)
 waitBetweenDescribeCallsInSeconds: 2,
 recordsToWritePerBatch: 100,
 waitBetweenPutRecordsCallsInMilliseconds: 50,
 region: 'us-east-1'   
};
