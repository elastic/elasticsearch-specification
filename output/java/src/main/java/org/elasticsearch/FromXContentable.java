package org.elasticsearch;

import org.elasticsearch.common.xcontent.XContentParseException;
import org.elasticsearch.common.xcontent.XContentParser;

import java.io.IOException;

public interface FromXContentable<T> {

  T fromXContent(XContentParser parser) throws IOException, XContentParseException;
}
