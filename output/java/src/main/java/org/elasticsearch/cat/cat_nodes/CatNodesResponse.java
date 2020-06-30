
package org.elasticsearch.cat.cat_nodes;

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
import org.elasticsearch.cat.cat_nodes.*;

public class CatNodesResponse  implements XContentable<CatNodesResponse> {
  
  static final ParseField RECORDS = new ParseField("records");
  private List<CatNodesRecord> _records;
  public List<CatNodesRecord> getRecords() { return this._records; }
  public CatNodesResponse setRecords(List<CatNodesRecord> val) { this._records = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_records != null) {
      builder.array(RECORDS.getPreferredName(), _records);
    }
    builder.endObject();
    return builder;
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
