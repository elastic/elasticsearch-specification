
package org.elasticsearch.x_pack.info.x_pack_usage;

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

public class FlattenedUsage  implements XContentable<FlattenedUsage> {
  
  static final ParseField FIELD_COUNT = new ParseField("field_count");
  private Integer _fieldCount;
  public Integer getFieldCount() { return this._fieldCount; }
  public FlattenedUsage setFieldCount(Integer val) { this._fieldCount = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_fieldCount != null) {
      builder.field(FIELD_COUNT.getPreferredName(), _fieldCount);
    }
    builder.endObject();
    return builder;
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
