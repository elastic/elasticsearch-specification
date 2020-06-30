
package org.elasticsearch.modules.snapshot_and_restore.repositories;

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


public class SnapshotRepository  implements XContentable<SnapshotRepository> {
  
  static final ParseField TYPE = new ParseField("type");
  private String _type;
  public String getType() { return this._type; }
  public SnapshotRepository setType(String val) { this._type = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_type != null) {
      builder.field(TYPE.getPreferredName(), _type);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public SnapshotRepository fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SnapshotRepository.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SnapshotRepository, Void> PARSER =
    new ObjectParser<>(SnapshotRepository.class.getName(), false, SnapshotRepository::new);

  static {
    PARSER.declareString(SnapshotRepository::setType, TYPE);
  }

}
