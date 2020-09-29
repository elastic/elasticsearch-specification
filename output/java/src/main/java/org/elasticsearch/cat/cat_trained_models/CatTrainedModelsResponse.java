
package org.elasticsearch.cat.cat_trained_models;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.cat.cat_trained_models.*;
import org.elasticsearch.cat.*;
import org.elasticsearch.common_abstractions.response.*;

public class CatTrainedModelsResponse extends ResponseBase<CatTrainedModelsResponse> implements XContentable<CatTrainedModelsResponse> {
  
  static final ParseField RECORDS = new ParseField("records");
  private List<CatTrainedModelsRecord> _records;
  public List<CatTrainedModelsRecord> getRecords() { return this._records; }
  public CatTrainedModelsResponse setRecords(List<CatTrainedModelsRecord> val) { this._records = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_records != null) {
      builder.array(RECORDS.getPreferredName(), _records);
    }
  }

  @Override
  public CatTrainedModelsResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatTrainedModelsResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatTrainedModelsResponse, Void> PARSER =
    new ObjectParser<>(CatTrainedModelsResponse.class.getName(), false, CatTrainedModelsResponse::new);

  static {
    PARSER.declareObjectArray(CatTrainedModelsResponse::setRecords, (p, t) -> CatTrainedModelsRecord.PARSER.apply(p, t), RECORDS);
  }

}
