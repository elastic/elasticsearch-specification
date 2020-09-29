
package org.elasticsearch.x_pack.info.x_pack_usage;

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
import org.elasticsearch.x_pack.info.x_pack_usage.*;

public class FlattenedUsage extends XPackUsage implements XContentable<FlattenedUsage> {
  
  static final ParseField FIELD_COUNT = new ParseField("field_count");
  private int _fieldCount;
  private boolean _fieldCount$isSet;
  public int getFieldCount() { return this._fieldCount; }
  public FlattenedUsage setFieldCount(int val) {
    this._fieldCount = val;
    _fieldCount$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_fieldCount$isSet) {
      builder.field(FIELD_COUNT.getPreferredName(), _fieldCount);
    }
  }

  @Override
  public FlattenedUsage fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return FlattenedUsage.PARSER.apply(parser, null);
  }

  public static final ObjectParser<FlattenedUsage, Void> PARSER =
    new ObjectParser<>(FlattenedUsage.class.getName(), false, FlattenedUsage::new);

  static {
    PARSER.declareInt(FlattenedUsage::setFieldCount, FIELD_COUNT);
  }

}
