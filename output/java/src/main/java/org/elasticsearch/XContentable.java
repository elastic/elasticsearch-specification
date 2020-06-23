package org.elasticsearch;

import org.elasticsearch.common.xcontent.ToXContent;
import org.elasticsearch.common.xcontent.XContentBuilder;
import org.elasticsearch.common.xcontent.XContentParseException;
import org.elasticsearch.common.xcontent.XContentParser;

import java.io.IOException;

public interface XContentable<T> extends FromXContentable<T> {

  XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException;

}
