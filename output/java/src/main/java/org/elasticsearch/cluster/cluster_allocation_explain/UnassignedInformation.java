
package org.elasticsearch.cluster.cluster_allocation_explain;

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
import org.elasticsearch.cluster.cluster_allocation_explain.*;

public class UnassignedInformation  implements XContentable<UnassignedInformation> {
  
  static final ParseField AT = new ParseField("at");
  private Date _at;
  public Date getAt() { return this._at; }
  public UnassignedInformation setAt(Date val) { this._at = val; return this; }


  static final ParseField LAST_ALLOCATION_STATUS = new ParseField("last_allocation_status");
  private String _lastAllocationStatus;
  public String getLastAllocationStatus() { return this._lastAllocationStatus; }
  public UnassignedInformation setLastAllocationStatus(String val) { this._lastAllocationStatus = val; return this; }


  static final ParseField REASON = new ParseField("reason");
  private UnassignedInformationReason _reason;
  public UnassignedInformationReason getReason() { return this._reason; }
  public UnassignedInformation setReason(UnassignedInformationReason val) { this._reason = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_at != null) {
      builder.field(AT.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_at.toInstant()));
    }
    if (_lastAllocationStatus != null) {
      builder.field(LAST_ALLOCATION_STATUS.getPreferredName(), _lastAllocationStatus);
    }
    if (_reason != null) {
      builder.field(REASON.getPreferredName());
      _reason.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public UnassignedInformation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return UnassignedInformation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<UnassignedInformation, Void> PARSER =
    new ObjectParser<>(UnassignedInformation.class.getName(), false, UnassignedInformation::new);

  static {
    PARSER.declareObject(UnassignedInformation::setAt, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), AT);
    PARSER.declareString(UnassignedInformation::setLastAllocationStatus, LAST_ALLOCATION_STATUS);
    PARSER.declareField(UnassignedInformation::setReason, (p, t) -> UnassignedInformationReason.PARSER.apply(p), REASON, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
