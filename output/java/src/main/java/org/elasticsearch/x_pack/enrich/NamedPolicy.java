
package org.elasticsearch.x_pack.enrich;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.x_pack.enrich.*;

public class NamedPolicy extends EnrichPolicy implements XContentable<NamedPolicy> {
  
  static final ParseField NAME = new ParseField("name");
  private String _name;
  public String getName() { return this._name; }
  public NamedPolicy setName(String val) { this._name = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_name != null) {
      builder.field(NAME.getPreferredName(), _name);
    }
  }

  @Override
  public NamedPolicy fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return NamedPolicy.PARSER.apply(parser, null);
  }

  public static final ObjectParser<NamedPolicy, Void> PARSER =
    new ObjectParser<>(NamedPolicy.class.getName(), false, NamedPolicy::new);

  static {
    PARSER.declareString(NamedPolicy::setName, NAME);
  }

}
