
package org.elasticsearch.query_dsl.abstractions.query;

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
import org.elasticsearch.internal.*;

public class Query  implements XContentable<Query> {
  
  static final ParseField BOOST = new ParseField("boost");
  private Double _boost;
  public Double getBoost() { return this._boost; }
  public Query setBoost(Double val) { this._boost = val; return this; }


  static final ParseField CONDITIONLESS = new ParseField("conditionless");
  private Boolean _conditionless;
  public Boolean getConditionless() { return this._conditionless; }
  public Query setConditionless(Boolean val) { this._conditionless = val; return this; }


  static final ParseField IS_STRICT = new ParseField("is_strict");
  private Boolean _isStrict;
  public Boolean getIsStrict() { return this._isStrict; }
  public Query setIsStrict(Boolean val) { this._isStrict = val; return this; }


  static final ParseField IS_VERBATIM = new ParseField("is_verbatim");
  private Boolean _isVerbatim;
  public Boolean getIsVerbatim() { return this._isVerbatim; }
  public Query setIsVerbatim(Boolean val) { this._isVerbatim = val; return this; }


  static final ParseField IS_WRITABLE = new ParseField("is_writable");
  private Boolean _isWritable;
  public Boolean getIsWritable() { return this._isWritable; }
  public Query setIsWritable(Boolean val) { this._isWritable = val; return this; }


  static final ParseField NAME = new ParseField("_name");
  private String _name;
  public String getName() { return this._name; }
  public Query setName(String val) { this._name = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_boost != null) {
      builder.field(BOOST.getPreferredName(), _boost);
    }
    if (_conditionless != null) {
      builder.field(CONDITIONLESS.getPreferredName(), _conditionless);
    }
    if (_isStrict != null) {
      builder.field(IS_STRICT.getPreferredName(), _isStrict);
    }
    if (_isVerbatim != null) {
      builder.field(IS_VERBATIM.getPreferredName(), _isVerbatim);
    }
    if (_isWritable != null) {
      builder.field(IS_WRITABLE.getPreferredName(), _isWritable);
    }
    if (_name != null) {
      builder.field(NAME.getPreferredName(), _name);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public Query fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return Query.PARSER.apply(parser, null);
  }

  public static final ObjectParser<Query, Void> PARSER =
    new ObjectParser<>(Query.class.getName(), false, Query::new);

  static {
    PARSER.declareDouble(Query::setBoost, BOOST);
    PARSER.declareBoolean(Query::setConditionless, CONDITIONLESS);
    PARSER.declareBoolean(Query::setIsStrict, IS_STRICT);
    PARSER.declareBoolean(Query::setIsVerbatim, IS_VERBATIM);
    PARSER.declareBoolean(Query::setIsWritable, IS_WRITABLE);
    PARSER.declareString(Query::setName, NAME);
  }

}
