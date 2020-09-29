
package org.elasticsearch.x_pack.sql.query_sql;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_abstractions.lazy_document.*;

public class SqlValue extends LazyDocument implements XContentable<SqlValue> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public SqlValue fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SqlValue.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SqlValue, Void> PARSER =
    new ObjectParser<>(SqlValue.class.getName(), false, SqlValue::new);

  static {
    
  }

}
