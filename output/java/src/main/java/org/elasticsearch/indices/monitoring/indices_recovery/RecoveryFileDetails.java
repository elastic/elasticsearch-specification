
package org.elasticsearch.indices.monitoring.indices_recovery;

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

public class RecoveryFileDetails  implements XContentable<RecoveryFileDetails> {
  
  static final ParseField LENGTH = new ParseField("length");
  private Long _length;
  public Long getLength() { return this._length; }
  public RecoveryFileDetails setLength(Long val) { this._length = val; return this; }


  static final ParseField NAME = new ParseField("name");
  private String _name;
  public String getName() { return this._name; }
  public RecoveryFileDetails setName(String val) { this._name = val; return this; }


  static final ParseField RECOVERED = new ParseField("recovered");
  private Long _recovered;
  public Long getRecovered() { return this._recovered; }
  public RecoveryFileDetails setRecovered(Long val) { this._recovered = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_length != null) {
      builder.field(LENGTH.getPreferredName(), _length);
    }
    if (_name != null) {
      builder.field(NAME.getPreferredName(), _name);
    }
    if (_recovered != null) {
      builder.field(RECOVERED.getPreferredName(), _recovered);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public RecoveryFileDetails fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RecoveryFileDetails.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RecoveryFileDetails, Void> PARSER =
    new ObjectParser<>(RecoveryFileDetails.class.getName(), false, RecoveryFileDetails::new);

  static {
    PARSER.declareLong(RecoveryFileDetails::setLength, LENGTH);
    PARSER.declareString(RecoveryFileDetails::setName, NAME);
    PARSER.declareLong(RecoveryFileDetails::setRecovered, RECOVERED);
  }

}
