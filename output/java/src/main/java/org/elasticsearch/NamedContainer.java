package org.elasticsearch;

import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.ToXContent;
import org.elasticsearch.common.xcontent.XContentBuilder;
import org.elasticsearch.common.xcontent.XContentParseException;
import org.elasticsearch.common.xcontent.XContentParser;

import java.io.IOException;
import java.util.HashMap;
import java.util.function.Function;
import java.util.function.Supplier;

public class NamedContainer<K, V> extends HashMap<K, V> implements XContentable<NamedContainer<K, V>> {

  private final Function<String, Supplier<K>> keySupplier;
  private final CheckedFunction<XContentParser, V, IOException> valueParser;

  public NamedContainer(
    Function<String, Supplier<K>> keySupplier,
    CheckedFunction<XContentParser, V, IOException> valueParser
  ) {
    this.keySupplier = keySupplier;
    this.valueParser = valueParser;
  }


  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return null;
  }

  @Override
  public NamedContainer<K, V> fromXContent(XContentParser parser) throws IOException, XContentParseException {
    XContentParser.Token token = parser.currentToken();
    if (token == null) {
      token = parser.nextToken();
    }
    if (token == XContentParser.Token.START_OBJECT) {
      token = parser.nextToken();
    }
    for (; token == XContentParser.Token.FIELD_NAME; token = parser.nextToken()) {
      // Must point to field name
      String fieldName = parser.currentName();
      K key = keySupplier.apply(fieldName).get();
      // And then the value...
      parser.nextToken();
      V value = valueParser.apply(parser);
      this.put(key, value);
    }
    return this;
  }
}
