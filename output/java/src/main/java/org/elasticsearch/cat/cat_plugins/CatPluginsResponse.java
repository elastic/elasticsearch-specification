
package org.elasticsearch.cat.cat_plugins;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.cat.cat_plugins.*;
import org.elasticsearch.cat.*;
import org.elasticsearch.common_abstractions.response.*;

public class CatPluginsResponse extends ResponseBase<CatPluginsResponse> implements XContentable<CatPluginsResponse> {
  
  static final ParseField RECORDS = new ParseField("records");
  private List<CatPluginsRecord> _records;
  public List<CatPluginsRecord> getRecords() { return this._records; }
  public CatPluginsResponse setRecords(List<CatPluginsRecord> val) { this._records = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_records != null) {
      builder.array(RECORDS.getPreferredName(), _records);
    }
  }

  @Override
  public CatPluginsResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatPluginsResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatPluginsResponse, Void> PARSER =
    new ObjectParser<>(CatPluginsResponse.class.getName(), false, CatPluginsResponse::new);

  static {
    PARSER.declareObjectArray(CatPluginsResponse::setRecords, (p, t) -> CatPluginsRecord.PARSER.apply(p, t), RECORDS);
  }

}
