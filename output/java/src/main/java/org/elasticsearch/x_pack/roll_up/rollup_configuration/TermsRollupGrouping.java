
package org.elasticsearch.x_pack.roll_up.rollup_configuration;

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

public class TermsRollupGrouping  implements XContentable<TermsRollupGrouping> {
  
  static final ParseField FIELDS = new ParseField("fields");
  private List<String> _fields;
  public List<String> getFields() { return this._fields; }
  public TermsRollupGrouping setFields(List<String> val) { this._fields = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_fields != null) {
      builder.array(FIELDS.getPreferredName(), _fields);
    }
  }

  @Override
  public TermsRollupGrouping fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TermsRollupGrouping.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TermsRollupGrouping, Void> PARSER =
    new ObjectParser<>(TermsRollupGrouping.class.getName(), false, TermsRollupGrouping::new);

  static {
    PARSER.declareStringArray(TermsRollupGrouping::setFields, FIELDS);
  }

}
