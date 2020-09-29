
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

public class QueryUsage  implements XContentable<QueryUsage> {
  
  static final ParseField COUNT = new ParseField("count");
  private int _count;
  private boolean _count$isSet;
  public int getCount() { return this._count; }
  public QueryUsage setCount(int val) {
    this._count = val;
    _count$isSet = true;
    return this;
  }

  static final ParseField FAILED = new ParseField("failed");
  private int _failed;
  private boolean _failed$isSet;
  public int getFailed() { return this._failed; }
  public QueryUsage setFailed(int val) {
    this._failed = val;
    _failed$isSet = true;
    return this;
  }

  static final ParseField PAGING = new ParseField("paging");
  private int _paging;
  private boolean _paging$isSet;
  public int getPaging() { return this._paging; }
  public QueryUsage setPaging(int val) {
    this._paging = val;
    _paging$isSet = true;
    return this;
  }

  static final ParseField TOTAL = new ParseField("total");
  private int _total;
  private boolean _total$isSet;
  public int getTotal() { return this._total; }
  public QueryUsage setTotal(int val) {
    this._total = val;
    _total$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_count$isSet) {
      builder.field(COUNT.getPreferredName(), _count);
    }
    if (_failed$isSet) {
      builder.field(FAILED.getPreferredName(), _failed);
    }
    if (_paging$isSet) {
      builder.field(PAGING.getPreferredName(), _paging);
    }
    if (_total$isSet) {
      builder.field(TOTAL.getPreferredName(), _total);
    }
  }

  @Override
  public QueryUsage fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return QueryUsage.PARSER.apply(parser, null);
  }

  public static final ObjectParser<QueryUsage, Void> PARSER =
    new ObjectParser<>(QueryUsage.class.getName(), false, QueryUsage::new);

  static {
    PARSER.declareInt(QueryUsage::setCount, COUNT);
    PARSER.declareInt(QueryUsage::setFailed, FAILED);
    PARSER.declareInt(QueryUsage::setPaging, PAGING);
    PARSER.declareInt(QueryUsage::setTotal, TOTAL);
  }

}
