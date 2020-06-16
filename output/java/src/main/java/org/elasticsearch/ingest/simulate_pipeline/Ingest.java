
package org.elasticsearch.ingest.simulate_pipeline;

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

public class Ingest  implements XContentable<Ingest> {
  
  static final ParseField TIMESTAMP = new ParseField("timestamp");
  private Date _timestamp;
  public Date getTimestamp() { return this._timestamp; }
  public Ingest setTimestamp(Date val) { this._timestamp = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_timestamp != null) {
      builder.field(TIMESTAMP.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_timestamp.toInstant()));
    }
    builder.endObject();
    return builder;
  }

  @Override
  public Ingest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return Ingest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<Ingest, Void> PARSER =
    new ObjectParser<>(Ingest.class.getName(), false, Ingest::new);

  static {
    PARSER.declareObject(Ingest::setTimestamp, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), TIMESTAMP);
  }

}
