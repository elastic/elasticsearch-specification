
package org.elasticsearch.x_pack.info.x_pack_usage;

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

public class QueryUsage  implements XContentable<QueryUsage> {
  
  static final ParseField TOTAL = new ParseField("total");
  private Integer _total;
  public Integer getTotal() { return this._total; }
  public QueryUsage setTotal(Integer val) { this._total = val; return this; }


  static final ParseField PAGING = new ParseField("paging");
  private Integer _paging;
  public Integer getPaging() { return this._paging; }
  public QueryUsage setPaging(Integer val) { this._paging = val; return this; }


  static final ParseField FAILED = new ParseField("failed");
  private Integer _failed;
  public Integer getFailed() { return this._failed; }
  public QueryUsage setFailed(Integer val) { this._failed = val; return this; }


  static final ParseField COUNT = new ParseField("count");
  private Integer _count;
  public Integer getCount() { return this._count; }
  public QueryUsage setCount(Integer val) { this._count = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_total != null) {
      builder.field(TOTAL.getPreferredName(), _total);
    }
    if (_paging != null) {
      builder.field(PAGING.getPreferredName(), _paging);
    }
    if (_failed != null) {
      builder.field(FAILED.getPreferredName(), _failed);
    }
    if (_count != null) {
      builder.field(COUNT.getPreferredName(), _count);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public QueryUsage fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return QueryUsage.PARSER.apply(parser, null);
  }

  public static final ObjectParser<QueryUsage, Void> PARSER =
    new ObjectParser<>(QueryUsage.class.getName(), false, QueryUsage::new);

  static {
    PARSER.declareInt(QueryUsage::setTotal, TOTAL);
    PARSER.declareInt(QueryUsage::setPaging, PAGING);
    PARSER.declareInt(QueryUsage::setFailed, FAILED);
    PARSER.declareInt(QueryUsage::setCount, COUNT);
  }

}
