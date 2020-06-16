
package org.elasticsearch.search.explain;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.Either;
import org.elasticsearch.XContentable;
import org.elasticsearch.NamedContainer;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_abstractions.lazy_document.*;

public class InlineGet<TDocument>  implements XContentable<InlineGet<TDocument>> {
  
  static final ParseField FIELDS = new ParseField("fields");
  private NamedContainer<String, LazyDocument> _fields;
  public NamedContainer<String, LazyDocument> getFields() { return this._fields; }
  public InlineGet<TDocument> setFields(NamedContainer<String, LazyDocument> val) { this._fields = val; return this; }


  static final ParseField FOUND = new ParseField("found");
  private Boolean _found;
  public Boolean getFound() { return this._found; }
  public InlineGet<TDocument> setFound(Boolean val) { this._found = val; return this; }


  static final ParseField SOURCE = new ParseField("_source");
  private TDocument _source;
  public TDocument getSource() { return this._source; }
  public InlineGet<TDocument> setSource(TDocument val) { this._source = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_fields != null) {
      builder.field(FIELDS.getPreferredName());
      _fields.toXContent(builder, params);
    }
    if (_found != null) {
      builder.field(FOUND.getPreferredName(), _found);
    }
    if (_source != null) {
      builder.field(SOURCE.getPreferredName(), _source);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public InlineGet fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return InlineGet.PARSER.apply(parser, null);
  }

  public static final ObjectParser<InlineGet, Void> PARSER =
    new ObjectParser<>(InlineGet.class.getName(), false, InlineGet::new);

  static {
    PARSER.declareObject(InlineGet::setFields, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> LazyDocument.PARSER.apply(pp, null)), FIELDS);
    PARSER.declareBoolean(InlineGet::setFound, FOUND);
    PARSER.declareObject(InlineGet::setSource, (p, t) -> null /* TODO TDocument */, SOURCE);
  }

}
