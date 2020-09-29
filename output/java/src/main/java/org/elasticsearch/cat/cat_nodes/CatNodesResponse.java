
package org.elasticsearch.cat.cat_nodes;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.cat.cat_nodes.*;
import org.elasticsearch.cat.*;
import org.elasticsearch.common_abstractions.response.*;

public class CatNodesResponse extends ResponseBase<CatNodesResponse> implements XContentable<CatNodesResponse> {
  
  static final ParseField RECORDS = new ParseField("records");
  private List<CatNodesRecord> _records;
  public List<CatNodesRecord> getRecords() { return this._records; }
  public CatNodesResponse setRecords(List<CatNodesRecord> val) { this._records = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_records != null) {
      builder.array(RECORDS.getPreferredName(), _records);
    }
  }

  @Override
  public CatNodesResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatNodesResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatNodesResponse, Void> PARSER =
    new ObjectParser<>(CatNodesResponse.class.getName(), false, CatNodesResponse::new);

  static {
    PARSER.declareObjectArray(CatNodesResponse::setRecords, (p, t) -> CatNodesRecord.PARSER.apply(p, t), RECORDS);
  }

}
