
package org.elasticsearch.x_pack.transform;

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
import org.elasticsearch.common_abstractions.infer.indices.*;
import org.elasticsearch.query_dsl.abstractions.container.*;

public class TransformSource  implements XContentable<TransformSource> {
  
  static final ParseField INDEX = new ParseField("index");
  private Indices _index;
  public Indices getIndex() { return this._index; }
  public TransformSource setIndex(Indices val) { this._index = val; return this; }


  static final ParseField QUERY = new ParseField("query");
  private QueryContainer _query;
  public QueryContainer getQuery() { return this._query; }
  public TransformSource setQuery(QueryContainer val) { this._query = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_index != null) {
      builder.field(INDEX.getPreferredName());
      _index.toXContent(builder, params);
    }
    if (_query != null) {
      builder.field(QUERY.getPreferredName());
      _query.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public TransformSource fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TransformSource.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TransformSource, Void> PARSER =
    new ObjectParser<>(TransformSource.class.getName(), false, TransformSource::new);

  static {
    PARSER.declareObject(TransformSource::setIndex, (p, t) -> Indices.createFrom(p), INDEX);
    PARSER.declareObject(TransformSource::setQuery, (p, t) -> QueryContainer.PARSER.apply(p, t), QUERY);
  }

}
