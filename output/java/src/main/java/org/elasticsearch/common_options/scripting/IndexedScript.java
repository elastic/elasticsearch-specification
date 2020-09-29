
package org.elasticsearch.common_options.scripting;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_options.scripting.*;

public class IndexedScript extends ScriptBase implements XContentable<IndexedScript> {
  
  static final ParseField ID = new ParseField("id");
  private String _id;
  public String getId() { return this._id; }
  public IndexedScript setId(String val) { this._id = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_id != null) {
      builder.field(ID.getPreferredName(), _id);
    }
  }

  @Override
  public IndexedScript fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return IndexedScript.PARSER.apply(parser, null);
  }

  public static final ObjectParser<IndexedScript, Void> PARSER =
    new ObjectParser<>(IndexedScript.class.getName(), false, IndexedScript::new);

  static {
    PARSER.declareString(IndexedScript::setId, ID);
  }

}
