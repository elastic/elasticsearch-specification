
package org.elasticsearch.cat.cat_transforms;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.cat.cat_transforms.*;
import org.elasticsearch.cat.*;
import org.elasticsearch.common_abstractions.response.*;

public class CatTransformsResponse extends ResponseBase<CatTransformsResponse> implements XContentable<CatTransformsResponse> {
  
  static final ParseField RECORDS = new ParseField("records");
  private List<CatTransformsRecord> _records;
  public List<CatTransformsRecord> getRecords() { return this._records; }
  public CatTransformsResponse setRecords(List<CatTransformsRecord> val) { this._records = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_records != null) {
      builder.array(RECORDS.getPreferredName(), _records);
    }
  }

  @Override
  public CatTransformsResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatTransformsResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatTransformsResponse, Void> PARSER =
    new ObjectParser<>(CatTransformsResponse.class.getName(), false, CatTransformsResponse::new);

  static {
    PARSER.declareObjectArray(CatTransformsResponse::setRecords, (p, t) -> CatTransformsRecord.PARSER.apply(p, t), RECORDS);
  }

}
