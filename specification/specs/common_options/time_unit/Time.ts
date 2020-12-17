/*
 * @class_serializer  TimeFormatter
 * https://github.com/elastic/elasticsearch/blob/master/libs/core/src/main/java/org/elasticsearch/common/unit/TimeValue.java
 * Only support 0 and -1 but we have no way to encode these as constants at the moment
 */
type Time = string | integer
