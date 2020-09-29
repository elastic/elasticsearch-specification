
package org.elasticsearch.x_pack.info.x_pack_usage;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.x_pack.info.x_pack_usage.*;

public class SqlUsage extends XPackUsage implements XContentable<SqlUsage> {
  
  static final ParseField FEATURES = new ParseField("features");
  private NamedContainer<String, Integer> _features;
  public NamedContainer<String, Integer> getFeatures() { return this._features; }
  public SqlUsage setFeatures(NamedContainer<String, Integer> val) { this._features = val; return this; }

  static final ParseField QUERIES = new ParseField("queries");
  private NamedContainer<String, QueryUsage> _queries;
  public NamedContainer<String, QueryUsage> getQueries() { return this._queries; }
  public SqlUsage setQueries(NamedContainer<String, QueryUsage> val) { this._queries = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_features != null) {
      builder.field(FEATURES.getPreferredName());
      _features.toXContent(builder, params);
    }
    if (_queries != null) {
      builder.field(QUERIES.getPreferredName());
      _queries.toXContent(builder, params);
    }
  }

  @Override
  public SqlUsage fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SqlUsage.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SqlUsage, Void> PARSER =
    new ObjectParser<>(SqlUsage.class.getName(), false, SqlUsage::new);

  static {
    PARSER.declareObject(SqlUsage::setFeatures, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> int.PARSER.apply(pp, null)), FEATURES);
    PARSER.declareObject(SqlUsage::setQueries, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> QueryUsage.PARSER.apply(pp, null)), QUERIES);
  }

}
