
package org.elasticsearch.indices.monitoring.indices_recovery;

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

public class RecoveryFileDetails  implements XContentable<RecoveryFileDetails> {
  
  static final ParseField LENGTH = new ParseField("length");
  private long _length;
  private boolean _length$isSet;
  public long getLength() { return this._length; }
  public RecoveryFileDetails setLength(long val) {
    this._length = val;
    _length$isSet = true;
    return this;
  }

  static final ParseField NAME = new ParseField("name");
  private String _name;
  public String getName() { return this._name; }
  public RecoveryFileDetails setName(String val) { this._name = val; return this; }

  static final ParseField RECOVERED = new ParseField("recovered");
  private long _recovered;
  private boolean _recovered$isSet;
  public long getRecovered() { return this._recovered; }
  public RecoveryFileDetails setRecovered(long val) {
    this._recovered = val;
    _recovered$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_length$isSet) {
      builder.field(LENGTH.getPreferredName(), _length);
    }
    if (_name != null) {
      builder.field(NAME.getPreferredName(), _name);
    }
    if (_recovered$isSet) {
      builder.field(RECOVERED.getPreferredName(), _recovered);
    }
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
