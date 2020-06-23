
package org.elasticsearch.x_pack.machine_learning.post_job_data;

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

public class PostJobDataRequest  implements XContentable<PostJobDataRequest> {
  
  static final ParseField RESET_END = new ParseField("reset_end");
  private Date _resetEnd;
  public Date getResetEnd() { return this._resetEnd; }
  public PostJobDataRequest setResetEnd(Date val) { this._resetEnd = val; return this; }


  static final ParseField RESET_START = new ParseField("reset_start");
  private Date _resetStart;
  public Date getResetStart() { return this._resetStart; }
  public PostJobDataRequest setResetStart(Date val) { this._resetStart = val; return this; }


  static final ParseField DATA = new ParseField("data");
  private List<Object> _data;
  public List<Object> getData() { return this._data; }
  public PostJobDataRequest setData(List<Object> val) { this._data = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_resetEnd != null) {
      builder.field(RESET_END.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_resetEnd.toInstant()));
    }
    if (_resetStart != null) {
      builder.field(RESET_START.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_resetStart.toInstant()));
    }
    if (_data != null) {
      builder.array(DATA.getPreferredName(), _data);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public PostJobDataRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PostJobDataRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PostJobDataRequest, Void> PARSER =
    new ObjectParser<>(PostJobDataRequest.class.getName(), false, PostJobDataRequest::new);

  static {
    PARSER.declareObject(PostJobDataRequest::setResetEnd, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), RESET_END);
    PARSER.declareObject(PostJobDataRequest::setResetStart, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), RESET_START);
    PARSER.declareObjectArray(PostJobDataRequest::setData, (p, t) -> p.objectText(), DATA);
  }

}
