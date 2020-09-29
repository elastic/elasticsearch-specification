
package org.elasticsearch.x_pack.machine_learning.preview_datafeed;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_abstractions.response.*;

public class PreviewDatafeedResponse<TDocument> extends ResponseBase<PreviewDatafeedResponse> implements XContentable<PreviewDatafeedResponse> {
  
  static final ParseField DATA = new ParseField("data");
  private List<TDocument> _data;
  public List<TDocument> getData() { return this._data; }
  public PreviewDatafeedResponse<TDocument> setData(List<TDocument> val) { this._data = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_data != null) {
      builder.array(DATA.getPreferredName(), _data);
    }
  }

  @Override
  public PreviewDatafeedResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PreviewDatafeedResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PreviewDatafeedResponse, Void> PARSER =
    new ObjectParser<>(PreviewDatafeedResponse.class.getName(), false, PreviewDatafeedResponse::new);

  static {
    PARSER.declareObjectArray(PreviewDatafeedResponse::setData, (p, t) -> null /* TODO TDocument */, DATA);
  }

}
