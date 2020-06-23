
package org.elasticsearch.modules.snapshot_and_restore.repositories.verify_repository;

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


public class CompactNodeInfo  implements XContentable<CompactNodeInfo> {
  
  static final ParseField NAME = new ParseField("name");
  private String _name;
  public String getName() { return this._name; }
  public CompactNodeInfo setName(String val) { this._name = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_name != null) {
      builder.field(NAME.getPreferredName(), _name);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public CompactNodeInfo fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CompactNodeInfo.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CompactNodeInfo, Void> PARSER =
    new ObjectParser<>(CompactNodeInfo.class.getName(), false, CompactNodeInfo::new);

  static {
    PARSER.declareString(CompactNodeInfo::setName, NAME);
  }

}
