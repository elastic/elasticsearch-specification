
package org.elasticsearch.cat.cat_shards;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.cat.cat_shards.*;
import org.elasticsearch.cat.*;
import org.elasticsearch.common_abstractions.response.*;

public class CatShardsResponse extends ResponseBase<CatShardsResponse> implements XContentable<CatShardsResponse> {
  
  static final ParseField RECORDS = new ParseField("records");
  private List<CatShardsRecord> _records;
  public List<CatShardsRecord> getRecords() { return this._records; }
  public CatShardsResponse setRecords(List<CatShardsRecord> val) { this._records = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_records != null) {
      builder.array(RECORDS.getPreferredName(), _records);
    }
  }

  @Override
  public CatShardsResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatShardsResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatShardsResponse, Void> PARSER =
    new ObjectParser<>(CatShardsResponse.class.getName(), false, CatShardsResponse::new);

  static {
    PARSER.declareObjectArray(CatShardsResponse::setRecords, (p, t) -> CatShardsRecord.PARSER.apply(p, t), RECORDS);
  }

}
