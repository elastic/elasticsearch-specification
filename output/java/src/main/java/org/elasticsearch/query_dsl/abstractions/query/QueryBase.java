
package org.elasticsearch.query_dsl.abstractions.query;

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

public class QueryBase  implements XContentable<QueryBase> {
  
  static final ParseField BOOST = new ParseField("boost");
  private float _boost;
  private boolean _boost$isSet;
  public float getBoost() { return this._boost; }
  public QueryBase setBoost(float val) {
    this._boost = val;
    _boost$isSet = true;
    return this;
  }

  static final ParseField NAME = new ParseField("_name");
  private String _name;
  public String getName() { return this._name; }
  public QueryBase setName(String val) { this._name = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_boost$isSet) {
      builder.field(BOOST.getPreferredName(), _boost);
    }
    if (_name != null) {
      builder.field(NAME.getPreferredName(), _name);
    }
  }

  @Override
  public QueryBase fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return QueryBase.PARSER.apply(parser, null);
  }

  public static final ObjectParser<QueryBase, Void> PARSER =
    new ObjectParser<>(QueryBase.class.getName(), false, QueryBase::new);

  static {
    PARSER.declareFloat(QueryBase::setBoost, BOOST);
    PARSER.declareString(QueryBase::setName, NAME);
  }

}
