
package org.elasticsearch.cat.cat_node_attributes;

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
import org.elasticsearch.cat.cat_node_attributes.*;

public class CatNodeAttributesResponse  implements XContentable<CatNodeAttributesResponse> {
  
  static final ParseField RECORDS = new ParseField("records");
  private List<CatNodeAttributesRecord> _records;
  public List<CatNodeAttributesRecord> getRecords() { return this._records; }
  public CatNodeAttributesResponse setRecords(List<CatNodeAttributesRecord> val) { this._records = val; return this; }


  
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
  public CatNodeAttributesResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatNodeAttributesResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatNodeAttributesResponse, Void> PARSER =
    new ObjectParser<>(CatNodeAttributesResponse.class.getName(), false, CatNodeAttributesResponse::new);

  static {
    PARSER.declareObjectArray(CatNodeAttributesResponse::setRecords, (p, t) -> CatNodeAttributesRecord.PARSER.apply(p, t), RECORDS);
  }

}
