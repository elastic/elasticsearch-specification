package org.elasticsearch;

import org.elasticsearch.common.xcontent.ToXContent;
import org.elasticsearch.common.xcontent.XContentBuilder;
import org.elasticsearch.common.xcontent.XContentParseException;
import org.elasticsearch.common.xcontent.XContentParser;

import java.io.IOException;

public class SingleKeyDictionary<T extends XContentable<T>> {
  private String key;
  private T value;

  public SingleKeyDictionary(String key, T value) {
    this.key = key;
    this.value = value;
  }

  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    builder.field(key, value);
    builder.endObject();
    return builder;
  }

  SingleKeyDictionary<T> fromXContent(XContentParser parser) throws IOException, XContentParseException {
    // FIXME: need a parser for the value type at the type definition site
    return null;
  }
}
