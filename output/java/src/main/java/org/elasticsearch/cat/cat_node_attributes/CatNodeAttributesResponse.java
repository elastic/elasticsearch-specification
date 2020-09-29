
package org.elasticsearch.cat.cat_node_attributes;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.cat.cat_node_attributes.*;
import org.elasticsearch.cat.*;
import org.elasticsearch.common_abstractions.response.*;

public class CatNodeAttributesResponse extends ResponseBase<CatNodeAttributesResponse> implements XContentable<CatNodeAttributesResponse> {
  
  static final ParseField RECORDS = new ParseField("records");
  private List<CatNodeAttributesRecord> _records;
  public List<CatNodeAttributesRecord> getRecords() { return this._records; }
  public CatNodeAttributesResponse setRecords(List<CatNodeAttributesRecord> val) { this._records = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_records != null) {
      builder.array(RECORDS.getPreferredName(), _records);
    }
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
