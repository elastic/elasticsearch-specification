
package org.elasticsearch.x_pack.machine_learning.start_datafeed;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.common_abstractions.request.*;

public class StartDatafeedRequest extends RequestBase<StartDatafeedRequest> implements XContentable<StartDatafeedRequest> {
  
  static final ParseField END = new ParseField("end");
  private Date _end;
  public Date getEnd() { return this._end; }
  public StartDatafeedRequest setEnd(Date val) { this._end = val; return this; }

  static final ParseField START = new ParseField("start");
  private Date _start;
  public Date getStart() { return this._start; }
  public StartDatafeedRequest setStart(Date val) { this._start = val; return this; }

  static final ParseField TIMEOUT = new ParseField("timeout");
  private String _timeout;
  public String getTimeout() { return this._timeout; }
  public StartDatafeedRequest setTimeout(String val) { this._timeout = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_end != null) {
      builder.field(END.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_end.toInstant()));
    }
    if (_start != null) {
      builder.field(START.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_start.toInstant()));
    }
    if (_timeout != null) {
      builder.field(TIMEOUT.getPreferredName(), _timeout);
    }
  }

  @Override
  public StartDatafeedRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return StartDatafeedRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<StartDatafeedRequest, Void> PARSER =
    new ObjectParser<>(StartDatafeedRequest.class.getName(), false, StartDatafeedRequest::new);

  static {
    PARSER.declareObject(StartDatafeedRequest::setEnd, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), END);
    PARSER.declareObject(StartDatafeedRequest::setStart, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), START);
    PARSER.declareString(StartDatafeedRequest::setTimeout, TIMEOUT);
  }

}
