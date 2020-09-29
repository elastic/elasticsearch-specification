
package org.elasticsearch.indices.index_management.rollover_index;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.internal.*;

public class RolloverConditions  implements XContentable<RolloverConditions> {
  
  static final ParseField MAX_AGE = new ParseField("max_age");
  private String _maxAge;
  public String getMaxAge() { return this._maxAge; }
  public RolloverConditions setMaxAge(String val) { this._maxAge = val; return this; }

  static final ParseField MAX_DOCS = new ParseField("max_docs");
  private long _maxDocs;
  private boolean _maxDocs$isSet;
  public long getMaxDocs() { return this._maxDocs; }
  public RolloverConditions setMaxDocs(long val) {
    this._maxDocs = val;
    _maxDocs$isSet = true;
    return this;
  }

  static final ParseField MAX_SIZE = new ParseField("max_size");
  private String _maxSize;
  public String getMaxSize() { return this._maxSize; }
  public RolloverConditions setMaxSize(String val) { this._maxSize = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_maxAge != null) {
      builder.field(MAX_AGE.getPreferredName(), _maxAge);
    }
    if (_maxDocs$isSet) {
      builder.field(MAX_DOCS.getPreferredName(), _maxDocs);
    }
    if (_maxSize != null) {
      builder.field(MAX_SIZE.getPreferredName(), _maxSize);
    }
  }

  @Override
  public RolloverConditions fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RolloverConditions.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RolloverConditions, Void> PARSER =
    new ObjectParser<>(RolloverConditions.class.getName(), false, RolloverConditions::new);

  static {
    PARSER.declareString(RolloverConditions::setMaxAge, MAX_AGE);
    PARSER.declareLong(RolloverConditions::setMaxDocs, MAX_DOCS);
    PARSER.declareString(RolloverConditions::setMaxSize, MAX_SIZE);
  }

}
